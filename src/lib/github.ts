import { Octokit } from '@octokit/rest'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN,
})

export interface GitHubPullRequest {
  id: number
  number: number
  title: string
  body: string | null
  html_url: string
  state: 'open' | 'closed'
  created_at: string
  updated_at: string
  closed_at: string | null
  merged_at: string | null
  user: {
    login: string
    avatar_url: string
    html_url: string
  }
  head: {
    ref: string
    repo: {
      name: string
      full_name: string
      owner: {
        login: string
      }
    }
  }
  base: {
    ref: string
    repo: {
      name: string
      full_name: string
      owner: {
        login: string
      }
    }
  }
}

export interface ProcessedContribution {
  title: string
  description: string
  repository: string
  link: string
  date: string
  type: 'feature' | 'fix' | 'perf' | 'docs' | 'refactor' | 'test' | 'chore' | 'bug'
  state: 'open' | 'closed' | 'merged'
}

// Extract PR type from title 
function extractPRType(title: string): ProcessedContribution['type'] {
  const lowerTitle = title.toLowerCase()
  
  if (lowerTitle.startsWith('feat')) return 'feature'
  if (lowerTitle.startsWith('fix')) return 'fix'
  if (lowerTitle.startsWith('perf')) return 'perf'
  if (lowerTitle.startsWith('docs')) return 'docs'
  if (lowerTitle.startsWith('refactor')) return 'refactor'
  if (lowerTitle.startsWith('test')) return 'test'
  if (lowerTitle.startsWith('chore')) return 'chore'
  
  return 'feature' // default
}


function formatDate(dateString: string): string {
  return new Date(dateString).getFullYear().toString()
}


export async function fetchUserPullRequests(username: string, limit: number = 50): Promise<ProcessedContribution[]> {
  const token = process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN
  
  if (!token) {
    return []
  }

  try {
    // Try the merged search first using advanced search
    const { data } = await octokit.request('GET /search/issues', {
      q: `is:pr author:${username} is:merged`,
      sort: 'updated',
      order: 'desc',
      per_page: limit,
      advanced_search: 'true',
    })
    
    // If no merged PRs found, try finding closed PRs that might be merged
    if (data.total_count === 0) {
      const { data: closedData } = await octokit.request('GET /search/issues', {
        q: `is:pr author:${username} is:closed`,
        sort: 'updated',
        order: 'desc',
        per_page: limit,
        advanced_search: 'true',
      })
      
      // Filter for actually merged PRs from the closed results
      const mergedPRs = closedData.items.filter((item: unknown) => {
        const pr = item as { pull_request?: { merged_at: string | null } }
        return pr.pull_request?.merged_at
      })
      
      const pullRequests = mergedPRs as unknown as GitHubPullRequest[]
      
    const contributions = pullRequests
      .filter(pr => {
        // Extract repository owner from the URL to filter out self repos
        const repoUrl = pr.html_url
        const repoMatch = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)\/pull/)
        const repoOwner = repoMatch ? repoMatch[1] : 'unknown'
        
        // Only include PRs from other repositories 
        return repoOwner !== username
      })
      .map(pr => {
        // Extract repository name from the URL since the search API doesn't include full repo info
        const repoUrl = pr.html_url
        const repoMatch = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)\/pull/)
        const repository = repoMatch ? repoMatch[1] : 'unknown'
        
        return {
          title: pr.title,
          description: `Contributed to ${repository}`,
          repository: repository,
          link: pr.html_url,
          date: formatDate(pr.merged_at || pr.created_at),
          type: extractPRType(pr.title),
          state: 'merged' as const,
        }
      })

      return contributions
    }
    
    const pullRequests = data.items as unknown as GitHubPullRequest[]
    
    const contributions = pullRequests
      .filter(pr => {
        // Extract repository owner from the URL to filter out self repos
        const repoUrl = pr.html_url
        const repoMatch = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)\/pull/)
        const repoOwner = repoMatch ? repoMatch[1] : 'unknown'
        
        // Only include PRs from other repositories (not your own)
        return repoOwner !== username
      })
      .map(pr => {
        // Extract repository name from the URL since the search API doesn't include full repo info
        const repoUrl = pr.html_url
        const repoMatch = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)\/pull/)
        const repository = repoMatch ? repoMatch[1] : 'unknown'
        
        return {
          title: pr.title,
          description: `Contributed to ${repository}`,
          repository: repository, 
          link: pr.html_url,
          date: formatDate(pr.merged_at || pr.created_at), 
          type: extractPRType(pr.title),
          state: 'merged' as const,
        }
      })
    
    return contributions
  } catch {
    return []
  }
}

// Fallback data in case API fails
export const fallbackContributions: ProcessedContribution[] = [
  {
    title: "Fix: Improve arXiv identifier detection from pasted URLs",
    description: "Enhanced arXiv identifier recognition by adding a findInText() method that correctly extracts identifiers from pasted arXiv URLs, including HTML links with fragments. Updated identifier detection flow and added comprehensive unit tests.",
    repository: "JabRef",
    link: "https://github.com/JabRef/jabref/pull/14760",
    date: "2026",
    type: "fix",
    state: "merged"
  },
  {
    title: "Feat: Add PersonNamesPlausibilityComparator for better merge accuracy",
    description: "Implemented a comparator logic to automatically select the most complete author list (based on count or length) during bibliographic entry merges, improving data consistency.",
    repository: "JabRef",
    link: "https://github.com/JabRef/jabref/pull/14546",
    date: "2025",
    type: "feature",
    state: "merged"
  },
  {
    title: "Fix: Ctrl+Shift+L now opens terminal in the active library directory",
    description: "Fixed a bug where the 'Open terminal here' shortcut opened the wrong path. It now correctly launches the terminal in the currently active library's folder.",
    repository: "JabRef",
    link: "https://github.com/JabRef/jabref/pull/14256",
    date: "2025",
    type: "fix",
    state: "merged"
  },
  {
    title: "docs: add {tenant} placeholder in webhook trigger URL description",
    description: "Corrected the Webhook trigger documentation by adding the missing {tenant} placeholder to the API execution URL, ensuring accuracy for Enterprise Edition users.",
    repository: "kestra-io",
    link: "https://github.com/kestra-io/kestra/pull/12185",
    date: "2025",
    type: "docs",
    state: "merged"
  },
  {
    title: "fix: correct broken link in prompt create page",
    description: "Resolved broken 404 links in the 'Prompt CREATE' documentation by updating paths for the CreateUser custom script.",
    repository: "JanssenProject",
    link: "https://github.com/JanssenProject/jans/pull/12399",
    date: "2025",
    type: "bug",
    state: "merged"
  },
  {
    title: "Feat: Add MonthPlausibilityComparator to prefer normalized months",
    description: "Developed a comparator to prioritize normalized BibTeX month fields (e.g., `jun`) over hardcoded strings during merges, ensuring better standard compliance.",
    repository: "JabRef",
    link: "https://github.com/JabRef/jabref/pull/14629",
    date: "2025",
    type: "feature",
    state: "closed" 
  }
]
'use client';

import { Project } from '@/types/project'
import { FaGithub} from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import VideoCover from './VideoCover';
import BrowserFrame from './BrowserFrame'; 

interface ProjectCardProps {
  project: Project;
  isDetailed?: boolean;
  allProjects?: Project[];
}

const getVideoPath = (videoId: string) => {
  if (videoId.startsWith('http')) {
    return videoId;
  }

  switch (videoId) {
    default:
      return null;
  }
};

export const ProjectCard = ({ project, isDetailed = false, allProjects = [] }: ProjectCardProps) => {

  if (!isDetailed) {
    return (
      <Link 
        href={`/projects/${project.id}`}
        className="block touch-manipulation active:opacity-75"
        style={{ 
          WebkitTapHighlightColor: 'transparent',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none'
        }}
      >
        <div className="hover:underline py-2 text-base sm:text-lg md:text-xl pb-4 sm:pb-5 border-b border-neutral-600 dark:border-neutral-500">
          {project.title}
        </div>
      </Link>
    );
  }

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <article className="w-full max-w-none px-2 sm:px-0">
      <header className="mb-8 sm:mb-12">
        <div className="flex items-start justify-between mb-4 sm:mb-6 gap-3">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium flex-1 min-w-0 break-words tracking-tight">{project.title}</h1>
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.liveLink && (
              <Link 
                href={project.liveLink} 
                target="_blank" 
                className="bg-neutral-200 border-2 border-black dark:bg-neutral-800 dark:border-neutral-500 p-2 rounded-full hover:opacity-70 transition-opacity"
              >
                <FiArrowUpRight className="size-5" />
              </Link>
            )}
            {project.githubLink && (
              <Link 
                href={project.githubLink} 
                target="_blank" 
                className="bg-neutral-200 border-2 border-black dark:bg-neutral-800 dark:border-neutral-500 p-2 rounded-full hover:opacity-70 transition-opacity"
              >
                <FaGithub className="size-5" />
              </Link>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-neutral-100 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Media Section with BROWSER FRAME */}
      <div className="mb-10 sm:mb-14">
        {project.video && getVideoPath(project.video) ? (
          
          <BrowserFrame>
             <div className="w-full aspect-video relative bg-neutral-100 dark:bg-neutral-900">
               <VideoCover
                 src={getVideoPath(project.video)!}
                 poster={project.image}
               />
             </div>
          </BrowserFrame>
        ) : project.image && (
          
          <BrowserFrame>
            <div className="w-full aspect-video relative">
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-contain pointer-events-none"
                quality={95}
                priority
              />
            </div>
          </BrowserFrame>
        )}
      </div>

      <div className="mb-12 sm:mb-16">
        <div className="space-y-6 max-w-2xl">
          <div className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line">
             {project.longDescription || project.description}
          </div>
        </div>
      </div>

      {(prevProject || nextProject) && (
        <div className="grid grid-cols-2 gap-4 pt-12 border-t border-neutral-200 dark:border-neutral-800 mt-16">
          {/* Previous Project Button */}
          {prevProject ? (
            <Link 
              href={`/projects/${prevProject.id}`}
              className="group flex flex-col items-start gap-1 text-left"
            >
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Previous</span>
              <span className="text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline decoration-neutral-400 underline-offset-4">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div /> 
          )}

          {/* Next Project Button */}
          {nextProject ? (
            <Link 
              href={`/projects/${nextProject.id}`}
              className="group flex flex-col items-end gap-1 text-right"
            >
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Next</span>
              <span className="text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline decoration-neutral-400 underline-offset-4">
                {nextProject.title}
              </span>
            </Link>
          ) : null}
        </div>
      )}

    </article>
  );
};
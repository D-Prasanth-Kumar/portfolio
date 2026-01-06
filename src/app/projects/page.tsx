import { projects } from '@/data/projects'
import ProjectsListClient from '../../components/ProjectsListClient'

export const metadata = {
  title: 'Projects | Prasanth Kumar',
  description: 'Showcase of my projects',
}

export default function ProjectsPage() {
  return <ProjectsListClient projects={projects} />
}
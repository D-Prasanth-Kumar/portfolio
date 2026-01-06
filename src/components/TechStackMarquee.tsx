'use client'

import { Marquee } from "@/components/magicui/marquee";
import { 
  SiJavascript, 
  SiSpringboot, 
  SiPython, 
  SiHtml5,
  SiCss3,
  SiReact, 
  SiPostgresql, 
  SiGit, 
  SiDocker, 
  SiGithub,
  SiArduino,      
  SiPostman,      
  SiApachemaven,  
  SiMysql
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const techStack = [
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
  { name: "Maven", icon: SiApachemaven, color: "text-red-600" },

  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "React.js", icon: SiReact, color: "text-blue-400" },

  { name: "SQL", icon: SiMysql, color: "text-blue-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "GitHub", icon: SiGithub, color: "text-foreground" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Arduino", icon: SiArduino, color: "text-teal-500" },
  
  { name: "Python", icon: SiPython, color: "text-yellow-500" },

  { name: "REST APIs", icon: TbApi, color: "text-green-600" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
];

function TechIcon({ tech }: { tech: any }) {
  const Icon = tech.icon;
  return (
    <div className="flex flex-col items-center justify-center p-2 sm:p-3 transition-all duration-300 hover:scale-105 min-w-[80px] sm:min-w-[90px] group">
      {/* Icon Container */}
      <div className="relative w-8 h-8 sm:w-10 sm:h-10 mb-2 flex items-center justify-center">
        <Icon className={`w-full h-full ${tech.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
      </div>
      
      {/* Tech Name */}
      <span className="text-[10px] sm:text-xs text-center font-medium text-neutral-500 dark:text-neutral-500 leading-tight group-hover:text-black dark:group-hover:text-white transition-colors">
        {tech.name}
      </span>
    </div>
  );
}

export default function TechStackMarquee({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="mb-4">
        <h2 className="text-base sm:text-xl mb-3 text-neutral-600 dark:text-neutral-600 mt-4 sm:mt-6 -tracking-[0.01em] opacity-50">
          Stack I use
        </h2>
        
      </div>

      <div className="relative">
        <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem]">
          {techStack.map((tech, index) => (
            <TechIcon key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </Marquee>

        {/* Fade to background */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
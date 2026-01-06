'use client';
import { FaLinkedin, FaGithub, FaPaperclip } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

interface ProfileHeaderProps {
  name?: string
  age?: string
  title?: string
  profileImage?: string
  socialLinks?: {
    leetcode?: string
    resume?: string
    github?: string
    linkedin?: string
  }
}

export default function ProfileHeader({
  name = "Prasanth Kumar",
  age = "23",
  title = "Master of Science in CS • Java Developer",
  profileImage = "/pfp.jpeg",
  socialLinks = {
    leetcode: "https://leetcode.com/u/D_Prasanth_Kumar/",
    github: "https://github.com/D-Prasanth-Kumar",
    linkedin: "https://www.linkedin.com/in/prasanthh-kumar/",
    resume: "https://drive.google.com/file/d/10FRJE4n3VVVNokEF8NmSFyWTMpNsBT-w/view?usp=sharing",
  }
}: ProfileHeaderProps) {

  return (
    <div className="flex-col -mt-10">
      <div 
        className="w-24 h-24 sm:w-28 sm:h-28 mb-4 sm:ml-8 ml-4 relative z-10 rounded-full overflow-hidden bg-cover bg-center"
        role="img"
        aria-label={name}
        style={{ backgroundImage: `url("${profileImage}")` }}
      />
      <div className="text-left sm:flex sm:justify-between sm:items-center w-full sm:px-8 px-4 flex-col sm:flex-row">
        <div className="px-0">
          <h1 className="font-[family-name:var(--font-instrument-serif)] italic text-2xl sm:text-4xl tracking-[0.01em] font-medium mb-0">
            {name}
          </h1>
          <p className="opacity-40 text-xs sm:text-sm">
            {age} • {title}
          </p>
        </div>
        <div className="flex justify-start space-x-4 mt-3 sm:mt-0 px-0">
          {socialLinks.github && (
            <a 
              className="hover:opacity-80 touch-manipulation active:opacity-75" 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <FaGithub size={18} />
            </a>
          )}
          {socialLinks.leetcode && (
            <a 
              className="hover:opacity-80 touch-manipulation active:opacity-75" 
              href={socialLinks.leetcode} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <SiLeetcode size={18} />
            </a>
          )}
          {socialLinks.resume && (
            <a 
              className="hover:opacity-80 touch-manipulation active:opacity-75" 
              href={socialLinks.resume} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <FaPaperclip size={18} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a 
              className="hover:opacity-80 touch-manipulation active:opacity-75" 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <FaLinkedin size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
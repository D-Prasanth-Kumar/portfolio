'use client'

import Link from 'next/link'
import DiagonalPattern from './DiagonalPattern'
import BannerSection from './BannerSection'
import ProfileHeader from './ProfileHeader'
import ContentSection from './ContentSection'
import ContentParagraph from './ContentParagraph'
import SectionBorder from './SectionBorder'
import ExperienceContent from './ExperienceContent'
import Reachout from './Reachout'
import CallToAction from './CallToAction'
import ContributionsDisplay from './ContributionsDisplay'
import OpenSourceContributionsCard from './ContributionCard'
import TechStackMarquee from './TechStackMarquee'
import { projects } from '@/data/projects';
import { Reveal } from './Reveal'
import { MasonryProjectCard } from './MasonryProjectCard';

export default function NewHeroSection() {
  return (
    <div className="min-h-screen transition-colors duration-300 relative" style={{ fontFamily: 'var(--font-hk-grotesk)' }}>
      <div className="relative mx-auto max-w-4xl">
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />
        
        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0">
          {/* Banner Section */}
          <Reveal delay={0.1}>
            <BannerSection 
              bannerImage="/mountain.jpg"
              quote="Contribute • Learn • Improve"
            />
          </Reveal>
          
          {/* Profile Header */}
          <Reveal delay={0.2}>
            <ProfileHeader 
              name="Prasanth Kumar"
            //  age="23"
              title="Master of Science in CS • Java Developer"
              profileImage="/pfp.jpeg"
              socialLinks={{
                leetcode: "https://leetcode.com/u/D_Prasanth_Kumar/",
                github: "https://github.com/D-Prasanth-Kumar",
                linkedin: "https://www.linkedin.com/in/prasanthh-kumar/",
                resume: "https://drive.google.com/file/d/10FRJE4n3VVVNokEF8NmSFyWTMpNsBT-w/view?usp=sharing",
              }}
            />
          </Reveal>
          
          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Current Role Section */}
              <Reveal delay={0.1}>
                <ContentSection
                  subtitle="Interested in Open Source | Java Developer"
                  title=''
                  className="mt-6"
                >
                  <div></div>
                </ContentSection>
              </Reveal>
              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>
              
              {/* About Section */}
              <Reveal delay={0.1}>
                <ContentSection className="pb-6 sm:pb-8 pt-4 sm:pt-6 px-2 sm:px-0">
                  <ContentParagraph className="mb-2 text-base sm:text-lg">
                    <span className="font-medium dark:text-white text-black"></span> I’m a software developer with a backend focus and a strong interest for problem-solving and fundamentals. I enjoy designing clean systems that are correct, understandable, and built to last.
                  </ContentParagraph>
                  <ContentParagraph className="mb-2 text-base sm:text-lg">
                    <span className="font-medium dark:text-white text-black"></span> I prefer building from scratch and owning the full lifecycle of a project — not just writing features, but understanding the architecture, data flow, and decisions behind them. I care less about hype and more about doing things the right way.
                  </ContentParagraph>
                  <ContentParagraph className="mb-2 text-base sm:text-lg">
                    <span className="font-medium dark:text-white text-black"></span> I’m constantly learning, questioning, and refining my approach, with one goal in mind: becoming a better engineer and building meaningful solutions that people enjoy using.
                  </ContentParagraph>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

               {/* Experience Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 py-2">
                  <h2 className="text-base sm:text-xl mb-3 opacity-20 mt-4 sm:mt-6 px-4">Experience</h2>
                  <div className="px-4">
                    <ExperienceContent />
                  </div>
                </div>
              </Reveal>

                <Reveal delay={0.05}>
                  <SectionBorder className="mt-4" />
                </Reveal>

                {/* Projects */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 py-2">
                  <div className="px-4 mb-4 sm:mb-6 mt-4 sm:mt-6">
                    <h2 className="text-base sm:text-xl opacity-20 font-[family-name:var(--font-instrument-serif)]">Projects</h2>
                  </div>
                  <div className="px-4">
                    <div className="grid grid-cols-1 gap-4 sm:gap-3 sm:grid-cols-2 group">
                      {/* This loops through your projects and displays them */}
                      {projects.slice(0, 6).map((project) => (
                        <MasonryProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                  <div className="px-4 flex justify-end mt-6 sm:mt-8 mb-4 sm:mb-6">
                    <Link 
                      href="/projects"
                      className="text-xs sm:text-sm text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors inline-flex items-center gap-1"
                    >
                      View All
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
                 {/* Technical Contributions */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 py-2">
                  <h2 className="text-base sm:text-xl mb-3 opacity-20 mt-4 sm:mt-6 px-4">Technical Contributions</h2>
                  <div className="px-4 space-y-3 sm:space-y-4 dark:text-white/70 text-black/70 pb-4 sm:pb-6">
                    <ContentParagraph className="text-sm sm:text-base">
                      <span className="font-medium dark:text-white text-black"></span> I focus on translating real problems into reliable backend behavior. My contributions typically involve analyzing existing workflows, tightening decision logic, and improving how systems handle data, edge cases, and user-driven scenarios.
                    </ContentParagraph>
                    <ContentParagraph className="text-sm sm:text-base">
                      <span className="font-medium dark:text-white text-black"> </span> I enjoy working on changes that sit close to core functionality — where small improvements have a noticeable impact on correctness, consistency, and overall system quality.
                    </ContentParagraph>
                  </div>
                </div>
              </Reveal>


              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* GitHub Contributions */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 px-0 mt-4">
                  <h2 className="text-base sm:text-xl opacity-20 leading-relaxed -tracking-[0.01em] mb-4 px-4">
                    GitHub Contributions <span className="opacity-20">●</span> @D-Prasanth-Kumar
                  </h2>
                  <div className="mb-4 sm:mb-6">
                    <ContributionsDisplay
                      username="D-Prasanth-Kumar"
                      variant="compact"
                      className="w-full"
                    />
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* Tech Stack Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 mt-4 sm:mt-6 mb-4 sm:mb-6">
                  <div className="px-4">
                    <TechStackMarquee className="w-full" />
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* Open Source Contributions Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 mt-4">
                  <h2 className="text-base sm:text-xl opacity-20 mt-4 sm:mt-8 sm:ml-5 leading-relaxed -tracking-[0.01em] mb-4 px-4">
                    GitHub Contributions <span className="opacity-20">●</span> {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </h2>
                  <div className="px-4">
                    <OpenSourceContributionsCard />
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-4 pt-0" />
              </Reveal>

              {/* call to action*/}
              <Reveal delay={0.1}>
                <div className="px-4 sm:px-0">
                  <CallToAction/>
                </div>
              </Reveal>
              
              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>
              
              {/* Reachout Section */}
              <Reveal delay={0.1}>
                <div className="mt-4 sm:mt-6">
                  <Reachout 
                    title="Let's connect"
                    subtitle="Find me on these platforms"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
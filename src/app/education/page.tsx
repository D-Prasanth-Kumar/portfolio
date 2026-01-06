'use client'

import OnekoCat from '@/components/OnekoCat'
import FadeIn from '@/components/FadeIn'
import DiagonalPattern from '@/components/DiagonalPattern'
import ResizablePortfolioNavigation from '@/components/MainNavigation'
import SectionBorder from '@/components/SectionBorder'

export default function EducationPage() {
  return (
    <div className="min-h-screen transition-colors duration-300 relative" style={{ fontFamily: 'var(--font-hk-grotesk)' }}>
      <OnekoCat />
      <div className="relative mx-auto max-w-4xl">
        <DiagonalPattern side="left" topOffset="0" />
        <DiagonalPattern side="right" topOffset="0" />
        
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0">
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              
              {/* Header Section */}
              <FadeIn delay={0.1} duration={0.5}>
                <div className="sm:px-12 py-2">
                  <div className="px-4 mb-4 sm:mb-6 pt-4 sm:pt-6">
                    <div className="mb-4 sm:mb-6">
                      <ResizablePortfolioNavigation />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-[family-name:var(--font-instrument-serif)] italic font-medium mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight">
                      education
                    </h1>
                    <p className="text-lg text-neutral-500 dark:text-neutral-400 tracking-wide">
                      My academic journey and qualifications.
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              <div className="sm:px-12 py-2">
                <div className="px-4">
                  <SectionBorder className="mb-8" />
                  
                  {/* Master's Degree */}
                  <FadeIn delay={0.2} duration={0.5}>
                    <div className="mb-12">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                        <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                          Master of Science (M.Sc) in Computer Science
                        </h2>
                        <span className="text-sm font-mono text-neutral-500">2023 — 2025</span>
                      </div>
                      <div className="text-base text-neutral-600 dark:text-neutral-400 mb-4">
                        Gayatri Vidya Parishad College for Degree and PG Courses, Visakhapatnam, India
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base">
                        Coursework: Data Structures, Operating System, JAVA, DBMS, Python, Computer Networks, Network Security,, Web Programming
                      </p>
                    </div>
                  </FadeIn>

                  <SectionBorder className="mb-8" />

                  {/* Bachelor's Degree */}
                  <FadeIn delay={0.3} duration={0.5}>
                    <div className="mb-12">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                        <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                          Bachelor of Science (B.Sc)
                        </h2>
                        <span className="text-sm font-mono text-neutral-500">2020 — 2023</span>
                      </div>
                      <div className="text-base text-neutral-600 dark:text-neutral-400 mb-4">
                        Gayatri Vidya Parishad College for Degree and PG Courses, Visakhapatnam, India
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base">
                        Majors: Mathematics, Electronics, Computer Science
                      </p>
                    </div>
                  </FadeIn>

                  <SectionBorder className="mb-8" />

                  {/* Intermediate */}
                  <FadeIn delay={0.3} duration={0.5}>
                    <div className="mb-12">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                        <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                          Board of Intermediate Education (BIEAP) - Intermediate
                        </h2>
                        <span className="text-sm font-mono text-neutral-500">2018 — 2020</span>
                      </div>
                      <div className="text-base text-neutral-600 dark:text-neutral-400 mb-4">
                        Narayana Junior College, Visakhapatnam, India
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base">
                        Majors: Mathematics, Physics, Chemistry
                      </p>
                    </div>
                  </FadeIn>

                  <SectionBorder className="mb-8" />
                        
                  {/* X Class */}
                  <FadeIn delay={0.3} duration={0.5}>
                    <div className="mb-12">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                        <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                          Board of Secondary Education (BSEAP) - X Class
                        </h2>
                        <span className="text-sm font-mono text-neutral-500">2018</span>
                      </div>
                      <div className="text-base text-neutral-600 dark:text-neutral-400 mb-4">
                        Universal Public School, Visakhapatnam, India
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base">
                      </p>
                    </div>
                  </FadeIn>

                </div>
              </div>
              <div className="pb-24 sm:pb-28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
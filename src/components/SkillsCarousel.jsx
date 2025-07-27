import { useEffect, useState } from 'react';

export function SkillsCarousel() {
  const skills = [
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61DAFB'
    },
    {
      name: 'TypeScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      color: '#3178C6'
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: '#F7DF1E'
    },
    {
      name: 'Next.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      color: '#000000'
    },
    {
      name: 'Vue.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      color: '#4FC08D'
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: '#339933'
    },
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: '#3776AB'
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      color: '#06B6D4'
    },
    {
      name: 'Sass',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      color: '#CC6699'
    },
    
  ];

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-background via-muted/20 to-background py-8">
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        {/* <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" /> */}
        
        {/* Skills carousel */}
        <div className="flex animate-scroll space-x-12">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group flex flex-col items-center justify-center min-w-[120px] p-4 hover:scale-110 transition-transform duration-300"
            >
              <div className="w-16 h-16 mb-3 flex items-center justify-center bg-card/50 rounded-xl border border-border/50 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 object-contain transition-all duration-300 group-hover:scale-110"
                  style={{
                    filter: 'brightness(0.9) contrast(1.1)'
                  }}
                />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
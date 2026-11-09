import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../data/companyData';

export const CredibilityStats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 900; // ms
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts(
              STATS.map((stat) => Math.round(stat.value * easeOut))
            );

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setCounts(STATS.map((stat) => stat.value));
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="credibility"
      ref={sectionRef}
      className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="bg-[#121418] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-xl">
        <div className="text-center mb-6">
          <span className="text-[11px] uppercase tracking-widest text-[#c8a261] font-semibold">
            Group Scale & Capability
          </span>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
            Strength in Numbers. Built on Experience.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`pt-4 md:pt-0 ${index !== 0 ? 'md:pl-6' : ''} text-center md:text-left flex flex-col justify-between`}
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-extrabold tracking-tight text-white tabular-nums">
                  <span>{counts[index]}</span>
                  <span className="text-[#c8a261]">{stat.suffix}</span>
                </div>
                <div className="text-sm font-semibold text-neutral-200 mt-1">
                  {stat.label}
                </div>
              </div>
              <p className="text-xs text-neutral-400 mt-1 leading-snug">
                {stat.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';

export default function InfiniteMarquee({ items, reverse = false }) {
  const speedClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';
  
  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      {/* Glass gradient masks for cinematic fade in and fade out */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#030014] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#030014] to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-[200%]">
        {/* Track 1 */}
        <div className={`flex items-center justify-around min-w-full gap-4 ${speedClass}`}>
          {items.map((item, idx) => (
            <div 
              key={`t1-${idx}`} 
              className="glass-panel px-6 py-3 rounded-full text-xs md:text-sm font-medium tracking-wide text-gray-300 hover:text-white border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.2)] flex items-center gap-2 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
            >
              {item}
            </div>
          ))}
        </div>
        {/* Track 2 (identically duplicated for seamless looping) */}
        <div className={`flex items-center justify-around min-w-full gap-4 ${speedClass}`} aria-hidden="true">
          {items.map((item, idx) => (
            <div 
              key={`t2-${idx}`} 
              className="glass-panel px-6 py-3 rounded-full text-xs md:text-sm font-medium tracking-wide text-gray-300 hover:text-white border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.2)] flex items-center gap-2 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

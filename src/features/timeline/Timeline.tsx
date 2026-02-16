import React from 'react';

const mockTasks = [
  { id: 't1', day: 2, countInDay: 1, title: 'Lab 1', color: 'bg-green-500' },
  { id: 't2', day: 3, countInDay: 2, title: 'Lab 2', color: 'bg-orange-500' },
  { id: 't3', day: 3, countInDay: 2, title: 'Lab 3', color: 'bg-orange-500' },
];

export const Timeline: React.FC = () => {
  const totalDays = 14;

  return (
    <div className="flex-1 bg-slate-950 overflow-x-auto overflow-y-hidden custom-scrollbar">
      <div className="flex border-b border-slate-800">
        {Array.from({ length: totalDays }).map((_, i) => (
          <div key={i} className="min-w-[120px] p-2 text-slate-500 text-xs border-r border-slate-900 text-center uppercase tracking-widest font-mono">
            Day {i + 1}
          </div>
        ))}
      </div>

      <div className="flex h-[calc(100%-40px)] relative">
        {/* Сітка фону */}
        <div className="absolute inset-0 flex pointer-events-none">
          {Array.from({ length: totalDays }).map((_, i) => (
            <div key={i} className="min-w-[120px] h-full border-r border-slate-800/30" />
          ))}
        </div>

        <div className="flex w-full mt-4 h-24">
           <div className="absolute left-[240px] w-[120px] h-12 flex flex-col gap-1 p-1">
              <div className="bg-green-500 h-full rounded text-[10px] p-1 truncate shadow-lg border border-white/20">Lab 1 (100%)</div>
           </div>

           <div className="absolute left-[360px] w-[120px] h-12 flex flex-col gap-1 p-1">
              <div className="bg-orange-500 h-1/2 rounded text-[10px] p-1 truncate shadow-lg">Lab 2 (50%)</div>
              <div className="bg-orange-500 h-1/2 rounded text-[10px] p-1 truncate shadow-lg">Lab 3 (50%)</div>
           </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';

interface SubjectTemplate {
  id: string;
  name: string;
  color: string;
}

const subjects: SubjectTemplate[] = [
  { id: '1', name: 'Управління ІТ-проектами', color: 'bg-emerald-500' },
  { id: '2', name: 'Проєктування та розробка інформаційних систем', color: 'bg-amber-500' },
  { id: '3', name: 'Програмна робототехніка', color: 'bg-blue-500' },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-full bg-slate-900 border-r border-slate-700 p-4 flex flex-col gap-4 text-white">
      <h2 className="text-xl font-bold border-b border-slate-700 pb-2">Subjects Bin</h2>
      
      <div className="flex flex-col gap-2">
        {subjects.map((sub) => (
          <div 
            key={sub.id}
            className={`${sub.color} p-3 rounded-lg cursor-grab active:cursor-grabbing hover:brightness-110 transition-all shadow-md`}
          >
            <p className="font-medium">{sub.name}</p>
            <span className="text-xs opacity-80 underline">Drag to timeline</span>
          </div>
        ))}
      </div>

      <div className="mt-auto p-3 bg-slate-800 rounded border border-dashed border-slate-600">
        <p className="text-xs text-slate-400 uppercase font-bold">Abstract Layer</p>
        <div className="mt-2 p-2 bg-sky-500 rounded text-center cursor-pointer">
          + Blue Clip
        </div>
      </div>
    </aside>
  );
};
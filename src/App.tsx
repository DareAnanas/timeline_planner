import { Sidebar } from './features/sidebar/Sidebar';
import { Timeline } from './features/timeline/Timeline';

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-black font-sans">
      <Sidebar />
      
      <main className="flex flex-col flex-1 overflow-hidden">
        {/* Top bar (Tools) */}
        <header className="h-14 bg-slate-900 border-b border-slate-700 flex items-center px-6 text-white gap-4">
          <div className="font-bold text-sky-400">TIMELINE PLANNER</div>
          <div className="flex gap-2 ml-auto">
            <button className="px-3 py-1 bg-slate-700 rounded text-sm hover:bg-slate-600 transition">Ripple Mode</button>
            <button className="px-3 py-1 bg-slate-800 rounded text-sm hover:bg-slate-700 transition">Stack Mode</button>
          </div>
        </header>

        {/* Timeline Area */}
        <Timeline />
      </main>
    </div>
  );
}

export default App;
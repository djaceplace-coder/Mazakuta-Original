import { HookAndNarrative } from './components/HookAndNarrative';
import { Phases } from './components/Phases';
import { StickyFooter } from './components/StickyFooter';

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen pb-24 font-sans max-w-full">
      <div className="max-w-lg mx-auto bg-white shadow-2xl relative min-h-screen overflow-hidden ring-1 ring-gray-200">
        {/* Top Branding Banner */}
        <div className="bg-black py-4 px-6 text-center shadow-md relative z-10 border-b-4 border-green-700">
          <h1 className="font-oswald text-3xl font-black text-white tracking-[0.2em] uppercase">Maza Kuta</h1>
          <p className="text-yellow-500 font-bold text-xs uppercase tracking-widest mt-1">Premium Herbal Care</p>
        </div>
        
        <HookAndNarrative />
        <Phases />
        
        <div className="p-8 bg-gray-900 border-t-4 border-green-700">
           <p className="text-center text-sm text-gray-400 font-bold uppercase tracking-widest leading-loose">
             100% Discreet Packaging <br/> 
             <span className="text-green-500">•</span><br/>
             Lagos Dispatch • Nationwide Reach
           </p>
        </div>
      </div>
      <StickyFooter />
    </div>
  );
}

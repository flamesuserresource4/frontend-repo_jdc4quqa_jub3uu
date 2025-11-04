import React from 'react';
import Hero from './components/Hero';
import Tracks from './components/Tracks';
import Workshops from './components/Workshops';
import Events from './components/Events';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter text-white">
      <Hero />
      <Tracks />
      <Workshops />
      <Events />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-white/70">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm">© {new Date().getFullYear()} Fusion Engineering Club. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#workshops" className="hover:text-white">Workshops</a>
              <a href="#events" className="hover:text-white">Events</a>
              <a href="#join" className="hover:text-white">Join</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

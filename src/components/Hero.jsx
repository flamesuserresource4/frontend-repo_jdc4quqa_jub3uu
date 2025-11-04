import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to improve text readability (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 md:pt-32">
        {/* Simple nav */}
        <div className="flex items-center justify-between">
          <div className="font-semibold tracking-tight text-white/90">Fusion Engineering Club</div>
          <nav className="hidden gap-8 md:flex text-white/80">
            <a href="#tracks" className="hover:text-white transition">Tracks</a>
            <a href="#workshops" className="hover:text-white transition">Workshops</a>
            <a href="#events" className="hover:text-white transition">Events</a>
            <a href="#join" className="hover:text-white transition">Join</a>
          </nav>
        </div>

        <div className="mt-20 max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Build bold ideas at the intersection of mechanics, code, and power.
          </h1>
          <p className="mt-6 text-lg text-white/80">
            A modern engineering club for makers and problem-solvers across Mechanical, Computer & Communication,
            and Electrical disciplines. Learn by doing: rapid prototyping, real projects, and playful tech.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#workshops"
              className="inline-flex items-center rounded-full bg-white px-5 py-3 font-medium text-slate-900 shadow hover:shadow-lg transition"
            >
              Explore Workshops <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#join"
              className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition"
            >
              Join the Club
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

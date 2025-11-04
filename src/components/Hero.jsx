import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Spline cover background */}
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
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-semibold tracking-tight text-white/90"
          >
            Fusion Engineering Club
          </motion.div>
          <nav className="hidden gap-8 md:flex text-white/80">
            <a href="#tracks" className="hover:text-white transition">Tracks</a>
            <a href="#workshops" className="hover:text-white transition">Workshops</a>
            <a href="#events" className="hover:text-white transition">Events</a>
            <a href="#join" className="hover:text-white transition">Join</a>
          </nav>
        </div>

        <div className="mt-20 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            Build bold ideas at the intersection of mechanics, code, and power.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="mt-6 text-lg text-white/80"
          >
            A modern engineering club for makers and problem-solvers across Mechanical, Computer & Communication,
            and Electrical disciplines. Learn by doing: rapid prototyping, real projects, and playful tech.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
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
          </motion.div>
        </div>

        {/* Center-stage interactive 3D object */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-16 rounded-2xl border border-white/10 bg-slate-900/30 p-2 backdrop-blur"
        >
          <div className="relative h-[380px] w-full overflow-hidden rounded-xl md:h-[520px]">
            <Spline
              scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* subtle glow frame */}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
            <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-400/10 via-fuchsia-400/10 to-purple-400/10" />
          </div>
        </motion.div>
      </div>

      {/* Decorative animated orbs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="pointer-events-none absolute left-[-4rem] top-1/3 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
        className="pointer-events-none absolute right-[-3rem] top-1/2 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
      />
    </section>
  );
};

export default Hero;

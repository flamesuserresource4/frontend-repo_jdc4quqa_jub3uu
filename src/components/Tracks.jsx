import React from 'react';
import { Cpu, Wrench, Zap } from 'lucide-react';

const tracks = [
  {
    title: 'Mechanical Engineering',
    icon: Wrench,
    desc:
      'Design for motion. From CAD to CNC to additive—build mechanisms, gear trains, and robust frames that survive the real world.',
    accent: 'from-amber-500 to-rose-500',
  },
  {
    title: 'Computer & Communication',
    icon: Cpu,
    desc:
      'Think in code. Embedded systems, networking basics, and modern software stacks to connect ideas and devices.',
    accent: 'from-sky-500 to-violet-500',
  },
  {
    title: 'Electrical Engineering',
    icon: Zap,
    desc:
      'Power up. Analog/digital circuits, sensors, motor drivers, and safe power delivery for reliable prototypes.',
    accent: 'from-lime-500 to-emerald-500',
  },
];

const Tracks = () => {
  return (
    <section id="tracks" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Engineering Tracks</h2>
          <p className="mt-3 text-white/70">
            Choose your lane—or blend them. Our projects live where disciplines meet.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/40"
              >
                <div className={`absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-br ${t.accent}`} />
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{t.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tracks;

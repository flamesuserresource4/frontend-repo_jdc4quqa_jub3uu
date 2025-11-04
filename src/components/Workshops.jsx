import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const workshops = [
  {
    title: 'Intro to CAD + 3D Printing',
    date: 'Nov 18, 2025',
    time: '5:30 PM',
    level: 'Beginner',
    blurb:
      'Sketch, extrude, and print. Rapid prototyping fundamentals and design-for-fabrication tips.',
    tags: ['CAD', 'Fabrication', 'Design'],
  },
  {
    title: 'Embedded Systems with Microcontrollers',
    date: 'Nov 25, 2025',
    time: '6:00 PM',
    level: 'Intermediate',
    blurb: 'From GPIO to I2C: wire sensors, read data, and control actuators safely.',
    tags: ['C/C++', 'IoT', 'Sensors'],
  },
  {
    title: 'Power Electronics for Makers',
    date: 'Dec 3, 2025',
    time: '5:00 PM',
    level: 'Advanced',
    blurb: 'Voltage regulators, MOSFETs, and motor drivers—design reliable power stages.',
    tags: ['Power', 'Drivers', 'Safety'],
  },
];

const Workshops = () => {
  return (
    <section id="workshops" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hands-on Workshops</h2>
          <p className="mt-3 text-white/70">
            Weekly sessions where you learn by building—guided by mentors and backed by shared tools.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {workshops.map((w, i) => (
            <motion.article
              key={w.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-4 text-sm text-white/80">
                <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> {w.date}</span>
                <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {w.time}</span>
                <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-xs">{w.level}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-white/80">{w.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {w.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#join"
                className="mt-5 inline-flex items-center text-sm font-medium text-white/90 hover:text-white"
              >
                Save your spot <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;

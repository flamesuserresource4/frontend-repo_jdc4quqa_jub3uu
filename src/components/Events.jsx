import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const events = [
  {
    title: 'Project Expo Night',
    date: 'Dec 15, 2025',
    place: 'Innovation Hall',
    desc: 'Showcase cross-disciplinary builds—robot arms, sensor dashboards, and power demos.',
  },
  {
    title: 'Hack & Build Weekend',
    date: 'Jan 10–12, 2026',
    place: 'Makerspace Lab',
    desc: 'Form teams, pick a challenge, and ship a prototype in 48 hours.',
  },
  {
    title: 'Industry Talk: Smart Manufacturing',
    date: 'Jan 28, 2026',
    place: 'Auditorium A',
    desc: 'From assembly lines to digital twins—how modern factories scale.',
  },
];

const Events = () => {
  return (
    <section id="events" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Events & Community</h2>
          <p className="mt-3 text-white/70">
            Demos, talks, and build sprints. Come meet collaborators and future teammates.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((e) => (
            <div
              key={e.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 p-6"
            >
              <h3 className="text-lg font-semibold">{e.title}</h3>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-white/80">
                <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> {e.date}</span>
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {e.place}</span>
              </div>
              <p className="mt-3 text-sm text-white/80">{e.desc}</p>
            </div>
          ))}
        </div>

        <div id="join" className="mx-auto mt-14 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
          <h3 className="text-xl font-semibold">Join the Club</h3>
          <p className="mt-2 text-white/80">Open to all skill levels. Weekly meetings, shared tools, and real projects.</p>
          <form className="mt-6 grid gap-3 sm:grid-cols-3">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Your name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Email"
            />
            <button
              type="button"
              className="rounded-lg bg-white px-4 py-2 font-medium text-slate-900 hover:shadow-lg transition"
            >
              Get Updates
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Events;

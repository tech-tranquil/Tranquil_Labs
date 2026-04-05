"use client";

const items = [
  "The Indian Express",
  "Business Standard",
  "StartupPedia",
  "The Interview World",
  "NASSCOM",
  "ThingQbator",
  "Cisco",
  "IIIT Bangalore",
];

export function PressTicker() {
  const doubled = [...items, ...items];

  return (
    <div className="ticker-wrapper py-4">
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 text-slate-400 font-semibold text-sm tracking-wider uppercase"
          >
            <span className="w-1 h-1 rounded-full bg-teal/50 inline-block" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

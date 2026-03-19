const SPECS = [
  "RISPOSTA ISTANTANEA", "TEMPO REALE", "AUDIO KERNEL", "ZERO FLICKER",
  "ARM NATIVO", "NESSUN PLUGIN", "WEBSOCKET V2", "TLS END-TO-END",
  "MODALITÀ OFFLINE", "COMP. VETTORIALE", "LLM LOCALE", "VAD VOCALE",
  "STATO JSON", "ACCEL. GPU", "DESIGN SVIZZERO", "RAGGIO ZERO"
];

export default function LatencyMatrix() {
  return (
    <section className="border-b border-black">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black">
        {SPECS.map((spec, i) => (
          <div 
            key={i} 
            className="aspect-square bg-white flex flex-col items-start justify-between p-4 md:p-6 lg:p-8 hover:bg-pureblue hover:text-white transition-colors cursor-crosshair group"
          >
            <span className="font-mono text-xs opacity-50 group-hover:opacity-100 transition-opacity">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="font-mono text-sm md:text-base font-bold uppercase tracking-widest leading-none">
              {spec}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

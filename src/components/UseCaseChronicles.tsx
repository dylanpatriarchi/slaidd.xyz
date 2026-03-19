const CASES = [
  {
    title: "PITCH PER INVESTITORI",
    desc: "Presentazione a investitori tier-1. Il deck si genera dinamicamente mentre narri l'opportunità di mercato. Basta frasi come 'Ho una slide per questo più avanti'. Appare esattamente quando ne parli.",
    cols: "col-span-12 md:col-span-7",
  },
  {
    title: "LEZIONI ACCADEMICHE",
    desc: "Diagrammi vettoriali complessi si formano istantaneamente dalla teoria parlata. Gli studenti vedono la matematica materializzarsi sulla lavagna.",
    cols: "col-span-12 md:col-span-5",
  },
  {
    title: "PROTOTIPAZIONE RAPIDA",
    desc: "Descrivi l'architettura. I wireframe si costruiscono da soli. Tu controlli la narrazione, il motore gestisce la traduzione visiva in tempo reale.",
    cols: "col-span-12",
  }
];

export default function UseCaseChronicles() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 border-b border-black">
      <h3 className="text-3xl md:text-5xl font-bold uppercase mb-12 tracking-tighter">Cronache D'Uso</h3>
      <div className="grid grid-cols-12 gap-4">
        {CASES.map((c, i) => (
          <div 
            key={i} 
            className={`${c.cols} border border-black p-8 md:p-12 hover:bg-black hover:text-white transition-colors duration-300 flex flex-col justify-between min-h-[300px] group`}
          >
            <div className="font-mono text-xs md:text-sm mb-12 opacity-50 group-hover:opacity-100 transition-opacity">
              CRONACA {String(i + 1).padStart(2, '0')}
            </div>
            <div>
              <h4 className="text-2xl md:text-4xl font-bold uppercase mb-4 tracking-tight">{c.title}</h4>
              <p className="text-base md:text-lg font-mono leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

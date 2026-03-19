export default function LiveAnatomy() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 border-b border-black">
      <h3 className="text-3xl md:text-5xl font-bold uppercase mb-12 tracking-tighter">Anatomia in Diretta</h3>
      <div className="w-full aspect-square sm:aspect-video md:aspect-[21/9] border border-black p-4 flex items-center justify-center relative bg-white">
        <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
            </pattern>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
            </marker>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          <rect x="50" y="150" width="200" height="100" fill="black" />
          <text x="150" y="205" fill="white" fontSize="18" fontFamily="monospace" textAnchor="middle">ACQUISIZIONE VOCE</text>
          
          <rect x="400" y="150" width="200" height="100" fill="white" stroke="black" strokeWidth="2" />
          <text x="500" y="205" fill="black" fontSize="18" fontFamily="monospace" textAnchor="middle">BUFFER SEMANTICO</text>
          
          <rect x="750" y="150" width="200" height="100" fill="black" />
          <text x="850" y="205" fill="white" fontSize="18" fontFamily="monospace" textAnchor="middle">SINTESI VETTORIALE</text>
          
          <path d="M 250 200 L 395 200" stroke="black" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          <path d="M 600 200 L 745 200" stroke="black" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
        </svg>
      </div>
    </section>
  );
}

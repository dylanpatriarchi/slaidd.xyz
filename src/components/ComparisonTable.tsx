export default function ComparisonTable() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 border-b border-black">
      <h3 className="text-3xl md:text-5xl font-bold uppercase mb-12 tracking-tighter">Slaidd vs Legacy</h3>
      <div className="w-full border border-black overflow-x-auto">
        <table className="w-full text-left font-mono whitespace-nowrap min-w-[600px]">
          <thead className="bg-black text-white uppercase text-sm tracking-widest">
            <tr>
              <th className="p-4 md:p-6 font-normal">Metrica</th>
              <th className="p-4 md:p-6 font-normal border-l border-white/20">Legacy (PPT/Keynote)</th>
              <th className="p-4 md:p-6 font-normal border-l border-white/20">Slaidd Core</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black text-sm md:text-base uppercase">
            <tr className="hover:bg-zinc-100 transition-colors">
              <td className="p-4 md:p-6 font-bold">Metodo di Input</td>
              <td className="p-4 md:p-6 border-l border-black opacity-50">Drag & Drop Manuale</td>
              <td className="p-4 md:p-6 border-l border-black font-bold bg-black text-white">VAD Vocale in Tempo Reale</td>
            </tr>
            <tr className="hover:bg-zinc-100 transition-colors">
              <td className="p-4 md:p-6 font-bold">Latenza</td>
              <td className="p-4 md:p-6 border-l border-black opacity-50">Velocità Umana (Lenta)</td>
              <td className="p-4 md:p-6 border-l border-black font-bold bg-black text-white">Tempo Reale</td>
            </tr>
            <tr className="hover:bg-zinc-100 transition-colors">
              <td className="p-4 md:p-6 font-bold">Archiviazione</td>
              <td className="p-4 md:p-6 border-l border-black opacity-50">File .pptx Pesanti</td>
              <td className="p-4 md:p-6 border-l border-black font-bold bg-black text-white">Output LLM Nativo</td>
            </tr>
            <tr className="hover:bg-zinc-100 transition-colors">
              <td className="p-4 md:p-6 font-bold">Linguaggio di Design</td>
              <td className="p-4 md:p-6 border-l border-black opacity-50">ClipArt e Ombre</td>
              <td className="p-4 md:p-6 border-l border-black font-bold bg-black text-white">Brutalismo Svizzero</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

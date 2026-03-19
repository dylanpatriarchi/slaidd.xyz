export default function TheEngine() {
  const jsonPayload = `{
  "pipeline": "slaidd-core-v1",
  "status": "active",
  "sync_mode": "real-time",
  "vectors": {
    "audio": "kernel-buffer",
    "visual": "webgl-canvas"
  },
  "render": "instant",
  "state": "synthesizing"
}`;

  return (
    <section className="bg-black text-white py-24 px-4 md:px-8 lg:px-12 border-b border-white">
      <div className="grid grid-cols-12 gap-8 md:gap-4 h-full items-center">
        <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-center">
          <h3 className="text-4xl md:text-6xl font-bold uppercase mb-6 tracking-tighter">Il Motore<br/>(Bento)</h3>
          <p className="text-lg md:text-xl font-mono mb-8 leading-relaxed max-w-xl">
            Slaidd Core V1 ignora il rendering standard del DOM. Mappiamo la voce direttamente su vettori visivi tramite una pipeline pura.
          </p>
          <div className="font-mono text-sm uppercase tracking-widest text-pureblue">
            STATO: ATTIVO <br/>
            BUFFER: 0.0% PERSI
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-7">
          <div className="border border-white/20 bg-white/5 p-6 md:p-8 relative overflow-x-auto lg:ml-12">
            <div className="absolute top-0 right-0 p-3 font-mono text-xs opacity-50 uppercase">kernel.log</div>
            <pre className="font-mono text-sm md:text-base text-pureblue">
              <code>{jsonPayload}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

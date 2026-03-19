export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-12 border-b border-black">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <h1 className="text-[14vw] sm:text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase">
            Parla.<br />
            Le Slide<br />
            Ti Seguono.
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-16 md:mt-24">
        <div className="col-span-12 md:col-span-8 lg:col-span-6">
          <form className="flex flex-col sm:flex-row w-full border-t sm:border border-black">
            <input 
              type="email" 
              placeholder="INSERISCI LA MAIL PER L'ACCESSO ANTICIPATO" 
              className="flex-1 px-4 py-5 bg-transparent outline-none placeholder:text-black/50 font-mono text-xs sm:text-sm uppercase border-x border-b sm:border-0 border-black"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-5 bg-black text-white font-mono text-xs sm:text-sm uppercase hover:bg-pureblue transition-colors whitespace-nowrap border-x border-b sm:border-0 border-black"
            >
              Entra in Lista d'Attesa
            </button>
          </form>
          <div className="mt-4 font-mono text-xs uppercase tracking-widest">
            Coda attuale: 162 in attesa
          </div>
        </div>
      </div>
    </section>
  );
}

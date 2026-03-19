export default function Manifesto() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center px-4 md:px-8 lg:px-12 py-24 sm:py-32">
      <div className="grid grid-cols-12 gap-4 h-full items-center">
        <div className="col-span-12 md:col-span-10 md:col-start-2">
          <h2 className="text-[8vw] sm:text-[6vw] leading-none font-bold tracking-tighter uppercase mb-12 sm:mb-20">
            La Morte del<br />Template
          </h2>
          <div className="text-lg sm:text-2xl md:text-3xl font-sans leading-tight space-y-8 sm:space-y-12 max-w-4xl">
            <p>
              Per 30 anni, siamo stati vincolati al bounding box. Alla presentazione base. Al bullet point in Arial 24pt.
            </p>
            <p className="text-pureblue selection:bg-white selection:text-black">
              La presentazione è morta. La stiamo ricostruendo partendo dall'audio.
            </p>
            <p>
              Slaidd ascolta, sintetizza e renderizza in tempo reale. Niente drag & drop. Solo puro pensiero, materializzato all'istante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

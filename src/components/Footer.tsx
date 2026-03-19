export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black px-4 md:px-8 lg:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <span className="font-mono font-bold text-sm uppercase tracking-widest">Slaidd</span>
          <p className="font-mono text-xs uppercase tracking-widest opacity-50 leading-relaxed">
            Presentazioni generate dall&apos;IA<br />mentre parli.
          </p>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest opacity-50 leading-relaxed">
          <span className="font-bold opacity-100">Rayo Consulting di Patriarchi Dylan</span>
          <span>P.IVA 03988190546</span>
          <span>Vocabolo Marcheggiane 56/C</span>
          <span>Breccione Zona Industriale</span>
          <span>06012 Città di Castello (PG)</span>
        </div>

        {/* Contacts + Links */}
        <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-widest opacity-50 leading-relaxed">
          <a
            href="mailto:info@rayo.consulting"
            className="hover:opacity-100 transition-opacity"
          >
            info@rayo.consulting
          </a>
          <a
            href="tel:+393271746038"
            className="hover:opacity-100 transition-opacity"
          >
            +39 327 174 6038
          </a>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="/privacy"
              className="hover:opacity-100 transition-opacity"
            >
              Privacy Policy
            </a>
          </div>
        </div>

      </div>

      <div className="mt-12 pt-6 border-t border-black/10 font-mono text-[10px] uppercase tracking-widest opacity-30 flex flex-col sm:flex-row justify-between gap-2">
        <span>© {year} Rayo Consulting di Patriarchi Dylan. Tutti i diritti riservati.</span>
        <span>Slaidd è un marchio di Rayo Consulting</span>
      </div>
    </footer>
  );
}

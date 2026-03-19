import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Slaidd",
  description: "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).",
};

const SECTION = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="font-mono text-sm uppercase tracking-widest font-bold mb-4 border-b border-black pb-2">
      {title}
    </h2>
    <div className="font-mono text-sm leading-relaxed space-y-3 text-black/70">
      {children}
    </div>
  </div>
);

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen px-4 md:px-8 lg:px-12 py-24 max-w-3xl">
      <div className="mb-16">
        <p className="font-mono text-xs uppercase tracking-widest opacity-40 mb-4">
          Informativa Privacy · Reg. UE 2016/679 (GDPR)
        </p>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
          Privacy Policy
        </h1>
        <p className="font-mono text-xs uppercase tracking-widest opacity-40 mt-4">
          Ultimo aggiornamento: marzo 2026
        </p>
      </div>

      <SECTION title="1. Titolare del Trattamento">
        <p>
          Il titolare del trattamento dei dati personali è:
        </p>
        <p className="text-black font-bold">Rayo Consulting di Patriarchi Dylan</p>
        <p>P.IVA 03988190546</p>
        <p>Vocabolo Marcheggiane 56/C — Breccione Zona Industriale</p>
        <p>06012 Città di Castello (PG) — Italia</p>
        <p>
          E-mail:{" "}
          <a href="mailto:info@rayo.consulting" className="underline hover:opacity-70 transition-opacity">
            info@rayo.consulting
          </a>
        </p>
        <p>Tel: +39 327 174 6038</p>
      </SECTION>

      <SECTION title="2. Dati Raccolti">
        <p>
          Nell&apos;ambito della lista d&apos;attesa (waiting list) di Slaidd, raccogliamo
          esclusivamente il tuo <strong>indirizzo e-mail</strong>, fornito volontariamente
          tramite il modulo presente sul sito.
        </p>
        <p>
          Non raccogliamo dati sensibili, dati di navigazione profilati, né cediamo
          informazioni a terze parti per finalità di marketing.
        </p>
      </SECTION>

      <SECTION title="3. Finalità e Base Giuridica">
        <p>
          Il tuo indirizzo e-mail viene trattato per le seguenti finalità:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Gestione della lista d&apos;attesa per l&apos;accesso anticipato a Slaidd</li>
          <li>Invio di comunicazioni relative al lancio del prodotto e all&apos;accesso beta</li>
        </ul>
        <p>
          La base giuridica del trattamento è il <strong>consenso dell&apos;interessato</strong>{" "}
          (art. 6, par. 1, lett. a del Reg. UE 2016/679), prestato nel momento in cui
          inserisci la tua e-mail e invii il modulo.
        </p>
      </SECTION>

      <SECTION title="4. Periodo di Conservazione">
        <p>
          I tuoi dati saranno conservati fino al lancio pubblico di Slaidd oppure fino a
          quando non richiederai la cancellazione. In ogni caso, non oltre 24 mesi dalla
          raccolta.
        </p>
        <p>
          Puoi richiedere la cancellazione in qualsiasi momento scrivendo a{" "}
          <a href="mailto:info@rayo.consulting" className="underline hover:opacity-70 transition-opacity">
            info@rayo.consulting
          </a>.
        </p>
      </SECTION>

      <SECTION title="5. Condivisione dei Dati">
        <p>
          I dati non vengono venduti né ceduti a terzi per scopi commerciali. Potremmo
          affidarci a fornitori di servizi tecnici (es. piattaforme di invio e-mail)
          che agiscono come <strong>responsabili del trattamento</strong> ai sensi
          dell&apos;art. 28 GDPR, vincolati contrattualmente alle stesse garanzie di protezione.
        </p>
        <p>
          Tutti i fornitori operano all&apos;interno dello Spazio Economico Europeo (SEE) o
          in paesi con livello di protezione adeguato riconosciuto dalla Commissione Europea.
        </p>
      </SECTION>

      <SECTION title="6. Diritti dell'Interessato">
        <p>
          In qualità di interessato, hai il diritto di:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Accesso</strong> — ottenere conferma del trattamento e copia dei dati (art. 15)</li>
          <li><strong>Rettifica</strong> — correggere dati inesatti (art. 16)</li>
          <li><strong>Cancellazione</strong> — richiedere l&apos;eliminazione dei tuoi dati (art. 17)</li>
          <li><strong>Limitazione</strong> — limitare il trattamento in determinate circostanze (art. 18)</li>
          <li><strong>Portabilità</strong> — ricevere i dati in formato strutturato (art. 20)</li>
          <li><strong>Opposizione</strong> — opporti al trattamento per motivi legittimi (art. 21)</li>
          <li><strong>Revoca del consenso</strong> — in qualsiasi momento, senza pregiudizio per la liceità del trattamento precedente</li>
        </ul>
        <p>
          Per esercitare i tuoi diritti, scrivi a{" "}
          <a href="mailto:info@rayo.consulting" className="underline hover:opacity-70 transition-opacity">
            info@rayo.consulting
          </a>. Risponderemo entro 30 giorni.
        </p>
      </SECTION>

      <SECTION title="7. Diritto di Reclamo">
        <p>
          Se ritieni che il trattamento dei tuoi dati violi il GDPR, hai il diritto di
          proporre reclamo al{" "}
          <strong>Garante per la protezione dei dati personali</strong> (
          <a
            href="https://www.garanteprivacy.it"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70 transition-opacity"
          >
            www.garanteprivacy.it
          </a>
          ), Piazza Venezia 11, 00187 Roma.
        </p>
      </SECTION>

      <SECTION title="8. Cookie">
        <p>
          Questo sito non utilizza cookie di profilazione. Potrebbero essere presenti
          cookie tecnici strettamente necessari al funzionamento del sito. Nessun dato
          di navigazione viene ceduto a terze parti per finalità pubblicitarie.
        </p>
      </SECTION>

      <div className="mt-16 pt-8 border-t border-black font-mono text-xs uppercase tracking-widest opacity-30">
        <a href="/" className="hover:opacity-100 transition-opacity">← Torna a Slaidd</a>
      </div>
    </main>
  );
}

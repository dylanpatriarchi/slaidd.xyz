import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Slaidd",
  description: "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).",
};

const S = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-xs font-bold uppercase tracking-widest mb-5 text-black border-b border-black/10 pb-3">
      {title}
    </h2>
    <div className="text-sm leading-relaxed space-y-4 text-black/70">
      {children}
    </div>
  </div>
);

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen px-4 md:px-8 lg:px-12 py-24 max-w-3xl mx-auto">

      <div className="mb-16">
        <p className="text-[10px] uppercase tracking-widest text-black/40 mb-4">
          Informativa Privacy ai sensi del Reg. UE 2016/679 (GDPR)
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-4">
          Privacy Policy
        </h1>
        <p className="text-[10px] uppercase tracking-widest text-black/40">
          Versione 1.0 - Ultimo aggiornamento: marzo 2026
        </p>
      </div>

      <S title="1. Titolare del trattamento">
        <p>
          Il titolare del trattamento dei dati personali raccolti tramite il sito{" "}
          <strong className="text-black">slaidd.xyz</strong> e tramite il servizio di lista d&apos;attesa
          (waiting list) e&apos;:
        </p>
        <div className="bg-black/[0.03] p-4 text-xs space-y-1 leading-relaxed">
          <p className="font-bold text-black">Rayo Consulting di Patriarchi Dylan</p>
          <p>P.IVA 03988190546</p>
          <p>Vocabolo Marcheggiane 56/C, Breccione Zona Industriale</p>
          <p>06012 Citta di Castello (PG), Italia</p>
          <p>
            E-mail:{" "}
            <a href="mailto:info@rayo.consulting" className="underline underline-offset-2 hover:text-black transition-colors">
              info@rayo.consulting
            </a>
          </p>
          <p>Tel: +39 327 174 6038</p>
        </div>
        <p>
          Non e&apos; stato nominato un Responsabile della Protezione dei Dati (DPO) in quanto il
          trattamento non rientra nelle fattispecie che lo rendono obbligatorio ai sensi
          dell&apos;art. 37 GDPR. Per qualsiasi questione relativa alla privacy, puoi contattare
          direttamente il titolare all&apos;indirizzo sopra indicato.
        </p>
      </S>

      <S title="2. Dati raccolti e modalita di raccolta">
        <p>
          Il sito raccoglie esclusivamente il dato fornito volontariamente dall&apos;utente
          tramite il modulo di iscrizione alla lista d&apos;attesa:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong className="text-black">Indirizzo e-mail</strong></li>
        </ul>
        <p>
          Non vengono raccolti dati sensibili (art. 9 GDPR), dati relativi a condanne penali
          (art. 10 GDPR), dati biometrici, dati di geolocalizzazione precisa, ne&apos; alcun
          altro dato personale oltre a quello sopra indicato.
        </p>
        <p>
          I dati di navigazione tecnici (indirizzo IP, User Agent, timestamp della richiesta)
          potrebbero essere temporaneamente trattati dai server web per finalita&apos; di sicurezza
          e diagnostica, senza essere associati all&apos;identita&apos; dell&apos;utente e senza essere
          conservati oltre il tempo strettamente necessario.
        </p>
      </S>

      <S title="3. Finalita del trattamento e base giuridica">
        <p>L&apos;indirizzo e-mail viene trattato per le seguenti finalita&apos;:</p>
        <div className="space-y-3">
          <div className="border border-black/10 p-4">
            <p className="font-semibold text-black text-xs uppercase tracking-wider mb-2">
              3.1 Gestione della lista d&apos;attesa
            </p>
            <p>
              Registrazione e gestione dell&apos;iscrizione alla lista d&apos;attesa per l&apos;accesso
              anticipato al prodotto Slaidd.
            </p>
            <p className="mt-2 text-black/50 text-xs">
              Base giuridica: consenso dell&apos;interessato (art. 6, par. 1, lett. a GDPR),
              prestato in modo esplicito al momento della compilazione del modulo.
            </p>
          </div>
          <div className="border border-black/10 p-4">
            <p className="font-semibold text-black text-xs uppercase tracking-wider mb-2">
              3.2 Comunicazioni sul prodotto
            </p>
            <p>
              Invio di comunicazioni informative riguardanti il lancio del prodotto, l&apos;apertura
              dell&apos;accesso beta, aggiornamenti sullo sviluppo e notifiche di accesso.
            </p>
            <p className="mt-2 text-black/50 text-xs">
              Base giuridica: consenso dell&apos;interessato (art. 6, par. 1, lett. a GDPR).
              Il consenso puo&apos; essere revocato in qualsiasi momento senza pregiudizio per
              la liceita&apos; del trattamento svolto prima della revoca.
            </p>
          </div>
        </div>
        <p>
          I dati non vengono utilizzati per finalita&apos; di profilazione, per decisioni automatizzate
          ai sensi dell&apos;art. 22 GDPR, ne&apos; per finalita&apos; di marketing commerciale di terze parti.
        </p>
      </S>

      <S title="4. Modalita di conservazione e sicurezza">
        <p>
          I dati raccolti sono archiviati in un database <strong className="text-black">PostgreSQL</strong>{" "}
          gestito dal titolare su infrastruttura propria o su provider cloud con sede nello Spazio
          Economico Europeo (SEE). L&apos;accesso al database e&apos; protetto da autenticazione,
          crittografia in transito (TLS/SSL) e crittografia a riposo.
        </p>
        <p>
          Il titolare adotta misure tecniche e organizzative adeguate ai sensi dell&apos;art. 32 GDPR
          per proteggere i dati da accesso non autorizzato, perdita, distruzione o divulgazione
          accidentale, tra cui:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Accesso al database riservato ai soli soggetti autorizzati</li>
          <li>Trasmissione dei dati esclusivamente tramite protocollo HTTPS</li>
          <li>Backup periodici con politica di retention definita</li>
          <li>Monitoraggio degli accessi e degli eventi anomali</li>
        </ul>
      </S>

      <S title="5. Periodo di conservazione">
        <p>
          I dati personali saranno conservati per il tempo strettamente necessario al perseguimento
          delle finalita&apos; per cui sono stati raccolti, e precisamente:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            Fino al <strong className="text-black">lancio pubblico di Slaidd</strong>, momento
            in cui gli iscritti verranno contattati per l&apos;attivazione dell&apos;accesso
          </li>
          <li>
            In ogni caso, non oltre <strong className="text-black">24 mesi</strong> dalla data
            di raccolta, salvo rinnovo del consenso
          </li>
          <li>
            Fino a eventuale <strong className="text-black">richiesta di cancellazione</strong>{" "}
            da parte dell&apos;interessato, che avra&apos; effetto entro 30 giorni dalla ricezione
          </li>
        </ul>
        <p>
          Decorso il periodo di conservazione, i dati verranno eliminati in modo sicuro
          e irreversibile dal database.
        </p>
      </S>

      <S title="6. Condivisione e trasferimento dei dati">
        <p>
          I dati personali non vengono venduti, ceduti o comunicati a terzi per finalita&apos;
          commerciali o pubblicitarie.
        </p>
        <p>
          Il titolare potrebbe avvalersi di fornitori tecnici che agiscono in qualita&apos; di{" "}
          <strong className="text-black">responsabili del trattamento</strong> ai sensi dell&apos;art. 28
          GDPR (ad esempio: provider di hosting, servizi di invio e-mail transazionale).
          Tali soggetti sono vincolati da appositi accordi che garantiscono il rispetto delle
          stesse misure di protezione previste dal GDPR.
        </p>
        <p>
          Tutti i fornitori utilizzati operano all&apos;interno dello Spazio Economico Europeo (SEE)
          o in Paesi che offrono un livello di protezione adeguato riconosciuto dalla Commissione
          Europea ai sensi degli artt. 45-46 GDPR. In caso di trasferimento verso Paesi terzi,
          verranno adottate le garanzie appropriate previste dal Capo V del GDPR (es. Clausole
          Contrattuali Standard).
        </p>
        <p>
          I dati potrebbero essere comunicati ad autorita&apos; pubbliche, giudiziarie o di
          vigilanza esclusivamente nei casi previsti dalla legge e nella misura strettamente
          necessaria (art. 6, par. 1, lett. c GDPR).
        </p>
      </S>

      <S title="7. Diritti dell'interessato (artt. 15-22 GDPR)">
        <p>
          In qualita&apos; di interessato, hai il diritto di esercitare in qualsiasi momento i
          seguenti diritti nei confronti del titolare del trattamento:
        </p>
        <div className="space-y-2">
          {[
            { art: "art. 15", name: "Accesso", desc: "Ottenere conferma che sia in corso un trattamento di dati personali che ti riguardano e riceverne copia." },
            { art: "art. 16", name: "Rettifica", desc: "Ottenere la rettifica di dati personali inesatti o il completamento di dati incompleti." },
            { art: "art. 17", name: "Cancellazione (diritto all'oblio)", desc: "Ottenere la cancellazione dei tuoi dati personali, salvo i casi in cui il trattamento sia necessario per adempiere a obblighi legali." },
            { art: "art. 18", name: "Limitazione del trattamento", desc: "Ottenere la limitazione del trattamento in determinate circostanze, ad esempio durante la verifica dell'esattezza dei dati." },
            { art: "art. 20", name: "Portabilita' dei dati", desc: "Ricevere i dati personali forniti in un formato strutturato, di uso comune e leggibile da dispositivo automatico, e trasmetterli a un altro titolare." },
            { art: "art. 21", name: "Opposizione", desc: "Opporti in qualsiasi momento al trattamento dei tuoi dati personali per motivi connessi alla tua situazione particolare." },
            { art: "art. 7", name: "Revoca del consenso", desc: "Revocare il consenso prestato in qualsiasi momento, senza pregiudizio per la liceiata' del trattamento basato sul consenso prima della revoca." },
          ].map((r) => (
            <div key={r.art} className="border border-black/10 p-3 flex gap-3">
              <span className="text-[10px] text-black/30 font-mono shrink-0 pt-0.5">{r.art}</span>
              <div>
                <p className="font-semibold text-black text-xs mb-0.5">{r.name}</p>
                <p className="text-xs text-black/60">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p>
          Per esercitare i tuoi diritti, invia una richiesta scritta a{" "}
          <a href="mailto:info@rayo.consulting" className="underline underline-offset-2 hover:text-black transition-colors">
            info@rayo.consulting
          </a>{" "}
          indicando il diritto che intendi esercitare. Il titolare rispondera&apos; entro{" "}
          <strong className="text-black">30 giorni</strong> dalla ricezione della richiesta,
          prorogabili di ulteriori 60 giorni in caso di particolare complessita&apos; (art. 12 GDPR).
        </p>
      </S>

      <S title="8. Diritto di proporre reclamo">
        <p>
          Se ritieni che il trattamento dei tuoi dati personali violi il Regolamento UE 2016/679,
          hai il diritto di proporre reclamo all&apos;autorita&apos; di controllo competente. In Italia,
          l&apos;autorita&apos; competente e&apos;:
        </p>
        <div className="bg-black/[0.03] p-4 text-xs space-y-1 leading-relaxed">
          <p className="font-bold text-black">Garante per la protezione dei dati personali</p>
          <p>Piazza Venezia 11, 00187 Roma</p>
          <p>
            Sito web:{" "}
            <a
              href="https://www.garanteprivacy.it"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-black transition-colors"
            >
              www.garanteprivacy.it
            </a>
          </p>
          <p>Tel: +39 06 696771</p>
          <p>
            E-mail:{" "}
            <a href="mailto:garante@gpdp.it" className="underline underline-offset-2 hover:text-black transition-colors">
              garante@gpdp.it
            </a>
          </p>
        </div>
        <p>
          Hai altresi&apos; il diritto di adire l&apos;autorita&apos; giudiziaria competente per far valere i
          tuoi diritti ai sensi del GDPR.
        </p>
      </S>

      <S title="9. Cookie e tecnologie di tracciamento">
        <p>
          Questo sito <strong className="text-black">non utilizza cookie di profilazione</strong>,
          cookie di terze parti a scopo pubblicitario, ne&apos; tecnologie di tracciamento per
          finalita&apos; di analisi comportamentale.
        </p>
        <p>
          Potrebbero essere utilizzati esclusivamente cookie tecnici strettamente necessari al
          corretto funzionamento del sito (ad esempio, cookie di sessione), i quali non richiedono
          il consenso dell&apos;utente ai sensi dell&apos;art. 122 del D.Lgs. 196/2003 (Codice Privacy)
          come modificato dal D.Lgs. 101/2018.
        </p>
        <p>
          Nessun dato di navigazione viene ceduto a terze parti per finalita&apos; pubblicitarie
          o di profilazione.
        </p>
      </S>

      <S title="10. Modifiche alla presente informativa">
        <p>
          Il titolare si riserva il diritto di modificare la presente informativa in qualsiasi
          momento, ad esempio in seguito a variazioni normative o tecniche. Le modifiche saranno
          pubblicate su questa pagina con aggiornamento della data di versione in calce.
        </p>
        <p>
          In caso di modifiche sostanziali che incidano sui diritti degli interessati, il titolare
          provvedera&apos; a darne comunicazione tramite l&apos;indirizzo e-mail fornito dall&apos;interessato,
          ove tecnicamente possibile.
        </p>
        <p className="text-black/40 text-xs">
          Versione 1.0 - marzo 2026
        </p>
      </S>

      <div className="mt-16 pt-8 border-t border-black/10 flex justify-between items-center">
        <a href="/" className="text-xs text-black/40 hover:text-black transition-colors">
          Torna a Slaidd
        </a>
        <span className="text-[10px] text-black/30">
          Rayo Consulting di Patriarchi Dylan - P.IVA 03988190546
        </span>
      </div>

    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./components/site-header";

const APP_STORE_HREF = "#telecharger";
/** Liste d’attente (Google Forms). */
const WAITLIST_FORM_URL =
  "https://forms.gle/VqsV8zSW4dcMF16A7" as const;

const LEGAL = {
  mentions: "/mentions-legales",
  privacy: "/confidentialite",
  terms: "/cgu",
} as const;

export default function Home() {
  return (
    <>
      <a
        href="#contenu-principal"
        className="focus-visible:ring-santu-gold sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-santu-ink focus:ring-2 focus:ring-offset-2"
      >
        Aller au contenu principal
      </a>

      <SiteHeader />

      <main id="contenu-principal">
        {/* Hero : image + panneau mesh (header lisible sur l’image à gauche) */}
        <section
          className="relative flex min-h-dvh flex-col lg:grid lg:min-h-[min(100dvh,56rem)] lg:grid-cols-12"
          aria-labelledby="hero-titre"
        >
          <div className="relative h-[min(52dvh,540px)] w-full shrink-0 lg:col-span-7 lg:h-auto lg:min-h-dvh">
            <Image
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2400&q=80"
              alt=""
              fill
              priority
              className="object-cover lg:rounded-br-[2.75rem]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div
              className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-black/50 lg:bg-linear-to-r lg:from-black/35 lg:via-black/15 lg:to-black/45"
              aria-hidden
            />
          </div>

          <div className="relative z-10 -mt-12 flex flex-1 flex-col justify-center rounded-t-[2rem] bg-santu-mesh px-6 pt-14 pb-20 shadow-[0_-20px_60px_-24px_rgba(20,18,15,0.2)] lg:col-span-5 lg:-mt-0 lg:rounded-none lg:rounded-bl-[2.75rem] lg:px-10 lg:pt-24 lg:pb-24 lg:shadow-none xl:px-14">
            <div
              className="bg-santu-grid pointer-events-none absolute inset-0 rounded-t-[2rem] opacity-40 lg:rounded-none lg:rounded-bl-[2.75rem]"
              aria-hidden
            />
            <div
              className="animate-santu-float pointer-events-none absolute top-24 right-0 h-56 w-56 rounded-full bg-santu-gold/20 blur-3xl dark:bg-santu-gold/12"
              aria-hidden
            />
            <div
              className="animate-santu-float-delayed pointer-events-none absolute bottom-32 left-0 h-40 w-40 rounded-full bg-amber-200/40 blur-3xl dark:bg-santu-gold/8"
              aria-hidden
            />

            <div className="relative">
              <span className="inline-flex items-center rounded-full border border-santu-gold/25 bg-santu-gold/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-amber-950 uppercase dark:border-santu-gold/20 dark:bg-santu-gold/10 dark:text-amber-200">
                Guinée · Mobilité partagée
              </span>
              <h1
                id="hero-titre"
                className="font-display mt-6 text-[2.4rem] leading-[1.08] font-bold tracking-[-0.04em] text-santu-ink sm:text-5xl lg:text-[2.75rem] xl:text-6xl dark:text-white"
              >
                La route,
                <span className="text-santu-gold"> à plusieurs.</span>
              </h1>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
                Santu Go relie conducteurs et passagers pour des trajets entre
                villes, au bon horaire et au bon budget. Simple, lisible, humain.
              </p>
              <p className="mt-3 text-sm text-zinc-500 italic dark:text-zinc-500">
                Sur la route, ensemble.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={APP_STORE_HREF}
                  id="telecharger"
                  className="bg-santu-gold hover:bg-santu-gold-hover focus-visible:ring-santu-gold inline-flex min-h-12 items-center justify-center rounded-full px-8 text-sm font-semibold text-santu-ink shadow-lg shadow-santu-gold/30 transition-[transform,box-shadow] hover:shadow-xl hover:shadow-santu-gold/35 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.98] dark:text-santu-ink"
                >
                  Télécharger l’app
                </Link>
                <Link
                  href="#liste-attente"
                  className="focus-visible:ring-santu-gold inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-300/90 bg-white/60 px-8 text-sm font-semibold text-santu-ink backdrop-blur-sm transition-colors hover:border-zinc-400 hover:bg-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  Être informé
                </Link>
              </div>
              <p className="mt-8 max-w-sm text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
                Déploiement progressif — inscrivez-vous pour être prévenu dans
                votre zone.
              </p>
            </div>
          </div>
        </section>

        {/* Piliers — bento */}
        <section
          className="relative py-24 md:py-32"
          aria-labelledby="piliers-titre"
        >
          <div
            className="bg-santu-grid pointer-events-none absolute inset-0 opacity-30 dark:opacity-25"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-santu-gold uppercase">
              L’essentiel
            </p>
            <h2
              id="piliers-titre"
              className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-[-0.03em] text-santu-ink sm:text-4xl md:text-5xl dark:text-white"
            >
              Pensée pour les trajets réels.
            </h2>

            <ul className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-20 lg:grid-cols-6 lg:gap-5">
              <li className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.15)] ring-1 ring-black/[0.04] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-28px_rgba(0,0,0,0.18)] sm:col-span-2 sm:p-10 lg:col-span-3 lg:row-span-2 lg:p-12 dark:bg-zinc-900/70 dark:ring-white/[0.06]">
                <div
                  className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-santu-gold/12 blur-2xl transition-opacity group-hover:opacity-100 dark:bg-santu-gold/10"
                  aria-hidden
                />
                <p className="text-xs font-semibold tracking-[0.15em] text-santu-gold uppercase">
                  Trajets
                </p>
                <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-santu-ink md:text-3xl dark:text-white">
                  Villes &amp; horaires
                </h3>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Conakry, Kindia, Labé, Nzérékoré et au-delà. Les départs qui
                  correspondent à votre date et à votre itinéraire — sans fouiller
                  des fils de messages.
                </p>
              </li>
              <li className="group rounded-3xl bg-white p-8 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg lg:col-span-3 dark:bg-zinc-900/70 dark:ring-white/[0.06]">
                <p className="text-xs font-semibold tracking-[0.15em] text-santu-gold uppercase">
                  Confiance
                </p>
                <h3 className="font-display mt-4 text-xl font-bold text-santu-ink dark:text-white">
                  Profils transparents
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Véhicule, places, habitudes : vous voyez avant de choisir. Pas
                  de promesses irréalistes.
                </p>
              </li>
              <li className="group rounded-3xl bg-white p-8 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg lg:col-span-3 dark:bg-zinc-900/70 dark:ring-white/[0.06]">
                <p className="text-xs font-semibold tracking-[0.15em] text-santu-gold uppercase">
                  Réservation
                </p>
                <h3 className="font-display mt-4 text-xl font-bold text-santu-ink dark:text-white">
                  Quelques gestes
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Manifestez votre intérêt ou réservez une place. Le fil direct
                  jusqu’au départ.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Étapes — carte sombre flottante */}
        <section
          className="px-4 pb-24 md:px-6 md:pb-32"
          aria-labelledby="etapes-titre"
        >
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-zinc-950 px-6 py-16 text-white shadow-[0_32px_80px_-32px_rgba(0,0,0,0.55)] ring-1 ring-white/10 sm:px-10 sm:py-20 md:px-14 md:py-24">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(230,168,0,0.12), transparent 50%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(230,168,0,0.08), transparent 50%)",
              }}
              aria-hidden
            />
            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.2em] text-santu-gold uppercase">
                Parcours
              </p>
              <h2
                id="etapes-titre"
                className="font-display mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl md:text-5xl"
              >
                Comment ça marche
              </h2>
              <ol className="mt-14 grid gap-8 sm:mt-16 sm:grid-cols-3 sm:gap-6">
                {[
                  {
                    n: "01",
                    t: "Chercher",
                    d: "Départ, arrivée, créneau. Les trajets publiés s’alignent sur votre recherche.",
                  },
                  {
                    n: "02",
                    t: "Choisir",
                    d: "Trajet, contribution, places — vous comparez avant de vous engager.",
                  },
                  {
                    n: "03",
                    t: "Partir",
                    d: "Confirmation ou message court, puis rendez-vous au point convenu.",
                  },
                ].map((step) => (
                  <li
                    key={step.n}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-santu-gold/25 hover:bg-white/[0.06]"
                  >
                    <span className="font-display text-3xl font-bold tabular-nums text-santu-gold/90">
                      {step.n}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{step.t}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">
                      {step.d}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Conducteurs / Passagers */}
        <section
          className="pb-24 md:pb-32"
          aria-labelledby="roles-titre"
        >
          <h2 id="roles-titre" className="sr-only">
            Conducteurs et passagers
          </h2>
          <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:px-8 md:grid-cols-2 md:gap-6">
            <article
              id="pour-conducteurs"
              className="relative overflow-hidden rounded-[2rem] bg-white p-10 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.14)] ring-1 ring-black/[0.05] md:p-12 dark:bg-zinc-900/80 dark:ring-white/[0.06]"
            >
              <div
                className="absolute top-0 right-0 h-32 w-32 rounded-full bg-santu-gold/10 blur-2xl"
                aria-hidden
              />
              <p className="text-xs font-semibold tracking-[0.2em] text-santu-gold uppercase">
                Conducteurs
              </p>
              <h3 className="font-display relative mt-4 text-2xl font-bold tracking-[-0.02em] text-santu-ink md:text-3xl dark:text-white">
                De la place dans le véhicule ?
              </h3>
              <p className="relative mt-6 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                Publiez trajet, date, heure, places et contribution. Les
                passagers vous contactent dans l’app — sans enchaîner les
                groupes de messages.
              </p>
              <ul className="relative mt-8 space-y-3 text-[15px] text-zinc-600 dark:text-zinc-400">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-santu-gold" />
                  Une fiche, ajustable à tout moment.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-santu-gold" />
                  Vous gardez le contrôle sur qui monte.
                </li>
              </ul>
            </article>
            <article
              id="pour-passagers"
              className="relative overflow-hidden rounded-[2rem] border border-santu-gold/20 bg-linear-to-br from-zinc-900 via-zinc-950 to-black p-10 text-white shadow-[0_24px_60px_-32px_rgba(0,0,0,0.45)] md:p-12"
            >
              <div
                className="absolute -right-10 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-santu-gold/15 blur-3xl"
                aria-hidden
              />
              <p className="text-xs font-semibold tracking-[0.2em] text-santu-gold uppercase">
                Passagers
              </p>
              <h3 className="font-display relative mt-4 text-2xl font-bold tracking-[-0.02em] md:text-3xl">
                Un siège pour la route ?
              </h3>
              <p className="relative mt-6 text-[15px] leading-relaxed text-zinc-400">
                Départ et arrivée : parcourez les offres du moment et les jours
                suivants. Filtrez par horaire et budget affiché.
              </p>
              <ul className="relative mt-8 space-y-3 text-[15px] text-zinc-400">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-santu-gold" />
                  Moins d’appels au hasard pour une place.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-santu-gold" />
                  Contact direct après votre choix.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Confiance */}
        <section
          className="relative min-h-[min(88dvh,52rem)] w-full"
          aria-labelledby="confiance-titre"
        >
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=80"
            alt="Passagers en voiture, ambiance conviviale"
            fill
            className="object-cover object-[center_28%]"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-black via-black/55 to-black/25"
            aria-hidden
          />
          <div className="relative flex min-h-[min(88dvh,52rem)] items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 md:pb-24">
            <div className="mx-auto w-full max-w-6xl">
              <div className="max-w-xl rounded-3xl border border-white/15 bg-black/45 p-8 shadow-2xl backdrop-blur-xl sm:p-10 md:max-w-lg">
                <h2
                  id="confiance-titre"
                  className="font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl"
                >
                  Confiance &amp; sécurité
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-zinc-300">
                  Santu Go est en construction : nous ne promettons pas une
                  vérification complète de chaque conducteur aujourd’hui. Nous
                  renforçons signalements, rappels utiles et clarté des profils —
                  pas à pas.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
                  Restez vigilant : vérifiez le trajet, un premier rendez-vous
                  visible, et dites non si besoin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Liste d’attente */}
        <section
          id="liste-attente"
          className="relative py-24 md:py-32"
          aria-labelledby="liste-titre"
        >
          <div className="bg-santu-mesh absolute inset-0 dark:opacity-100" />
          <div
            className="bg-santu-grid pointer-events-none absolute inset-0 opacity-25"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-santu-gold uppercase">
              Accès anticipé
            </p>
            <h2
              id="liste-titre"
              className="font-display mt-3 text-3xl font-bold tracking-[-0.03em] text-santu-ink sm:text-4xl dark:text-white"
            >
              Rester informé
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              Inscrivez-vous sur notre liste d’attente via le formulaire Google :
              nom, e-mail et téléphone. Nous vous recontactons quand Santu Go
              arrive chez vous.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3">
              <Link
                href={WAITLIST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-santu-gold hover:bg-santu-gold-hover focus-visible:ring-santu-gold inline-flex min-h-12 items-center justify-center rounded-full px-10 text-sm font-semibold text-santu-ink shadow-lg shadow-santu-gold/25 transition-[transform,box-shadow] hover:shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.98] dark:text-santu-ink"
              >
                Ouvrir le formulaire d’inscription
              </Link>
              <p className="max-w-md text-center text-xs text-zinc-500 dark:text-zinc-500">
                S’ouvre dans un nouvel onglet — service{" "}
                <span className="whitespace-nowrap">Google&nbsp;Forms</span>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="border-t border-white/10 bg-zinc-950 py-16 text-white"
        role="contentinfo"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 sm:flex-row sm:items-start sm:justify-between sm:px-8">
          <div>
            <p className="font-display text-xl font-bold tracking-tight">
              Santu Go
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-500">
              Trajets partagés entre villes — Guinée et mobilité interurbaine.
            </p>
          </div>
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
            <div>
              <h3 className="text-[10px] font-semibold tracking-[0.2em] text-zinc-500 uppercase">
                Légal
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link
                    href={LEGAL.mentions}
                    className="text-zinc-400 transition-colors hover:text-santu-gold"
                  >
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link
                    href={LEGAL.privacy}
                    className="text-zinc-400 transition-colors hover:text-santu-gold"
                  >
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link
                    href={LEGAL.terms}
                    className="text-zinc-400 transition-colors hover:text-santu-gold"
                  >
                    Conditions d’utilisation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-semibold tracking-[0.2em] text-zinc-500 uppercase">
                Réseaux
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <li>
                  <a
                    href="https://example.com/santu-facebook"
                    className="text-zinc-400 transition-colors hover:text-santu-gold"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com/santu-instagram"
                    className="text-zinc-400 transition-colors hover:text-santu-gold"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com/santu-x"
                    className="text-zinc-400 transition-colors hover:text-santu-gold"
                    rel="noopener noreferrer"
                  >
                    X
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-14 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Santu Go
        </p>
      </footer>
    </>
  );
}

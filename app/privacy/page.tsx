import type { Metadata } from "next";
import { LegalDocumentLayout } from "../components/legal-document-layout";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Santu Go",
  description:
    "Comment Santu Go collecte, utilise et protège vos données personnelles.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentLayout>
      <article className="text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
        <h1 className="font-display text-3xl font-bold tracking-tight text-santu-ink sm:text-4xl dark:text-white">
          Politique de confidentialité
        </h1>
        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-500">
          Dernière mise à jour : mars 2026 · Application mobile Santu Go
        </p>
        <p className="mt-8 rounded-xl border border-amber-200/80 bg-amber-50/80 p-4 text-sm text-amber-950 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-amber-100">
          Ce document est fourni à titre informatif et doit être relu par un
          professionnel du droit avant publication définitive, selon votre
          pays et le cadre applicable (par ex. réglementations locales sur les
          données personnelles).
        </p>

        <h2 className="font-display mt-12 text-xl font-bold text-santu-ink dark:text-white">
          1. Responsable du traitement
        </h2>
        <p className="mt-4">
          Les données personnelles collectées via l’application Santu Go sont
          traitées par l’éditeur de l’application (ci-après « nous »). Les
          coordonnées complètes de l’éditeur (dénomination sociale, adresse,
          contact) seront indiquées dans les mentions légales et/ou dans
          l’application une fois finalisées.
        </p>

        <h2 className="font-display mt-10 text-xl font-bold text-santu-ink dark:text-white">
          2. Données que nous pouvons collecter
        </h2>
        <p className="mt-4">
          Selon les fonctionnalités activées, les données peuvent inclure
          notamment :
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2">
          <li>
            Données d’identification et de contact : nom, prénom, adresse
            e-mail, numéro de téléphone ;
          </li>
          <li>
            Données de compte : identifiant, préférences, historique d’usage
            de l’app dans la limite nécessaire au service ;
          </li>
          <li>
            Données liées aux trajets : informations publiées ou échangées
            dans le cadre de la mise en relation (villes, horaires, places,
            messages via l’app, etc.) ;
          </li>
          <li>
            Données techniques : type d’appareil, système d’exploitation,
            identifiants techniques, journaux de sécurité ou de débogage, dans
            la mesure où cela est nécessaire au bon fonctionnement et à la
            sécurité du service.
          </li>
        </ul>

        <h2 className="font-display mt-10 text-xl font-bold text-santu-ink dark:text-white">
          3. Finalités du traitement
        </h2>
        <p className="mt-4">Nous utilisons ces données pour :</p>
        <ul className="mt-4 list-inside list-disc space-y-2">
          <li>Créer et gérer votre compte utilisateur ;</li>
          <li>
            Mettre en relation conducteurs et passagers et afficher les
            informations utiles aux trajets ;
          </li>
          <li>
            Assurer la sécurité du service, prévenir la fraude et les abus ;
          </li>
          <li>
            Améliorer l’application, réaliser des statistiques agrégées et non
            identifiables lorsque possible ;
          </li>
          <li>
            Vous envoyer des communications liées au service (notifications,
            informations importantes sur le compte ou la liste d’attente), sauf
            opposition lorsque la loi le permet ;
          </li>
          <li>Respecter nos obligations légales lorsque celles-ci s’appliquent.</li>
        </ul>

        <h2 className="font-display mt-10 text-xl font-bold text-santu-ink dark:text-white">
          4. Base légale
        </h2>
        <p className="mt-4">
          Le traitement repose notamment sur l’exécution du contrat ou des mesures
          précontractuelles (utilisation de l’app), l’intérêt légitime (sécurité,
          amélioration du service, dans le respect de vos droits), et, le cas
          échéant, votre consentement (par exemple pour certaines
          notifications marketing ou cookies non essentiels).
        </p>

        <h2 className="font-display mt-10 text-xl font-bold text-santu-ink dark:text-white">
          5. Destinataires et sous-traitants
        </h2>
        <p className="mt-4">
          Vos données peuvent être accessibles à des prestataires techniques
          strictement nécessaires (hébergement, envoi d’e-mails, analytics,
          etc.), dans le cadre de contrats conformes à la réglementation
          applicable. Nous ne vendons pas vos données personnelles à des tiers
          à des fins commerciales.
        </p>

        <h2 className="font-display mt-10 text-xl font-bold text-santu-ink dark:text-white">
          6. Transferts hors de votre pays
        </h2>
        <p className="mt-4">
          Si des serveurs ou outils sont situés en dehors de votre pays, nous
          mettons en œuvre les garanties appropriées conformément à la loi
          applicable (clauses contractuelles types, etc.).
        </p>

        <h2 className="font-display mt-10 text-xl font-bold text-santu-ink dark:text-white">
          7. Durée de conservation
        </h2>
        <p className="mt-4">
          Les données sont conservées pendant la durée nécessaire aux finalités
          décrites, puis archivées ou supprimées selon les délais légaux et nos
          besoins opérationnels (par exemple conservation du compte tant qu’il
          est actif, puis suppression ou anonymisation dans un délai raisonnable
          après clôture).
        </p>

        <h2 className="font-display mt-10 text-xl font-bold text-santu-ink dark:text-white">
          8. Vos droits
        </h2>
        <p className="mt-4">
          Selon le droit applicable, vous pouvez disposer d’un droit d’accès, de
          rectification, d’effacement, de limitation, d’opposition, de
          portabilité, et du retrait du consentement lorsque le traitement en
          dépend. Vous pouvez aussi introduire une réclamation auprès d’une
          autorité de protection des données compétente.
        </p>
        <p className="mt-4">
          Pour exercer vos droits : utilisez le contact indiqué dans
          l’application ou sur le site une fois publié (e-mail de support à
          préciser).
        </p>

        <h2 className="font-display mt-10 text-xl font-bold text-santu-ink dark:text-white">
          9. Sécurité
        </h2>
        <p className="mt-4">
          Nous mettons en œuvre des mesures techniques et organisationnelles
          appropriées pour protéger vos données. Aucun système n’étant
          infaillible, nous vous invitons également à protéger vos identifiants
          et votre appareil.
        </p>

        <h2 className="font-display mt-10 text-xl font-bold text-santu-ink dark:text-white">
          10. Cookies et traceurs (site web)
        </h2>
        <p className="mt-4">
          Le présent site peut utiliser des cookies ou technologies similaires
          nécessaires au fonctionnement ou, avec votre accord le cas échéant,
          à la mesure d’audience. Vous pouvez paramétrer votre navigateur pour
          refuser certains cookies.
        </p>

        <h2 className="font-display mt-10 text-xl font-bold text-santu-ink dark:text-white">
          11. Liste d’attente (formulaire externe)
        </h2>
        <p className="mt-4">
          Si vous vous inscrivez via un formulaire tiers (par ex. Google Forms),
          les données sont également traitées par ce prestataire selon sa propre
          politique de confidentialité. Nous vous encourageons à la consulter.
        </p>

        <h2 className="font-display mt-10 text-xl font-bold text-santu-ink dark:text-white">
          12. Modifications
        </h2>
        <p className="mt-4">
          Nous pouvons mettre à jour cette politique. La date de dernière mise à
          jour sera révisée ; pour les changements importants, nous pourrons vous
          informer par un avis dans l’app ou par e-mail.
        </p>

        <p className="mt-12 text-sm text-zinc-500 dark:text-zinc-500">
          Pour toute question : contact à compléter par l’éditeur de Santu Go.
        </p>
      </article>
    </LegalDocumentLayout>
  );
}

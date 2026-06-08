import type { CampsiteConfig } from "../types";

/**
 * Sonnencamp am Gösselsdorfer See — 9141 Gösselsdorf, Südkärnten.
 * Alle Texte/Fakten belegt aus sonnencamp.com (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Sonnencamp-Fotos in /public/campsites/sonnencamp/
 *   (alle per Vision geprüft; keine Stock-/Fremdbilder — die regionalen
 *    Freizeit-Fotos der Quelle lagen nicht als Eigenbild vor und entfallen).
 * EHRLICH: Der Platz hat einen EIGENEN kleinen Badesee/Badeteich mit Sandstrand
 * am Platz (nur für Nächtigungsgäste) und nennt sich durchgängig "am
 * Gösselsdorfer See" → "am See" ist belegt. Keine Miet-Mobilheime/Zimmer
 * (Wohnwagen stehen nur zum VERKAUF) → mobilheime-Sektion entfällt. Keine
 * Auszeichnung ausgeschrieben → awards leer. Preise = reale Preisliste 2026.
 */
const IMG = "/campsites/sonnencamp";

export const sonnencamp: CampsiteConfig = {
  name: "Sonnencamp am Gösselsdorfer See",
  shortName: "Sonnencamp",
  slug: "sonnencamp",
  ort: "Gösselsdorf",
  region: "Kärnten",
  brandKind: "Camping am See",
  see: "Gösselsdorfer See",
  regionLong: "Gösselsdorfer See · Südkärnten · Bezirk Völkermarkt · Österreich",

  claim: "Dein sonniger Familienurlaub am Gösselsdorfer See",
  claimEmphasis: "am Gösselsdorfer See",
  intro:
    "Camping mit eigenem kleinen Badesee und neu angelegtem Sandstrand direkt am Platz — sonnig, familiär und erholsam am Gösselsdorfer See in Südkärnten.",

  logo: { src: `${IMG}/logo-sonnencamp.png`, alt: "Sonnencamp am Gösselsdorfer See Logo" },

  statement: {
    text: "Bei uns ist Camping noch Erholung — sonnig, familiär und mitten in der Kärntner Natur.",
    emphasis: "noch Erholung",
  },

  pillars: [
    { title: "Eigener Badesee mit Sandstrand", text: "Ein kleiner Badesee direkt am Platz mit neu angelegtem Sandstrand — der Badeteich steht exklusiv unseren Nächtigungsgästen zur Verfügung.", image: { src: `${IMG}/badesee-baden.webp`, alt: "Kind beim Baden am Badesee mit Steg am Sonnencamp" } },
    { title: "Sonnige Sommertage am See", text: "Sonnenschirme, Sandstrand und ein Sprung ins kühle Nass — genieße sonnige Sommertage am Gösselsdorfer See und lass die Seele baumeln, während die Kinder am Strand spielen.", image: { src: `${IMG}/badesee-sommer.webp`, alt: "Sommer am Badesee des Sonnencamp mit Sandstrand, Sonnenschirmen und Bergblick" } },
    { title: "Ein Paradies für Kinder", text: "Neuer Spielplatz, eine 13 m lange Hüpfburg, Kinderschminken und Lagerfeuer — hier kommt bei den Kleinen keine Langeweile auf.", image: { src: `${IMG}/huepfburg.webp`, alt: "Große aufblasbare Hüpfburg auf der Wiese am Sonnencamp" } },
  ],

  usps: [
    "Warmwasser & Duschen inkl.",
    "Strom 3 kW/h pro Tag inkl.",
    "Eigener Badesee mit Sandstrand",
    "Aktiv-Card Südkärnten gratis",
    "Neuer Spielplatz & 13 m-Hüpfburg",
    "Hunde willkommen (eigene Zone)",
  ],

  trust: {
    heading: "Worauf du dich am Sonnencamp verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Familie Pichler (rundumservice-Pichler e.U.): faire Preise inklusive Warmwasser, Duschen und Strom, ein eigener Badesee mit Sandstrand und jede Menge Platz für Kinder — mitten in der Natur Südkärntens.",
  },

  // Keine eindeutig ausgeschriebene Auszeichnung auf der Quelle → ehrlich leer.
  awards: [],

  saison: { von: "Mitte April", bis: "Ende September" },

  hero: {
    aerial: { src: `${IMG}/hero-badesee-panorama.webp`, alt: "Sonnencamp am Gösselsdorfer See: Stellplätze, gespiegelt im Badesee vor den Südkärntner Bergen" },
  },

  camping: {
    heading: "Camping am Sonnencamp",
    intro:
      "Ebene Plätze auf gepflegtem Wiesengelände, ein eigener Badesee mit Sandstrand und alles Nötige direkt am Platz: Die Preise verstehen sich pro Nacht inkl. Warmwasser, Duschen und 3 kW/h Strom pro Tag — naturnah, familiär und sonnig in Südkärnten.",
    features: [
      { title: "Ebene Stellplätze in der Natur", text: "Gepflegte Wiesen-Stellplätze für Wohnmobil, Wohnwagen und Zelt — inkl. Warmwasser und Duschen, 13-A-Stromanschluss mit 3 kW/h pro Tag im Preis enthalten.", image: { src: `${IMG}/stellplaetze.webp`, alt: "Ebene Stellplätze mit Wohnwagen und Vorzelten am Sonnencamp" } },
      { title: "Sandstrand am eigenen Badesee", text: "Der neu angelegte Sandstrand am Badeteich lädt zum Sonnen, Buddeln und Baden ein — Badespaß direkt vor dem Stellplatz.", image: { src: `${IMG}/sandstrand.webp`, alt: "Sandstrand am Badesee des Sonnencamp mit Sandspielzeug" } },
      { title: "Aktiv-Card Südkärnten gratis", text: "Ab einer Übernachtung gibt es die Aktiv-Card Südkärnten gratis — dazu Radwege rund um den Gösselsdorfer See und Tourenplanung per Komoot direkt ab dem Platz.", image: { src: `${IMG}/ebike-aktivcard.webp`, alt: "E-Bike am Strand des Sonnencamp am Gösselsdorfer See" } },
      { title: "Camping-Zubehörshop am Platz", text: "Von A wie Abwaschkorb bis Z wie Zelt: Unser Zubehörshop am Platz hält alles bereit, was das Camperherz begehrt — mit Zelten von Isabella und Hahn zur Besichtigung.", image: { src: `${IMG}/zubehoershop.webp`, alt: "Gut gefüllte Regale im Camping-Zubehörshop am Sonnencamp" } },
      { title: "Dauercamper & Saisonplätze", text: "Lust auf einen ganzen Sommer am See? Dauercamper- und Saisonplätze sind nach telefonischer Terminvereinbarung verfügbar — passende Wohnwagen stehen auch zum Verkauf.", image: { src: `${IMG}/dauercamper.webp`, alt: "Dauercamper-Plätze mit Wohnwagen und Hecken am Sonnencamp" } },
    ],
  },

  kinder: {
    heading: "Für Kinder ein Paradies",
    intro:
      "Unsere kleinen Camper toben sich am neu angelegten Spielplatz aus. Hüpfburg, Glitter-Tattoos und Lagerfeuer mit Würstel oder Marshmallows sind im Preis bereits inkludiert — Genießen, während die Kinder am Strand spielen.",
    features: [
      { title: "Neu angelegter Spielplatz", text: "Kletterturm, Rutsche und Sandkasten unter schattigen Bäumen — der neue Spielplatz ist das Reich der kleinen Camper.", image: { src: `${IMG}/spielplatz.webp`, alt: "Neu angelegter Spielplatz mit Kletterturm und Rutsche am Sonnencamp" } },
      { title: "Kinderschminken & Glitter-Tattoos", text: "Ob Indianer oder Schmetterling: Kinderschminken und Glitter-Tattoos sorgen für leuchtende Kinderaugen — und sind bereits im Preis enthalten.", image: { src: `${IMG}/kinderschminken.webp`, alt: "Kind mit Kinderschminken und Federschmuck am Sonnencamp" } },
      { title: "Hoverboard-Spaß", text: "Auf den Wegen am Platz drehen die Kinder mit Hoverboards und Spielfahrzeugen ihre Runden — Bewegung und Spaß den ganzen Tag.", image: { src: `${IMG}/hoverboard.webp`, alt: "Kinder fahren mit Hoverboard-Karts auf dem Weg am Sonnencamp" } },
      { title: "Spielspaß rund um den Platz", text: "Fußballtor, Bobby-Car, Sandstrand und Lagerfeuer: Langeweile ist hier ein Fremdwort — und das Lagerfeuer mit Würstel und Marshmallows gehört dazu.", image: { src: `${IMG}/spielplatz-tor.webp`, alt: "Spielwiese mit Fußballtor und Spielfahrzeugen am Sonnencamp" } },
    ],
  },

  anreise: {
    heading: "Lage, Anreise & Öffnungszeiten",
    modes: [
      { title: "Lage am See", text: "Seestraße 21, 9141 Gösselsdorf — am Gösselsdorfer See im Bezirk Völkermarkt, Südkärnten, nahe Eberndorf und der Klopeiner-See-Region." },
      { title: "Mit dem Auto", text: "Über die A2 Südautobahn in den Bezirk Völkermarkt und weiter nach 9141 Gösselsdorf. Anreisen außerhalb der Öffnungszeiten sind nach telefonischer Voranmeldung möglich." },
      { title: "Öffnungszeiten", text: "Rezeption Mo–So 07:30–12:30 & 14:00–19:00, Check-in ab 12:00, Check-out bis 11:30, frisches Gebäck ab 07:45. Geöffnet 18.04.–20.09.2026." },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Sonnencamp",
    headingEmphasis: "Sonnencamp",
    intro:
      "Spielplatz, Sandstrand, Badesee und jede Menge Platz zum Spielen — ein paar Eindrücke vom Familienleben am Gösselsdorfer See.",
    tag: "Mitte April bis September",
    images: [
      { src: `${IMG}/gokart.webp`, alt: "Tretauto vor dem Spielplatz am Sonnencamp" },
      { src: `${IMG}/skateboard.webp`, alt: "Kind beim Skateboarden auf dem Weg am Sonnencamp" },
      { src: `${IMG}/bobbycar.webp`, alt: "Bobby-Car auf der Spielwiese am Sonnencamp" },
      { src: `${IMG}/plaetze-herbst.webp`, alt: "Wohnwagen-Stellplätze mit Vorzelten am Sonnencamp im Herbst" },
      { src: `${IMG}/spielplatz-kinder.webp`, alt: "Kinder spielen am Spielplatz des Sonnencamp" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum und Personen — Familie Pichler meldet sich mit deiner persönlichen Verfügbarkeit am Gösselsdorfer See.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreis: Stellplatz + 2 Erwachsene · inkl. Warmwasser, Duschen & 3 kW/h Strom pro Tag · je weitere Person/Nacht extra · zzgl. Ortstaxe € 2,70 p. P./Nacht (ab Jg. 2008)",
    highlight: {
      title: "1 Kind gratis",
      text: "Mit der Kinder-Aktion 2026 übernachtet 1 Kind bis 11 Jahre gratis — ab 2 Nächten in der Vor-/Nachsaison bzw. 5 Nächten in der Hauptsaison.",
    },
    categories: [
      // Reale Preisliste Sonnencamp 2026. Richtpreis = Stellplatz + 2 Erwachsene/Nacht.
      // Vor-/Nachsaison (18.04.–30.06. & 01.09.–20.09.): Stellplatz 12,30 + 2×9,30 = 30,90; weitere Person (Erw.) 9,30.
      // Hauptsaison (01.07.–31.08.): Stellplatz 13,90 + 2×11,30 = 36,50; weitere Person (Erw.) 11,30.
      { id: "vorsaison", label: "Vor- & Nachsaison", perNight: 30.9, perExtraGuest: 9.3 },
      { id: "hauptsaison", label: "Hauptsaison", perNight: 36.5, perExtraGuest: 11.3 },
    ],
  },

  kontakt: {
    tel: "+43 4236 2168",
    telHref: "tel:+4342362168",
    mail: "office@sonnencamp.com",
    adresse: "Seestraße 21 · 9141 Gösselsdorf · Kärnten",
    coords: { lat: 46.5747, lng: 14.6242 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Dauercamper", href: "#camping" },
        { label: "Zubehörshop", href: "#camping" },
      ],
    },
    {
      label: "Kinder",
      href: "#kinder",
      children: [
        { label: "Spielplatz", href: "#kinder" },
        { label: "Hüpfburg", href: "#kinder" },
        { label: "Kinderschminken", href: "#kinder" },
      ],
    },
    {
      label: "Galerie",
      href: "#galerie",
      children: [
        { label: "Badesee & Strand", href: "#galerie" },
        { label: "Spielplatz", href: "#galerie" },
        { label: "Stellplätze", href: "#galerie" },
      ],
    },
    {
      label: "Preise",
      href: "#booking",
      children: [
        { label: "Preise 2026", href: "#booking" },
        { label: "Kinder-Aktion", href: "#booking" },
        { label: "Saison", href: "#booking" },
      ],
    },
    {
      label: "Lage & Kontakt",
      href: "#anreise",
      children: [
        { label: "Anreise", href: "#anreise" },
        { label: "Öffnungszeiten", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default sonnencamp;

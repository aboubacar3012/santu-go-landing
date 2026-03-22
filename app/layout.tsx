import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "./providers";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Santu Go — Trajets partagés entre villes en Guinée",
  description:
    "Trouvez un trajet au bon horaire et au bon budget. Conducteurs et passagers : une app simple pour la mobilité entre villes.",
  openGraph: {
    title: "Santu Go — Trajets partagés entre villes",
    description:
      "Mise en relation conducteurs et passagers pour des trajets interurbains en Guinée.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${jakarta.variable} ${outfit.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-santu-cream text-santu-ink antialiased dark:bg-[#0c0b09] dark:text-zinc-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

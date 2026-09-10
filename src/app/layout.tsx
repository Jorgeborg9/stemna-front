import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Stemna – Enklere HELFO-refusjon for logopeder og audiopedagoger",
  description:
    "Samle pasienter, timer og takster i Stemna. Generer og last ned refusjonsfilen for egen innsending til HELFO. Prøv gratis i 30 dager.",
  icons: { icon: "/Brand/Stemna logo ikon.png" },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nb" className={`${geistSans.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}

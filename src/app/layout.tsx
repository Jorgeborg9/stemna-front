import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import { CookieConsent } from "@/components/cookie-consent";
import {
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
} from "@/lib/cookie-consent";
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
      <body>
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', functionality_storage: 'granted', security_storage: 'granted', wait_for_update: 500 }); var stored = null; try { stored = JSON.parse(window.localStorage.getItem(${JSON.stringify(CONSENT_STORAGE_KEY)}) || 'null'); } catch (e) {} if (stored && stored.version === ${CONSENT_VERSION} && typeof stored.analytics === 'boolean' && typeof stored.marketing === 'boolean') { gtag('consent', 'update', { analytics_storage: stored.analytics ? 'granted' : 'denied', ad_storage: stored.marketing ? 'granted' : 'denied', ad_user_data: stored.marketing ? 'granted' : 'denied', ad_personalization: stored.marketing ? 'granted' : 'denied' }); }`}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MDV2QVKL');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MDV2QVKL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

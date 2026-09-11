import { WhatIsStemna } from "@/components/what-is-stemna";
import {
  Header,
  Hero,
  FeatureStrip,
  WebPlatformSection,
  TrustSection,
  ProblemSolution,
  SwitchingSection,
  AudienceSection,
  Testimonials,
  Pricing,
  Footer,
} from "@/components/landing";
import { FooterCTA } from "@/components/footer-cta";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#innhold">
        Hopp til innhold
      </a>
      <Header />
      <main id="innhold">
        <Hero />
        <WhatIsStemna />
        <FeatureStrip />
        <ProblemSolution />
        <SwitchingSection />
        <WebPlatformSection />
        <AudienceSection />
        <TrustSection />
        <Testimonials />
        <Pricing />
      </main>
      <FooterCTA />
      <Footer />
    </>
  );
}

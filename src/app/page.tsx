import {
  Header,
  Hero,
  FeatureStrip,
  HelfoSection,
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
        <HelfoSection />
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

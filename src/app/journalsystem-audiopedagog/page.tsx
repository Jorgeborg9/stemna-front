import { SeoLandingPage, seoMetadata } from "@/components/seo-landing";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages.audiopedagog;
export const metadata = seoMetadata(page);

export default function Page() {
  return <SeoLandingPage page={page} />;
}

import { testimonials } from "./landing-data";
import { seoPages, type SeoPageData } from "./seo-pages";

// FICTIONAL PLACEHOLDERS ONLY: names, quotes and illustrative stock portraits
// do not represent verified customers. Replace together with approved reviews.
export type SeoTestimonial = SeoPageData["testimonial"] & {
  portrait: (typeof testimonials)[number]["portrait"];
};
export const seoTestimonials: Record<SeoPageData["mode"], SeoTestimonial[]> = {
  journal: [
    { ...seoPages.logoped.testimonial, portrait: testimonials[0].portrait },
    {
      name: "Kari",
      role: "privatpraktiserende logoped",
      quote:
        "Det er praktisk å samle timer og takster før refusjonsfilen genereres.",
      portrait: testimonials[1].portrait,
    },
    {
      name: "Anne",
      role: "privatpraktiserende logoped",
      quote:
        "Jeg bruker mindre tid på administrasjon og får bedre oversikt over praksisen min.",
      portrait: testimonials[2].portrait,
    },
  ],
  hearing: [
    {
      ...seoPages.audiopedagog.testimonial,
      portrait: testimonials[2].portrait,
    },
    {
      name: "Kari",
      role: "privatpraktiserende audiopedagog",
      quote:
        "Det er praktisk å bruke pasientinformasjon og timer når jeg klargjør refusjonsgrunnlaget.",
      portrait: testimonials[0].portrait,
    },
    {
      name: "Anne",
      role: "privatpraktiserende audiopedagog",
      quote:
        "Jeg bruker mindre tid på administrasjon og får bedre oversikt over min audiopedagogiske praksis.",
      portrait: testimonials[1].portrait,
    },
  ],
  refund: [
    { ...seoPages.helfo.testimonial, portrait: testimonials[1].portrait },
    {
      name: "Kari",
      role: "privatpraktiserende behandler",
      quote:
        "Jeg kan velge takster i systemet i stedet for å skrive dem inn på nytt hver gang.",
      portrait: testimonials[0].portrait,
    },
    {
      name: "Mari",
      role: "privatpraktiserende behandler",
      quote:
        "Jeg får bedre oversikt over refusjonsarbeidet når timer og takster er samlet i Stemna.",
      portrait: testimonials[2].portrait,
    },
  ],
  practice: [
    { ...seoPages.practice.testimonial, portrait: testimonials[0].portrait },
    {
      name: "Kari",
      role: "privatpraktiserende behandler",
      quote:
        "Stemna gir meg oversikt over pasienter, timer og takster før jeg klargjør refusjonsfilen.",
      portrait: testimonials[1].portrait,
    },
    {
      name: "Anne",
      role: "privatpraktiserende behandler",
      quote: "Jeg bruker mindre tid på systemer og mer tid på pasientene.",
      portrait: testimonials[2].portrait,
    },
  ],
};

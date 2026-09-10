// User-supplied patient journal illustration shared by the SEO product sections.
// Replace this asset and its intrinsic dimensions when final imagery is ready.
export const seoProductVisual = {
  src: "/Reference/pasientjournal.png",
  width: 1536,
  height: 1024,
  alt: "Illustrasjon av Stemna på en bærbar datamaskin med fiktive eksempeldata",
};

// Assigned mockups for the HELFO and private-practice pages only.
export const seoProductVariants = {
  refund: {
    ...seoProductVisual,
    src: "/images/Helfo3.png",
    alt: "Produktillustrasjon av HELFO-oppgjør i Stemna med fiktive eksempeldata",
  },
  practice: {
    ...seoProductVisual,
    src: "/images/stemna-main.png",
    alt: "Produktillustrasjon av praksisoversikten i Stemna med fiktive eksempeldata",
  },
};

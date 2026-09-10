"use client";

import { useState } from "react";
import Image from "next/image";
import type { SeoTestimonial } from "@/lib/seo-testimonials";
import styles from "./seo-testimonial-carousel.module.css";

export function SeoTestimonialCarousel({
  reviews,
}: {
  reviews: SeoTestimonial[];
}) {
  const [active, setActive] = useState(0);
  const move = (step: number) =>
    setActive((current) => (current + step + reviews.length) % reviews.length);
  return (
    <div
      className={styles.card}
      role="region"
      aria-roledescription="karusell"
      aria-label="Fiktive eksempelomtaler"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className={styles.slides} aria-live="polite" aria-atomic="true">
        {reviews.map((review, index) => (
          <figure
            className={styles.slide}
            key={review.name}
            data-active={index === active}
            aria-hidden={index !== active}
            inert={index !== active}
            role="group"
            aria-roledescription="lysbilde"
            aria-label={`${index + 1} av ${reviews.length}`}
          >
            <div className={styles.avatar}>
              <Image
                src={review.portrait.src}
                alt="Illustrasjonsportrett til en fiktiv eksempelomtale"
                fill
                sizes="(max-width: 760px) 64px, 88px"
                style={{
                  objectFit: "cover",
                  objectPosition: review.portrait.objectPosition,
                }}
              />
            </div>
            <div className={styles.content}>
              <blockquote>«{review.quote}»</blockquote>
              <figcaption>
                <strong>{review.name}</strong>
                <span>{review.role}</span>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
      <div className={styles.footer}>
        <p>
          Eksempelomtale – fiktivt navn og sitat, ikke en ekte kundeuttalelse.
        </p>
        <div className={styles.controls} aria-label="Velg eksempelomtale">
          <button
            type="button"
            aria-label="Forrige eksempelomtale"
            onClick={() => move(-1)}
          >
            <Chevron previous />
          </button>
          <div className={styles.dots}>
            {reviews.map((review, index) => (
              <button
                type="button"
                key={review.name}
                aria-label={`Vis eksempelomtale ${index + 1}`}
                aria-current={index === active ? "true" : undefined}
                onClick={() => setActive(index)}
              >
                <span />
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Neste eksempelomtale"
            onClick={() => move(1)}
          >
            <Chevron />
          </button>
        </div>
      </div>
    </div>
  );
}
function Chevron({ previous = false }: { previous?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d={previous ? "m14 6-6 6 6 6" : "m10 6 6 6-6 6"} />
    </svg>
  );
}

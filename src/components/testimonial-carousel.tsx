"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/landing-data";
import styles from "./testimonial-carousel.module.css";

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const resetAutoplay = useRef<() => void>(() => {});

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let hovered =
      window.matchMedia("(hover: hover)").matches && section.matches(":hover");
    let timer: ReturnType<typeof setTimeout> | undefined;

    // One owned timeout: every pause/reset cancels it before scheduling another.
    const schedule = () => {
      clearTimeout(timer);
      timer = undefined;
      if (hovered || document.hidden || reducedMotion.matches) return;
      timer = setTimeout(() => {
        if (!hovered && !document.hidden && !reducedMotion.matches) {
          setActive((index) => (index + 1) % testimonials.length);
        }
        schedule();
      }, 7000);
    };
    const enter = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      hovered = true;
      schedule();
    };
    const leave = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      hovered = false;
      schedule();
    };

    resetAutoplay.current = schedule;
    section.addEventListener("pointerenter", enter);
    section.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", schedule);
    reducedMotion.addEventListener("change", schedule);
    schedule();

    return () => {
      clearTimeout(timer);
      resetAutoplay.current = () => {};
      section.removeEventListener("pointerenter", enter);
      section.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", schedule);
      reducedMotion.removeEventListener("change", schedule);
    };
  }, []);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const review = testimonials[active];
  const portrait = review.portrait;
  const move = (direction: number) => {
    resetAutoplay.current();
    setActive(
      (index) =>
        (index + direction + testimonials.length) % testimonials.length,
    );
  };
  const select = (index: number) => {
    resetAutoplay.current();
    setActive(index);
  };

  return (
    <section
      ref={sectionRef}
      className={`section testimonials-section ${styles.section}`}
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">DET SIER VÅRE KUNDER</p>
            <h2 id="testimonials-title">En enklere arbeidshverdag</h2>
          </div>
          <p className={styles.disclosure}>
            Eksempelomtaler – ikke ekte kundeuttalelser
          </p>
        </div>
        <div
          className={styles.carousel}
          role="region"
          aria-roledescription="karusell"
          aria-label="Eksempelomtaler"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              move(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
          onTouchStart={(event) => {
            const touch = event.touches[0];
            touchStart.current =
              event.touches.length === 1
                ? { x: touch.clientX, y: touch.clientY }
                : null;
          }}
          onTouchCancel={() => {
            touchStart.current = null;
          }}
          onTouchEnd={(event) => {
            const start = touchStart.current;
            touchStart.current = null;
            if (!start) return;
            const touch = event.changedTouches[0];
            const dx = touch.clientX - start.x;
            const dy = touch.clientY - start.y;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5)
              move(dx < 0 ? 1 : -1);
          }}
        >
          <div
            key={active}
            className={styles.slide}
            role="group"
            aria-roledescription="omtale"
            aria-label={`Eksempelomtale ${active + 1} av ${testimonials.length}`}
          >
            <div className={styles.portrait}>
              {portrait ? (
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 280px"
                  className={styles.photo}
                  style={{ objectPosition: portrait.objectPosition }}
                />
              ) : (
                <>
                  <svg
                    width="72"
                    height="84"
                    viewBox="0 0 72 84"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <circle cx="36" cy="24" r="16" />
                    <path d="M6 78v-8a30 30 0 0 1 60 0v8" />
                  </svg>
                  <span>Portrettplassholder</span>
                </>
              )}
            </div>
            <figure className={styles.quote}>
              <span className={styles.quoteMark} aria-hidden="true">
                “
              </span>
              <blockquote>{review.quote}</blockquote>
              <figcaption>
                <strong>{review.name}</strong>
                <span>{review.role}</span>
                <small>Eksempelkunde · fiktiv omtale</small>
              </figcaption>
            </figure>
            <ul
              className={styles.benefits}
              aria-label="Fordeler i eksempelomtalen"
            >
              {review.benefits.map((benefit) => (
                <li key={benefit}>
                  <span className={styles.check}>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m6 12 4 4 8-8" />
                    </svg>
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => move(-1)}
              aria-label="Forrige omtale"
            >
              ←
            </button>
            <div className={styles.dots} aria-label="Velg eksempelomtale">
              {testimonials.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={styles.dot}
                  aria-label={`Vis omtale ${index + 1}`}
                  aria-current={index === active ? "true" : undefined}
                  onClick={() => select(index)}
                >
                  <span />
                </button>
              ))}
            </div>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => move(1)}
              aria-label="Neste omtale"
            >
              →
            </button>
          </div>
          <p
            className={styles.srOnly}
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            Eksempelomtale {active + 1} av {testimonials.length}: {review.quote}{" "}
            {review.name}, {review.role}.
          </p>
        </div>
      </div>
    </section>
  );
}

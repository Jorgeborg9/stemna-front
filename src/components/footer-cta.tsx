import { Logo, Icon } from "./landing";
import { Action } from "./actions";
import { trial } from "@/lib/landing-data";

export function FooterCTA() {
  return (
    <section className="final-cta">
      <div className="container final-inner">
        <div>
          <Logo light />
          <h2>
            Prøv en enklere
            <br />
            arbeidshverdag.
          </h2>
          <p>
            Test Stemna gratis i 30 dager. Vi hjelper deg med å komme i gang.
          </p>
        </div>
        <div className="final-action">
          <Action className="button button-white">
            {trial.cta} <Icon name="arrow" />
          </Action>
          <span>
            <Icon name="check" />
            Ingen bindingstid
          </span>
        </div>
      </div>
    </section>
  );
}

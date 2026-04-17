import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AppHeader from "@/components/AppHeader";

const valueProps = [
  { kicker: "01", title: "Real fit, not just look", body: "Every frame is scored against your facial measurements — temple width, bridge, lens height." },
  { kicker: "02", title: "Independent makers", body: "Family ateliers, vintage specialists, sustainable studios. No big-box noise." },
  { kicker: "03", title: "No pressure to buy", body: "Try anything. Save what you love. Visit the maker when you're ready." },
];

const partnerMarks = ["Maison Lune", "Atelier Vico", "Iris & Vale", "North Optic Co.", "Ode Eyewear", "Casa Bruna", "Nordlys Studio", "Grain & Lens"];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppHeader />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative px-6 md:px-10 pt-20 md:pt-32 pb-24 md:pb-40 max-w-7xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground animate-fade-in">
            Virtual try-on · for independent eyewear
          </p>

          <h1 className="font-display font-semibold tracking-tight text-foreground mt-6 leading-[0.95] animate-fade-in-up text-[clamp(2.75rem,9vw,8rem)]">
            See it on.<br />
            <span className="text-muted-foreground">Know it fits.</span>
          </h1>

          <div className="mt-10 max-w-xl animate-fade-in-up" style={{ animationDelay: "120ms" }}>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              FrameSense reads your face shape and measurements, then quietly tells you whether each pair will actually sit right — so you can shop boutique eyewear online with confidence.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: "240ms" }}>
            <Link
              to="/scan"
              className="group inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all"
            >
              Start try-on
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/try-on"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full border hairline text-sm text-foreground hover:bg-secondary transition-colors"
            >
              Skip to catalog
            </Link>
          </div>

          {/* Decorative SVG glasses */}
          <div className="hidden lg:block absolute right-10 top-32 opacity-90 animate-float">
            <svg width="320" height="120" viewBox="0 0 320 120">
              <circle cx="80" cy="60" r="48" fill="none" stroke="hsl(var(--foreground))" strokeWidth="3" />
              <circle cx="240" cy="60" r="48" fill="none" stroke="hsl(var(--foreground))" strokeWidth="3" />
              <line x1="128" y1="58" x2="192" y2="58" stroke="hsl(var(--foreground))" strokeWidth="3" />
              <line x1="32" y1="48" x2="6" y2="38" stroke="hsl(var(--foreground))" strokeWidth="3" strokeLinecap="round" />
              <line x1="288" y1="48" x2="314" y2="38" stroke="hsl(var(--foreground))" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </section>

        {/* Value props */}
        <section className="border-t hairline">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-3 gap-12 md:gap-16">
            {valueProps.map((v) => (
              <div key={v.kicker}>
                <p className="text-xs tabular-nums text-accent font-medium mb-4">— {v.kicker}</p>
                <h3 className="font-display text-xl font-semibold mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners strip */}
        <section className="border-t hairline">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">
              Featured independent makers
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {partnerMarks.map((m) => (
                <span key={m} className="font-display text-base md:text-lg text-foreground/60 hover:text-foreground transition-colors">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} FrameSense — eyewear, fitted.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">For makers</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

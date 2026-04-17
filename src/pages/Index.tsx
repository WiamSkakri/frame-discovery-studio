import { Link } from "react-router-dom";
import { ChevronDown, Scan, Eye, Store, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const nodes = [
    { to: "/scan", icon: Scan, label: "Scan face" },
    { to: "/scan", icon: Eye, label: "Try-on" },
    { to: "/try-on", icon: Store, label: "Boutiques" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Theme toggle */}
      <button
        onClick={() => setDark((d) => !d)}
        aria-label="Toggle theme"
        className="fixed top-6 right-6 z-50 h-11 w-11 rounded-full bg-surface-lowest/70 backdrop-blur-xl flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors shadow-cloud"
      >
        {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>

      {/* Giant glasses backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <svg
          viewBox="0 0 1400 700"
          className="w-[140%] max-w-none opacity-[0.18] dark:opacity-[0.12]"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.55" />
              <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          {/* Left lens */}
          <path
            d="M 120 360 C 120 220, 280 170, 480 200 C 620 220, 660 320, 640 430 C 620 540, 480 580, 320 560 C 180 540, 120 470, 120 360 Z"
            fill="hsl(var(--surface-lowest))"
            fillOpacity="0.35"
            stroke="url(#glassGrad)"
            strokeWidth="3"
          />
          {/* Right lens */}
          <path
            d="M 760 360 C 760 220, 920 170, 1120 200 C 1260 220, 1300 320, 1280 430 C 1260 540, 1120 580, 960 560 C 820 540, 760 470, 760 360 Z"
            fill="hsl(var(--surface-lowest))"
            fillOpacity="0.35"
            stroke="url(#glassGrad)"
            strokeWidth="3"
          />
          {/* Bridge */}
          <path
            d="M 640 280 C 680 260, 720 260, 760 280"
            fill="none"
            stroke="url(#glassGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Soft ambient blob */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/5 blur-3xl" />

      {/* Hero content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-display text-[clamp(3rem,11vw,9rem)] leading-[0.9] tracking-tight text-foreground">
            FrameSense
          </h1>

          <p className="mt-8 text-[0.6875rem] uppercase tracking-[0.32em] text-muted-foreground">
            AI-driven eyewear try-on <span className="mx-2 text-outline-variant">|</span>{" "}
            Independent ateliers <span className="mx-2 text-outline-variant">|</span>{" "}
            Sustainable style
          </p>

          {/* Gradient accent bar */}
          <div className="mx-auto mt-6 h-[3px] w-64 rounded-full bg-gradient-primary" />
        </div>

        {/* Circular nav nodes */}
        <nav className="mt-20 flex items-center gap-10 sm:gap-16 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          {nodes.map(({ to, icon: Icon, label }) => (
            <Link key={label} to={to} className="group flex flex-col items-center gap-5">
              <span
                className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:scale-105"
                style={{ borderColor: "hsl(var(--outline-variant) / 0.35)" }}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Icon
                  className="relative h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-500"
                  strokeWidth={2}
                />
              </span>
              <span className="text-[0.625rem] uppercase tracking-[0.28em] text-muted-foreground group-hover:text-foreground transition-colors">
                {label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="h-5 w-5 text-outline-variant" />
        </div>
      </main>
    </div>
  );
};

export default Index;

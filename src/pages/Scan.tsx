import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, RotateCcw } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import WebcamView from "@/components/WebcamView";
import { faceShapes, type FaceShape } from "@/data/frames";

const SHAPES: FaceShape[] = ["oval", "round", "square", "heart"];

const Scan = () => {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(true);
  const [detected, setDetected] = useState<FaceShape | null>(null);

  const runScan = () => {
    setDetected(null);
    setScanning(true);
    const pick = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    window.setTimeout(() => {
      setDetected(pick);
      setScanning(false);
    }, 2400);
  };

  useEffect(() => {
    runScan();
  }, []);

  const handleStart = () => {
    if (!detected) return;
    sessionStorage.setItem("framesense.faceShape", detected);
    navigate("/try-on");
  };

  return (
    <div className="h-screen flex flex-col bg-neutral-950">
      <AppHeader variant="overlay" />

      <main className="flex-1 pt-16 relative">
        <WebcamView className="absolute inset-0" mirror>
          {/* Face guide ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative" style={{ width: "min(58vh, 380px)", height: "min(72vh, 480px)" }}>
              <div className="absolute inset-0 rounded-[50%] border border-white/40" />
              <div className="absolute -inset-2 rounded-[50%] border border-white/10" />
              {/* corner ticks */}
              {[
                "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2",
                "right-0 top-1/2 -translate-y-1/2 translate-x-1/2",
              ].map((c, i) => (
                <span key={i} className={`absolute h-2 w-2 bg-white/80 ${c}`} />
              ))}
              {scanning && (
                <div className="absolute inset-0 rounded-[50%] overflow-hidden">
                  <div className="absolute inset-0 scan-sweep" />
                </div>
              )}
            </div>
          </div>

          {/* Status pill */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2">
            <div className="glass-dark rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/90 flex items-center gap-2">
              {scanning ? (
                <>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  Reading your face
                </>
              ) : (
                <>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Scan complete
                </>
              )}
            </div>
          </div>

          {/* Result card */}
          {detected && !scanning && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[min(560px,calc(100%-2rem))] animate-fade-in-up">
              <div className="bg-background rounded-2xl shadow-float p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                  Detected face shape
                </p>
                <div className="flex items-end justify-between gap-4 mb-4">
                  <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
                    {faceShapes[detected].name}
                  </h2>
                  <span className="text-xs text-muted-foreground tabular-nums pb-2">
                    confidence · 94%
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  {faceShapes[detected].description}
                </p>
                <p className="text-sm text-foreground leading-relaxed mb-6">
                  <span className="text-accent font-medium">Recommended:</span> {faceShapes[detected].recommends}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleStart}
                    className="group flex-1 inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all"
                  >
                    Start trying on
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <button
                    onClick={runScan}
                    className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full border hairline text-sm text-foreground hover:bg-secondary transition-colors"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Re-scan
                  </button>
                </div>
              </div>
            </div>
          )}
        </WebcamView>
      </main>
    </div>
  );
};

export default Scan;

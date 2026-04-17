import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RotateCcw } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import WebcamView from "@/components/WebcamView";
import GlassesOverlay from "@/components/GlassesOverlay";
import FrameDock from "@/components/FrameDock";
import FitScoreBadge from "@/components/FitScoreBadge";
import PartnerCardRail from "@/components/PartnerCardRail";
import { faceShapes, frames, type FaceShape, type Frame } from "@/data/frames";

const computeFit = (frame: Frame, shape: FaceShape) => {
  const base = frame.recommendedFor.includes(shape) ? 88 : 68;
  // deterministic small variation per frame
  const seed = frame.id.charCodeAt(1) % 11;
  return Math.min(98, base + seed);
};

const TryOn = () => {
  const navigate = useNavigate();
  const [faceShape, setFaceShape] = useState<FaceShape>("oval");
  const [selected, setSelected] = useState<Frame>(frames[0]);
  const [guideVisible, setGuideVisible] = useState(true);

  useEffect(() => {
    const saved = sessionStorage.getItem("framesense.faceShape") as FaceShape | null;
    if (saved && faceShapes[saved]) setFaceShape(saved);
    // pick a recommended frame for the detected shape on first load
    const initial = frames.find((f) => f.recommendedFor.includes(saved ?? "oval")) ?? frames[0];
    setSelected(initial);
    const t = window.setTimeout(() => setGuideVisible(false), 2400);
    return () => window.clearTimeout(t);
  }, []);

  const fitScore = useMemo(() => computeFit(selected, faceShape), [selected, faceShape]);

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <AppHeader />

      <main className="flex-1 pt-16 flex min-h-0">
        {/* Camera area */}
        <section className="relative flex-1 min-w-0 p-4">
          <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-soft">
            <WebcamView className="absolute inset-0" mirror>
              {/* Face shape chip */}
              <div className="absolute top-4 left-4 z-10">
                <button
                  onClick={() => navigate("/scan")}
                  className="glass-dark rounded-full pl-3 pr-2 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/90 flex items-center gap-2 hover:bg-black/60 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {faceShapes[faceShape].name}
                  <span className="text-white/40">·</span>
                  <span className="inline-flex items-center gap-1 text-white/70">
                    <RotateCcw className="h-3 w-3" /> Re-scan
                  </span>
                </button>
              </div>

              {/* Fit Score */}
              <div className="absolute top-4 right-4 z-10">
                <FitScoreBadge score={fitScore} />
              </div>

              {/* Glasses overlay positioned at eye level (mocked) */}
              <div
                className="absolute z-[5] left-1/2 -translate-x-1/2"
                style={{ top: "38%" }}
                key={selected.id}
              >
                <div className="animate-fade-in">
                  <GlassesOverlay frame={selected} width={Math.min(360, window.innerWidth * 0.32)} />
                </div>
              </div>

              {/* Soft face guide (fades out) */}
              <div
                className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                  guideVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className="rounded-[50%] border border-white/25"
                  style={{ width: "min(54vh, 360px)", height: "min(68vh, 460px)" }}
                />
              </div>

              {/* Partner cards rail */}
              <PartnerCardRail frame={selected} />
            </WebcamView>
          </div>
        </section>

        {/* Right dock */}
        <div className="w-[340px] shrink-0 hidden lg:block">
          <FrameDock
            faceShape={faceShape}
            selectedId={selected.id}
            onSelect={setSelected}
            onRescan={() => navigate("/scan")}
          />
        </div>
      </main>
    </div>
  );
};

export default TryOn;

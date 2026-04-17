import { ArrowUpRight, MapPin } from "lucide-react";
import { partners, type Frame } from "@/data/frames";

interface Props {
  frame: Frame;
}

const PartnerCardRail = ({ frame }: Props) => {
  const list = partners.filter((p) => p.carries.includes(frame.id));
  if (list.length === 0) return null;

  return (
    <div className="absolute left-0 right-0 bottom-0 px-4 pb-4 pointer-events-none">
      <div className="flex items-end gap-3 overflow-x-auto no-scrollbar pointer-events-auto pb-1">
        <div className="shrink-0 self-stretch flex flex-col justify-end pb-2 pr-1">
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/70">Available at</p>
          <p className="font-display text-sm text-white">{list.length} {list.length === 1 ? "maker" : "makers"}</p>
        </div>
        {list.map((p, i) => (
          <article
            key={p.id}
            style={{ animationDelay: `${i * 60}ms` }}
            className="glass rounded-xl p-4 w-[260px] shrink-0 shadow-float animate-fade-in-up"
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-display text-[15px] font-semibold leading-tight">{p.name}</h3>
              <span className="text-xs tabular-nums text-foreground shrink-0">${frame.priceFrom}</span>
            </div>
            <p className="flex items-center gap-1 text-[11px] text-muted-foreground mb-2">
              <MapPin className="h-3 w-3" /> {p.city}
            </p>
            <p className="text-xs text-foreground/80 leading-relaxed line-clamp-2 mb-3">{p.tagline}</p>
            <a
              href={p.url}
              className="inline-flex items-center gap-1 text-xs font-medium text-foreground hover:text-accent transition-colors"
            >
              Visit shop <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PartnerCardRail;

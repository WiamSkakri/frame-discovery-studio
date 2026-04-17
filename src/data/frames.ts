export type FaceShape = "oval" | "round" | "square" | "heart";

export type Frame = {
  id: string;
  name: string;
  maker: string;
  shape: "round" | "square" | "rectangle" | "cat-eye" | "aviator" | "browline" | "oval" | "geometric";
  material: "acetate" | "titanium" | "wood" | "recycled";
  priceFrom: number;
  recommendedFor: FaceShape[];
  // SVG path/style hint for the overlay
  style: "round" | "rect" | "cat" | "aviator" | "browline" | "geo";
  color: string; // hex for the overlay fill
};

export const frames: Frame[] = [
  { id: "f1", name: "Aurora", maker: "Maison Lune", shape: "round", material: "acetate", priceFrom: 220, recommendedFor: ["square", "heart"], style: "round", color: "#1a1a1a" },
  { id: "f2", name: "Modena", maker: "Atelier Vico", shape: "rectangle", material: "acetate", priceFrom: 285, recommendedFor: ["round", "oval"], style: "rect", color: "#3a2a1f" },
  { id: "f3", name: "Vesta", maker: "Iris & Vale", shape: "cat-eye", material: "acetate", priceFrom: 310, recommendedFor: ["round", "square"], style: "cat", color: "#101010" },
  { id: "f4", name: "Field 04", maker: "North Optic Co.", shape: "aviator", material: "titanium", priceFrom: 340, recommendedFor: ["heart", "oval"], style: "aviator", color: "#6b6b6b" },
  { id: "f5", name: "Halden", maker: "Ode Eyewear", shape: "browline", material: "acetate", priceFrom: 260, recommendedFor: ["oval", "round"], style: "browline", color: "#2c1810" },
  { id: "f6", name: "Pilar", maker: "Casa Bruna", shape: "square", material: "acetate", priceFrom: 245, recommendedFor: ["round", "oval"], style: "rect", color: "#0e1f2c" },
  { id: "f7", name: "Soren", maker: "Nordlys Studio", shape: "round", material: "titanium", priceFrom: 295, recommendedFor: ["square", "heart"], style: "round", color: "#8a7a5c" },
  { id: "f8", name: "Mira", maker: "Iris & Vale", shape: "cat-eye", material: "acetate", priceFrom: 275, recommendedFor: ["square", "heart"], style: "cat", color: "#5a1a1a" },
  { id: "f9", name: "Larch", maker: "Grain & Lens", shape: "rectangle", material: "wood", priceFrom: 320, recommendedFor: ["round", "oval"], style: "rect", color: "#3d2817" },
  { id: "f10", name: "Orbit", maker: "Re:frame", shape: "geometric", material: "recycled", priceFrom: 195, recommendedFor: ["oval"], style: "geo", color: "#1a1a1a" },
  { id: "f11", name: "Hano", maker: "Maison Lune", shape: "oval", material: "acetate", priceFrom: 240, recommendedFor: ["square", "heart"], style: "round", color: "#2a2a2a" },
  { id: "f12", name: "Cavo", maker: "Atelier Vico", shape: "browline", material: "titanium", priceFrom: 360, recommendedFor: ["oval", "heart"], style: "browline", color: "#1a1a1a" },
];

export type Partner = {
  id: string;
  name: string;
  city: string;
  tagline: string;
  carries: string[]; // frame ids
  url: string;
};

export const partners: Partner[] = [
  { id: "p1", name: "Maison Lune", city: "Lyon, FR", tagline: "Family atelier since 1962. Hand-cut acetate.", carries: ["f1", "f11"], url: "#" },
  { id: "p2", name: "Atelier Vico", city: "Milano, IT", tagline: "Architectural frames in small batches.", carries: ["f2", "f12"], url: "#" },
  { id: "p3", name: "Iris & Vale", city: "Brooklyn, US", tagline: "Vintage-inspired silhouettes, modern fit.", carries: ["f3", "f8"], url: "#" },
  { id: "p4", name: "North Optic Co.", city: "Reykjavík, IS", tagline: "Titanium engineered for the long haul.", carries: ["f4"], url: "#" },
  { id: "p5", name: "Ode Eyewear", city: "Lisbon, PT", tagline: "Slow-made eyewear, mission-driven.", carries: ["f5"], url: "#" },
  { id: "p6", name: "Casa Bruna", city: "Barcelona, ES", tagline: "Mediterranean palettes, bold geometry.", carries: ["f6", "f1"], url: "#" },
  { id: "p7", name: "Nordlys Studio", city: "Oslo, NO", tagline: "Minimalist titanium, near-invisible weight.", carries: ["f7", "f4"], url: "#" },
  { id: "p8", name: "Grain & Lens", city: "Portland, US", tagline: "FSC-certified wood frames, made by hand.", carries: ["f9"], url: "#" },
  { id: "p9", name: "Re:frame", city: "Berlin, DE", tagline: "3D-printed from ocean-bound plastic.", carries: ["f10", "f6"], url: "#" },
];

export const faceShapes: Record<FaceShape, { name: string; description: string; recommends: string }> = {
  oval: {
    name: "Oval",
    description: "Balanced proportions with a softly rounded jaw.",
    recommends: "Most shapes work — try browlines, geometric, or aviators.",
  },
  round: {
    name: "Round",
    description: "Soft curves with similar width and length.",
    recommends: "Angular frames — rectangle, square, or browline — add definition.",
  },
  square: {
    name: "Square",
    description: "Strong jawline with broad forehead and cheekbones.",
    recommends: "Round, oval, or cat-eye frames soften strong angles.",
  },
  heart: {
    name: "Heart",
    description: "Wider forehead tapering to a narrow chin.",
    recommends: "Bottom-heavy shapes — aviator or round — balance the face.",
  },
};

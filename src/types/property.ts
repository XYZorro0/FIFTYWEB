export type PropertyStatus = "available" | "sold" | "coming-soon";
export type PropertyNeighborhood = "River Oaks" | "Memorial" | "Greater Houston";

export interface PropertyImage {
  url: string;
  alt: string;
  role: "hero" | "gallery";
  width: number;
  height: number;
}

export interface Property {
  id: string;
  name: string;
  neighborhood: PropertyNeighborhood;
  status: PropertyStatus;
  description: string;
  shortDescription: string;
  images: PropertyImage[];
  features?: string[];
  awards?: string[];
  featured?: boolean;
}

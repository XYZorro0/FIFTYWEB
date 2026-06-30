export interface RemodelService {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export const REMODEL_SERVICES: RemodelService[] = [
  {
    id: "kitchen",
    title: "Kitchen Transformations",
    description:
      "From layout reimagination to bespoke cabinetry and professional-grade appliances — we build kitchens that perform as beautifully as they look.",
    features: ["Custom cabinetry", "Designer appliances", "Natural stone surfaces", "Integrated lighting"],
  },
  {
    id: "bathroom",
    title: "Spa Bathrooms",
    description:
      "We transform bathrooms into private sanctuaries with sculptural stone, statement fixtures, steam showers, and heated floors.",
    features: ["Natural stone and marble", "Steam shower systems", "Heated floors", "Custom millwork vanities"],
  },
  {
    id: "specialty-rooms",
    title: "Specialty Rooms",
    description:
      "Wine cellars, home theaters, private saunas, libraries, game rooms — spaces designed to be the most memorable rooms in your home.",
    features: ["Private saunas", "Wine cellars", "Home theaters", "Custom libraries"],
  },
  {
    id: "whole-home",
    title: "Whole-Home Renovations",
    description:
      "A complete reimagination of your existing residence — new floor plans, new finishes, new technology — in a home you already love.",
    features: ["Floor plan optimization", "Smart home integration", "Full systems replacement", "Interior architecture"],
  },
  {
    id: "outdoor",
    title: "Outdoor Living",
    description:
      "Houston's climate invites outdoor living. We build covered terraces, outdoor kitchens, pools, and gardens designed for how you live.",
    features: ["Covered terraces", "Outdoor kitchens", "Pool and spa design", "Landscape integration"],
  },
  {
    id: "architectural",
    title: "Architectural Details",
    description:
      "The artisan millwork, custom staircases, coffered ceilings, and layered molding that distinguish a house from a work of architecture.",
    features: ["Artisan millwork", "Custom staircases", "Coffered ceilings", "Architectural molding"],
  },
];

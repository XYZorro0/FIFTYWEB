export type AwardLevel = "grand" | "gold" | "silver" | "winner";

export interface AwardItem {
  title: string;
  year: number;
  category?: string;
  level?: AwardLevel;
  externalUrl?: string;
}

export interface AwardBody {
  id: string;
  organization: string;
  shortName: string;
  description: string;
  items: AwardItem[];
  logoUrl?: string;
  badgeUrls?: string[];
}

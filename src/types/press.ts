export interface PressPublication {
  id: string;
  name: string;
  logoUrl: string;
  logoWidth: number;
  logoHeight: number;
}

export interface PressArticle {
  id: string;
  publication: string;
  publicationLogoUrl: string;
  logoWidth: number;
  logoHeight: number;
  headline: string;
  excerpt: string;
  url?: string;
  coverImageUrl?: string;
  coverWidth?: number;
  coverHeight?: number;
}

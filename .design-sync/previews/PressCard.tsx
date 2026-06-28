import { PressCard } from "fiftyweb-next";

const placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTIwIDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMzIiIGZpbGw9IiNCODk3NUEiIG9wYWNpdHk9IjAuNiIgcng9IjIiLz48dGV4dCB4PSI2MCIgeT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNGNUYwRTgiIGZvbnQtc2l6ZT0iMTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5MVVhFPC90ZXh0Pjwvc3ZnPg==";

const article = {
  publication: "Luxe Interiors + Design",
  publicationLogoUrl: placeholder,
  logoWidth: 120,
  logoHeight: 32,
  headline: "Inside Houston's Most Celebrated Custom Home",
  excerpt: "Fifty Seventh & 7th's Ashford residence sets a new benchmark for luxury living in the River Oaks corridor.",
  url: "https://luxesource.com",
};

export const Default = () => (
  <div style={{ maxWidth: 400, padding: 24, background: "#F5F0E8" }}>
    <PressCard article={article} />
  </div>
);

export const WithoutLink = () => (
  <div style={{ maxWidth: 400, padding: 24, background: "#F5F0E8" }}>
    <PressCard article={{ ...article, url: undefined }} />
  </div>
);

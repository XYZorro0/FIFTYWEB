import type { Metadata } from "next";
import { PortfolioContent } from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View the portfolio of Fifty Seventh & 7th — award-winning luxury homes in River Oaks, Memorial, and Greater Houston.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}

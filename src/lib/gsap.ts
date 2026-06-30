"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

CustomEase.create("luxury", "0.16, 1, 0.3, 1");
CustomEase.create("luxuryOut", "0.3, 1, 0.4, 1");

export { gsap, ScrollTrigger };

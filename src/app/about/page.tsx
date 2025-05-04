import React from "react";
import HeroSection from "../ui/about/hero-section";
import OurValues from "../ui/about/our-values";
import OurAchievements from "../ui/about/our-achievements";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <OurValues />
      <OurAchievements />
    </main>
  );
}

import React from "react";
import HeroSection from "../ui/about/hero-section";
import OurValues from "../ui/about/our-values";
import OurAchievements from "../ui/about/our-achievements";
import EstateinExperience from "../ui/about/estatein-experience";
import MeetTheTeam from "../ui/about/meet-the-team";

export default function Page() {
  return (
    <>
      <HeroSection />
      <OurValues />
      <OurAchievements />
      <EstateinExperience />
      <MeetTheTeam />
    </>
  );
}

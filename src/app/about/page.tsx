"use client";
import React from "react";
import HeroSection from "../ui/about/hero-section";
import OurValues from "../ui/about/our-values";
import OurAchievements from "../ui/about/our-achievements";
import EstateinExperience from "../ui/about/estatein-experience";
import MeetTheTeam from "../ui/about/meet-the-team";
import CardListing from "../ui/root-layout/Slider/card-listing";

import ClientValuesCard from "../ui/root-layout/Slider/Cards/our-clients-value-cards";
import { clientValues } from "@/mock/client-values";

export default function Page() {
  return (
    <>
      <HeroSection />
      <OurValues />
      <OurAchievements />
      <EstateinExperience />
      <MeetTheTeam />
      <CardListing
        title="Our Valued Clients"
        description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
        cards={clientValues}
        renderCard={(card) => <ClientValuesCard card={card} />}
        slidesPerView={{ mobile: 1, tablet: 2, desktop: 2 }}
        showViewAllButton={false}
      />
    </>
  );
}

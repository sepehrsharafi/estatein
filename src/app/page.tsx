"use client";
import { askedQuestionsCard } from "@/mock/asked-question";
import HeroSection from "./ui/home/hero-section";
import CardListing from "./ui/root-layout/Slider/card-listing";
import { cards } from "@/mock/featured-properties";
import { clientSaysCard } from "@/mock/what-our-clients-say";
import WhatOurClientsSaysCard from "./ui/root-layout/Slider/Cards/what-our-clients-say";
import PropertiesCard from "./ui/root-layout/Slider/Cards/properties";
import FrequentlyAskedQuestionsCard from "./ui/root-layout/Slider/Cards/asked-questions-cards";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <CardListing
        title="Featured Properties"
        description="Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein."
        cards={cards}
        renderCard={(card) => <PropertiesCard card={card} />}
      />
      <CardListing
        title="What Our Clients Say"
        viewText="View All Testimonials"
        description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
        cards={clientSaysCard}
        renderCard={(card) => <WhatOurClientsSaysCard card={card} />}
      />
      <CardListing
        title="Frequently Asked Questions"
        viewText="View All FAQs"
        description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
        cards={askedQuestionsCard}
        renderCard={(card) => <FrequentlyAskedQuestionsCard card={card} />}
      />
    </main>
  );
}

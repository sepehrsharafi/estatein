import HeroSection from "./ui/home/hero-section";
import CardListing from "./ui/root-layout/slider/CardListing";
import { cards } from "@/mock/featured-Properties";
import { clientSaysCard } from "@/mock/what-Our-Clients-Say";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <Slider
        options={OPTIONS}
        title="Featured Properties"
        description="Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein."
        cards={cards}
      />
      <CardListing
        title="What Our Clients Say"
        description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
        cards={clientSaysCard}
      />
      {/* <CardListing
        title="Frequently Asked Questions"
        description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
      /> */}
    </main>
  );
}

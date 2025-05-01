import Image from "next/image";
import HeroSection from "./ui/home/hero-section";
import CardListing from "./ui/root-layout/Card/CardListing";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <CardListing
        title="Featured Properties"
        description="Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein."
      />
      <CardListing
        title="What Our Clients Say"
        description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
      />
      <CardListing
        title="Frequently Asked Questions"
        description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
      />
    </main>
  );
}

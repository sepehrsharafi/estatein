import { title } from "process";
import HeroSection from "../ui/hero-section";
import InformationSection from "../ui/services/information-section";

export default function Page() {
  return (
    <main>
      <HeroSection
        title="Elevate Your Real Estate Experience"
        description="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
        items={[
          {
            text: "Find Your Dream Home",
            icon: "/icons/services-find-your-dream-home.png",
          },
          {
            text: "Unlock Property Value",
            icon: "/icons/services-unlock-property-value.png",
          },
          {
            text: "Effortless Property Management",
            icon: "/icons/services-effortless-property-managmenr.png",
          },
          {
            text: "Smart Investments, Informed Decisions",
            icon: "/icons/services-smart-investments.png",
          },
        ]}
      />
      <InformationSection
        title="Our Journey"
        description="Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary. Over the years, we've expanded
          our reach, forged valuable partnerships, and gained the trust of
          countless clients."
        infoItems={[
          {
            title: "Valuation Mastery",
            description:
              "Discover the true worth of your property with our expert valuation services.",
            imgSRC: "/icons/services-valuation-mastery.png",
          },
          {
            title: "Negotiation Wizardry",
            description:
              "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
            imgSRC: "/icons/services-negotiation-wizardry.png",
          },
          {
            title: "Strategic Marketing",
            description:
              "Selling a property requires more than just a listing; it demands a strategic marketing.",
            imgSRC: "/icons/services-strategic-marketing.png",
          },
          {
            title: "Closing Success",
            description:
              "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
            imgSRC: "/icons/services-closing-success.png",
          },
        ]}
        CTAItems={{
          title: "Unlock the Value of Your Property Today ",
          description:
            "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.",
        }}
      />

      <InformationSection
        title="Our Journey"
        description="Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary. Over the years, we've expanded
          our reach, forged valuable partnerships, and gained the trust of
          countless clients."
        infoItems={[
          {
            title: "Tenant Harmony",
            description:
              "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
            imgSRC: "/icons/services-tenant-harmony.png",
          },
          {
            title: "Maintenance Ease",
            description:
              "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
            imgSRC: "/icons/services-maintenance-ease.png",
          },
          {
            title: "Financial Peace of Mind",
            description:
              "Managing property finances can be complex. Our financial experts take care of rent collection",
            imgSRC: "/icons/services-financial-peace-of-mind.png",
          },
          {
            title: "Legal Guardian",
            description:
              "Stay compliant with property laws and regulations effortlessly.",
            imgSRC: "/icons/services-legal-guaridan.png",
          },
        ]}
        CTAItems={{
          title: "Experience Effortless Property Management",
          description:
            "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
        }}
      />
    </main>
  );
}

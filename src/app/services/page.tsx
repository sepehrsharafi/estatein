import HeroSection from "../ui/hero-section";

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
    </main>
  );
}

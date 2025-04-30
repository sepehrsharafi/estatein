import HeroSection from "../ui/hero-section";

export default function Page() {
  return (
    <main>
      <HeroSection
        title="Get in Touch with Estatein"
        description="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
        items={[
          {
            text: "info@estatein.com",
            icon: "/icons/contact-us-mail.png",
          },
          {
            text: "+1 (123) 456-7890",
            icon: "/icons/contact-us-phone.png",
          },
          {
            text: "Main Headquarters",
            icon: "/icons/contact-us-location.png",
          },
          {
            text: "Instagram Linkedin Facebook",
            icon: "/icons/contact-us-links.png",
          },
        ]}
      />
    </main>
  );
}

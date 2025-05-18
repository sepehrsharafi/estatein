import HeroSection from "./ui/home/hero-section";
import Slider from "./ui/root-layout/Slider/Slider";
import { EmblaOptionsType } from "embla-carousel";
const SLIDE_COUNT = 45;
import "./ui/root-layout/Slider/css/embla.css";
import PropertiesCard from "./ui/root-layout/Card/PropertiesCard";
const OPTIONS: EmblaOptionsType = { align: "start", direction: "rtl" };
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
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
      >
        {SLIDES.map((index) => (
          <div className="embla__slide" key={index}>
            <PropertiesCard />
          </div>
        ))}
      </Slider>
    </main>
  );
}

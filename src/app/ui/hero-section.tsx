import HeroSuggestions from "./herosection-suggestions";

export default function HeroSection({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: Array<{ text: string; icon: string }>;
}) {
  return (
    <section>
      <div className="py-12 px-3.5 xl:py-24 xl:px-20 2xl:py-36 2xl:px-40 bg-gradient-to-br from-neutral-800 to-neutral-800/0 flex flex-col gap-3">
        <h1 className="text-white text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
          {title}
        </h1>
        <h2 className="text-base xl:text-lg 2xl:text-xl font-medium text-neutral-400">
          {description}
        </h2>
      </div>
      <HeroSuggestions items={items} />
    </section>
  );
}

import Image from "next/image";

export default function HeroSuggestions({ items }: { items: [] }) {
  function SuggestionItem({ icon, text }: { icon: string; text: string }) {
    return (
      <article className="w-full bg-[#1A1A1A] flex flex-col gap-4 items-center py-7 px-[14px] relative border-[1px] border-[#262626] rounded-[10px] xl:rounded-xl text-white text-sm xl:text-[16px] 2xl:text-xl font-semibold">
        <svg
          className="w-5 h-5 2xl:w-6 2xl:h-6 absolute top-4 right-4"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.875 21.125L21.125 4.875M21.125 4.875L8.9375 4.875M21.125 4.875V17.0625"
            stroke="#4D4D4D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Image
          src={icon}
          width={150}
          height={150}
          alt="suggestion icon"
          className="w-12 h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20"
        />
        <p className="text-center">{text}</p>
      </article>
    );
  }
  return (
    <div className="bg-[#191919] p-2 xl:mx-5 2xl:mx-7 2xl:p-2.5 rounded-2xl xl:rounded-4xl my-5">
      <div className="bg-[#141414] p-3 xl:p-4 border-[1px] border-[#262626] rounded-xl xl:rounded-3xl grid grid-cols-2 xl:flex flex-row gap-3 xl:gap-4 justify-around">
        {items.map((item: { text: string; icon: string }, index) => (
          <SuggestionItem key={index} text={item.text} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

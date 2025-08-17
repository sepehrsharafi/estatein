import React from "react";

export default function Features() {
  function Feature({ text }: { text: string }) {
    return (
      <article className="flex flex-row items-center bg-gradient-to-l from-zinc-900/0 to-zinc-900 py-2.5 px-3 xl:py-3.5 xl:px-4 2xl:px-4.5 2xl:py-6 gap-2.5 border-l-[1.5px] border-[#703BF7]">
        <svg
          className="w-4.5 h-4.5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.9614 1.1962C11.1873 1.32216 11.2983 1.58596 11.2302 1.83551L9.73646 7.3125H15.1875C15.4115 7.3125 15.6141 7.44539 15.7034 7.65082C15.7927 7.85625 15.7516 8.09506 15.5987 8.25881L7.72373 16.6963C7.54724 16.8854 7.26453 16.9298 7.0386 16.8038C6.81268 16.6779 6.70177 16.4141 6.76983 16.1645L8.26356 10.6875H2.81251C2.58853 10.6875 2.38589 10.5546 2.29662 10.3492C2.20735 10.1438 2.24846 9.90495 2.40129 9.7412L10.2763 1.3037C10.4528 1.1146 10.7355 1.07024 10.9614 1.1962Z"
            fill="white"
          />
        </svg>
        <p className="text-neutral-400 text-sm xl:text-base 2xl:text-lg font-medium">
          {text}
        </p>
      </article>
    );
  }
  return (
    <section className="flex flex-col h-fit gap-5 xl:gap-10 2xl:gap-12 pb-5 w-full border-[1px] border-[#262626] rounded-[10px] 2xl:rounded-[12px] p-5 xl:p-10 2xl:p-12.5">
      <h2 className="text-white text-lg xl:text-xl 2xl:text-2xl font-semibold">
        Key Features and Amenities
      </h2>
      <div className="flex flex-col gap-4.5 xl:gap-5 2xl:gap-7.5">
        <Feature text="Expansive oceanfront terrace for outdoor entertaining" />
        <Feature text="Gourmet kitchen with top-of-the-line appliances" />
        <Feature text="Private beach access for morning strolls and sunset views" />
        <Feature text="Master suite with a spa-inspired bathroom and ocean-facing balcony" />
        <Feature text="Private garage and ample storage space" />
      </div>
    </section>
  );
}

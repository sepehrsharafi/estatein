import React from "react";

export default function EstateinExperience() {
  function InfoItem({
    items,
  }: {
    items: Array<{ title: string; description: string }>;
  }) {
    return (
      <>
        {items.map((item, index) => (
          <article key={index} className="flex flex-col text-white h-full">
            <span className="font-medium text-base 2xl:text-xl border-l-[1px] xl:border-l-[2px] border-[#703BF7] py-3 px-4">
              Step 0{index + 1}
            </span>
            <div className="h-full self-stretch p-7 bg-gradient-to-br from-violet-500/25 to-violet-600/0 rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] border-[1px] xl:border-[2px] border-violet-500/70 inline-flex flex-col justify-start items-start gap-3.5">
              <div className="self-stretch justify-start text-white text-lg xl:text-xl 2xl:text-2xl font-semibold font-['Urbanist'] leading-relaxed">
                {item.title}
              </div>
              <div className="self-stretch justify-start text-neutral-400 text-sm xl:text-base 2xl:text-lg font-medium font-['Urbanist'] leading-tight">
                {item.description}
              </div>
            </div>
          </article>
        ))}
      </>
    );
  }
  return (
    <section className="flex flex-col  gap-5 mx-4 xl:mx-20 2xl:mx-40 my-6 xl:my-20">
      <div className="flex flex-col gap-2 mb-4 xl:mb-10 2xl:mb-12">
        <svg
          className="w-16 h-7 2xl:w-20 2xl:h-10"
          viewBox="0 0 46 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_146_11592)">
            <path
              d="M10 20.0111C15.5228 20.0111 20 15.5339 20 10.0111C20 4.48821 15.5228 0.0111084 10 0.0111084C4.47715 0.0111084 0 4.48821 0 10.0111C0 15.5339 4.47715 20.0111 10 20.0111Z"
              fill="#666666"
            />
            <path
              d="M0 30C5.52285 30 10 25.5228 10 20C10 14.4772 5.52285 10 0 10C-5.52285 10 -10 14.4772 -10 20C-10 25.5228 -5.52285 30 0 30Z"
              fill="#141414"
            />
            <path
              d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z"
              fill="#141414"
            />
            <path
              d="M0 10C5.52285 10 10 5.52285 10 0C10 -5.52285 5.52285 -10 0 -10C-5.52285 -10 -10 -5.52285 -10 0C-10 5.52285 -5.52285 10 0 10Z"
              fill="#141414"
            />
            <path
              d="M20 10C25.5228 10 30 5.52285 30 0C30 -5.52285 25.5228 -10 20 -10C14.4772 -10 10 -5.52285 10 0C10 5.52285 14.4772 10 20 10Z"
              fill="#141414"
            />
          </g>
          <g clipPath="url(#clip1_146_11592)">
            <path
              d="M30 16.0066C33.3137 16.0066 36 13.3203 36 10.0066C36 6.69291 33.3137 4.00665 30 4.00665C26.6863 4.00665 24 6.69291 24 10.0066C24 13.3203 26.6863 16.0066 30 16.0066Z"
              fill="#333333"
            />
            <path
              d="M24 22C27.3137 22 30 19.3137 30 16C30 12.6863 27.3137 10 24 10C20.6863 10 18 12.6863 18 16C18 19.3137 20.6863 22 24 22Z"
              fill="#141414"
            />
            <path
              d="M36 22C39.3137 22 42 19.3137 42 16C42 12.6863 39.3137 10 36 10C32.6863 10 30 12.6863 30 16C30 19.3137 32.6863 22 36 22Z"
              fill="#141414"
            />
            <path
              d="M24 10C27.3137 10 30 7.31371 30 4C30 0.686292 27.3137 -2 24 -2C20.6863 -2 18 0.686292 18 4C18 7.31371 20.6863 10 24 10Z"
              fill="#141414"
            />
            <path
              d="M36 10C39.3137 10 42 7.31371 42 4C42 0.686292 39.3137 -2 36 -2C32.6863 -2 30 0.686292 30 4C30 7.31371 32.6863 10 36 10Z"
              fill="#141414"
            />
          </g>
          <g clipPath="url(#clip2_146_11592)">
            <path
              d="M42.8 12.8031C44.3464 12.8031 45.6 11.5495 45.6 10.0031C45.6 8.45671 44.3464 7.20312 42.8 7.20312C41.2536 7.20312 40 8.45671 40 10.0031C40 11.5495 41.2536 12.8031 42.8 12.8031Z"
              fill="#333333"
            />
            <path
              d="M39.9992 15.6C41.5456 15.6 42.7992 14.3464 42.7992 12.8C42.7992 11.2536 41.5456 10 39.9992 10C38.4528 10 37.1992 11.2536 37.1992 12.8C37.1992 14.3464 38.4528 15.6 39.9992 15.6Z"
              fill="#141414"
            />
            <path
              d="M45.5988 15.6C47.1452 15.6 48.3988 14.3464 48.3988 12.8C48.3988 11.2536 47.1452 10 45.5988 10C44.0524 10 42.7988 11.2536 42.7988 12.8C42.7988 14.3464 44.0524 15.6 45.5988 15.6Z"
              fill="#141414"
            />
            <path
              d="M39.9992 10C41.5456 10 42.7992 8.74642 42.7992 7.20002C42.7992 5.65363 41.5456 4.40002 39.9992 4.40002C38.4528 4.40002 37.1992 5.65363 37.1992 7.20002C37.1992 8.74642 38.4528 10 39.9992 10Z"
              fill="#141414"
            />
            <path
              d="M45.5988 10C47.1452 10 48.3988 8.74642 48.3988 7.20002C48.3988 5.65363 47.1452 4.40002 45.5988 4.40002C44.0524 4.40002 42.7988 5.65363 42.7988 7.20002C42.7988 8.74642 44.0524 10 45.5988 10Z"
              fill="#141414"
            />
          </g>
          <defs>
            <clipPath id="clip0_146_11592">
              <rect width="20" height="20" fill="white" />
            </clipPath>
            <clipPath id="clip1_146_11592">
              <rect
                width="12"
                height="12"
                fill="white"
                transform="translate(24 4)"
              />
            </clipPath>
            <clipPath id="clip2_146_11592">
              <rect
                width="5.6"
                height="5.6"
                fill="white"
                transform="translate(40 7.20001)"
              />
            </clipPath>
          </defs>
        </svg>
        <h1 className="text-white text-3xl font-semibold xl:text-4xl 2xl:text-5xl">
          Navigating the Estatein Experience
        </h1>
        <h2 className="text-neutral-400 text-sm xl:text-base 2xl:text-lg font-medium">
          At Estatein, we've designed a straightforward process to help you find
          and purchase your dream property with ease. Here's a step-by-step
          guide to how it all works.
        </h2>
      </div>
      <div className="grid xl:grid-cols-3 gap-6 h-fit">
        <InfoItem
          items={[
            {
              title: "Discover a World of Possibilities",
              description:
                "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
            },
            {
              title: "Narrowing Down Your Choices",
              description:
                "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
            },
            {
              title: "Personalized Guidance",
              description:
                "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
            },
            {
              title: "See It for Yourself",
              description:
                "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
            },
            {
              title: "Making Informed Decisions",
              description:
                "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
            },
            {
              title: "Getting the Best Deal",
              description:
                "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
            },
          ]}
        />
      </div>
    </section>
  );
}

import Image from "next/image";

export default function InformationSection() {
  function InfoItem({
    imgSRC,
    title,
    description,
  }: {
    imgSRC: string;
    title: string;
    description: string;
  }) {
    return (
      <article className="flex flex-col gap-4 p-6 border-[1px] border-[#262626] rounded-[10px]">
        <div className="flex flex-row items-center gap-3">
          <Image
            src={imgSRC}
            width={100}
            height={100}
            alt="image"
            className="h-12 w-12"
          />
          <h3 className="text-white font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-neutral-400 font-medium text-base">{description}</p>
      </article>
    );
  }
  return (
    <section className="mx-4">
      <div className="flex flex-col gap-2">
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
          Our Journey
        </h1>
        <h2 className="text-neutral-400 text-sm xl:text-base 2xl:text-lg font-medium mb-4 xl:mb-12">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary. Over the years, we've expanded
          our reach, forged valuable partnerships, and gained the trust of
          countless clients.
        </h2>
      </div>
      <div>
        <InfoItem
          title="Valuation Mastery"
          description="Discover the true worth of your property with our expert valuation services."
          imgSRC="/icons/services-valuation-mastery.png"
        />
        <InfoItem
          title="Negotiation Wizardry"
          description="Negotiating the best deal is an art, and our negotiation experts are masters of it."
          imgSRC="/icons/services-negotiation-wizardry.png"
        />
        <InfoItem
          title="Strategic Marketing"
          description="Selling a property requires more than just a listing; it demands a strategic marketing."
          imgSRC="/icons/services-strategic-marketing.png"
        />
        <InfoItem
          title="Closing Success"
          description="A successful sale is not complete until the closing. We guide you through the intricate closing process."
          imgSRC="/icons/services-closing-success.png"
        />
      </div>
    </section>
  );
}

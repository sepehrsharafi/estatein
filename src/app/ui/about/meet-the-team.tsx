import Image from "next/image";
import React from "react";

export default function MeetTheTeam() {
  function TeamItem({
    members,
  }: {
    members: Array<{ imgSRC: string; name: string; role: string }>;
  }) {
    return (
      <div className="flex flex-col lg:flex-row gap-5 xl:gap-7 2xl:gap-9">
        {members.map((member, index) => (
          <article
            key={index}
            className="p-5 border-[1px] border-[#262626] rounded-2xl"
          >
            <div className="relative">
              <Image
                src={member.imgSRC}
                width={500}
                height={500}
                alt="image"
                className="w-full rounded-2xl aspect-square object-cover"
              />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 h-fit w-fit rounded-full bg-[#703BF7] px-4 py-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.2918 18.1251C13.8371 18.1251 17.9652 11.8724 17.9652 6.45167C17.9652 6.27589 17.9613 6.0962 17.9535 5.92042C18.7566 5.33967 19.4496 4.62033 20 3.7962C19.2521 4.12896 18.458 4.34627 17.6449 4.44074C18.5011 3.92755 19.1421 3.12135 19.4492 2.17159C18.6438 2.64892 17.763 2.98563 16.8445 3.1673C16.2257 2.50976 15.4075 2.07439 14.5164 1.9285C13.6253 1.78261 12.711 1.93433 11.9148 2.3602C11.1186 2.78607 10.4848 3.46238 10.1115 4.28455C9.73825 5.10672 9.64619 6.02897 9.84961 6.9087C8.21874 6.82686 6.62328 6.40321 5.16665 5.6652C3.71002 4.9272 2.42474 3.89132 1.39414 2.62472C0.870333 3.52782 0.710047 4.59649 0.945859 5.61353C1.18167 6.63057 1.79589 7.51966 2.66367 8.10011C2.01219 8.07943 1.37498 7.90402 0.804688 7.58839V7.63917C0.804104 8.58691 1.13175 9.50561 1.73192 10.2391C2.3321 10.9726 3.16777 11.4756 4.09687 11.6626C3.49338 11.8277 2.85999 11.8518 2.2457 11.7329C2.50788 12.548 3.01798 13.2609 3.70481 13.7721C4.39164 14.2833 5.22093 14.5673 6.07695 14.5845C4.62369 15.726 2.82848 16.3452 0.980469 16.3423C0.652739 16.3418 0.325333 16.3217 0 16.2821C1.87738 17.4866 4.06128 18.1263 6.2918 18.1251Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col w-full items-center mt-9 mb-5">
              <span className="font-semibold text-lg xl:text-xl 2xl:text-2xl text-white">
                {member.name}
              </span>
              <span className="font-medium text-base 2xl:text-lg text-neutral-400">
                {member.role}
              </span>
            </div>
            <div className="flex flex-row p-3 border-[1px] border-[#262626] rounded-full bg-[#1A1A1A]">
              <input
                className="ml-3 w-full font-medium text-base xl:text-lg 2xl:text-xl  text-white !outline-none"
                placeholder="Say Hello 👋"
                type="text"
                name=""
                id=""
              />
              <button className="bg-[#703BF7] rounded-full p-3.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8555 2.14866C17.4389 1.72283 16.8222 1.56533 16.2472 1.732L2.83887 5.60616C2.2322 5.7745 1.8022 6.25533 1.68637 6.86533C1.56803 7.487 1.98137 8.277 2.52137 8.607L6.71387 11.167C7.14387 11.4303 7.69887 11.3645 8.0547 11.0078L12.8555 6.207C13.0972 5.95616 13.4972 5.95616 13.7389 6.207C13.9805 6.44783 13.9805 6.84033 13.7389 7.09033L8.9297 11.8912C8.57303 12.2478 8.50637 12.8012 8.76887 13.232L11.3305 17.4403C11.6305 17.9395 12.1472 18.2237 12.7139 18.2237C12.7805 18.2237 12.8555 18.2237 12.9222 18.2145C13.5722 18.132 14.0889 17.6895 14.2805 17.0645L18.2555 3.757C18.4305 3.19033 18.2722 2.57366 17.8555 2.14866Z"
                    fill="white"
                  />
                  <path
                    opacity="0.4"
                    d="M7.87502 15.952C8.11835 16.1961 8.11835 16.592 7.87502 16.8361L6.73669 17.9736C6.61502 18.0961 6.45502 18.157 6.29502 18.157C6.13502 18.157 5.97502 18.0961 5.85335 17.9736C5.60919 17.7295 5.60919 17.3345 5.85335 17.0903L6.99085 15.952C7.23502 15.7086 7.63085 15.7086 7.87502 15.952ZM7.22194 12.7953C7.46527 13.0395 7.46527 13.4353 7.22194 13.6795L6.0836 14.817C5.96194 14.9395 5.80194 15.0003 5.64194 15.0003C5.48194 15.0003 5.32194 14.9395 5.20027 14.817C4.9561 14.5728 4.9561 14.1778 5.20027 13.9336L6.33777 12.7953C6.58194 12.552 6.97777 12.552 7.22194 12.7953ZM4.0876 11.8016C4.33094 12.0458 4.33094 12.4416 4.0876 12.6858L2.94927 13.8233C2.8276 13.9458 2.6676 14.0066 2.5076 14.0066C2.3476 14.0066 2.1876 13.9458 2.06594 13.8233C1.82177 13.5791 1.82177 13.1841 2.06594 12.94L3.20344 11.8016C3.4476 11.5583 3.84344 11.5583 4.0876 11.8016Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
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
          Meet the Estatein Team
        </h1>
        <h2 className="text-neutral-400 text-sm xl:text-base 2xl:text-lg font-medium">
          At Estatein, our success is driven by the dedication and expertise of
          our team. Get to know the people behind our mission to make your real
          estate dreams a reality.
        </h2>
      </div>

      <TeamItem
        members={[
          {
            imgSRC: "/images/about-us-team-member-1.png",
            name: "Max Mitchell",
            role: "founder",
          },
          {
            imgSRC: "/images/about-us-team-member-2.png",
            name: "Sarah Johnson",
            role: "Chief Real Estate Officer",
          },
          {
            imgSRC: "/images/about-us-team-member-3.png",
            name: "David Brown",
            role: "Head of Property Management",
          },
          {
            imgSRC: "/images/about-us-team-member-4.png",
            name: "Michael Turner",
            role: "Legal Counsel",
          },
        ]}
      />
    </section>
  );
}

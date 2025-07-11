import { ClientSaysCard } from "@/mock/what-Our-Clients-Say";
const WhatOurClientsSaysCard = ({ card }: { card: ClientSaysCard }) => {
  return (
    <article className="flex flex-col gap-4 p-6 rounded-xl bg-[#141414]  border-[#262626] border-[1px] hover:bg-[#292929] text-white w-full">
      <section className="flex flex-row gap-4">
        {[...Array(card.stars)].map((_, i) => (
          <div
            key={i}
            className="p-2.5 rounded-full bg-[#292929] border-[#262626] border-[1px]"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1586 1.30996C10.5522 0.697195 11.4478 0.697195 11.8414 1.30996L14.8804 6.04141C15.0158 6.25225 15.2255 6.40456 15.4678 6.4682L20.9068 7.89639C21.6112 8.08135 21.888 8.93313 21.4268 9.49681L17.8661 13.8492C17.7074 14.0431 17.6273 14.2896 17.6417 14.5397L17.9641 20.1539C18.0059 20.8809 17.2813 21.4074 16.6028 21.143L11.363 19.1014C11.1296 19.0105 10.8704 19.0105 10.637 19.1014L5.39725 21.143C4.71867 21.4074 3.99409 20.8809 4.03585 20.1539L4.3583 14.5397C4.37267 14.2896 4.2926 14.0431 4.13393 13.8492L0.573162 9.49681C0.112013 8.93313 0.388775 8.08135 1.09317 7.89639L6.53216 6.4682C6.77452 6.40456 6.98416 6.25225 7.11958 6.04141L10.1586 1.30996Z"
                fill="#FFE600"
              />
            </svg>
          </div>
        ))}
      </section>
    </article>
  );
};
export default WhatOurClientsSaysCard;

import Image from "next/image";
import Link from "next/link";
import Badge from "../badge";
import Button from "../../button";
import { AskedQuestionsCard } from "@/mock/asked-question";

const FrequentlyAskedQuestionsCard = ({
  card,
}: {
  card: AskedQuestionsCard;
}) => {
  return (
    <article className="flex flex-col gap-5 p-6 justify-between rounded-xl bg-[#141414]  border-[#262626] border-[1px] hover:bg-[#292929] text-white w-full md:h-[262px]">
      <h3 className="text-[18px] font-semibold md:text-[20px] xl:txt-[24px] ">
        {card.title}
      </h3>
      <p className="text-[14px] text-[#999999] md:text-4">{card.description}</p>

      <section className="flex flex-row justify-between items-center mt-4 w-full md:w-[108px] xl:w-[134px] ">
        <Button variant="secondary" className=" text-nowrap w-full">
          Read more
        </Button>
      </section>
    </article>
  );
};
export default FrequentlyAskedQuestionsCard;

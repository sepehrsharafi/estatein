import { ClientValues } from "@/mock/client-values";
import Button from "../../button";
import Image from "next/image";

const ClientValuesCard = ({ card }: { card: ClientValues }) => {
  return (
    <article className="flex flex-col p-6 xl:p-12 h-[440px] justify-between rounded-xl bg-[#141414]  border-[#262626] border-[1px] text-white w-full md:h-[415px] xl:h-[460px]">
      <section className="flex flex-col md:flex-row justify-between gap-5">
        <div className="flex-col">
          <span className="text-[14px] text-[#999999] ">
            Since {card.since}
          </span>
          <h3 className="text-[20px]  font-semibold md:text-[24px] xl:txt-[30px] ">
            {card.title}
          </h3>
        </div>

        <Button
          variant="secondary"
          className=" text-nowrap w-full md:w-fit text-[14px]"
        >
          Visit Website
        </Button>
      </section>

      <section className="flex flex-row justify-between mt-4 w-full ">
        <div className="flex flex-col w-full pr-2">
          <div className="flex flex-row">
            <Image
              src={"/icons/domain.png"}
              alt="domain-icon"
              width={18}
              height={18}
            />
            <span className="text-[12px] text-[#999999] xl:text-[18px]">
              Domain
            </span>
          </div>
          <p className="text-[14px] md:text-[16px] font-medium xl:text-[20px]">
            {card.domain}
          </p>
        </div>
        <div className="flex flex-col border-l-2 border-[#262626] pl-2 w-full">
          <div className="flex flex-row ">
            <Image
              src={"/icons/category.png"}
              alt="category-icon"
              width={18}
              height={18}
            />
            <span className="text-[12px] text-[#999999] xl:text-[18px]">
              Category
            </span>
          </div>
          <p className="text-[14px] font-medium  md:text-[16px] xl:text-[20px]">
            {card.category}
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-between mt-4 w-full  p-5 rounded-xl gap-2  border-[#262626] border-[1px]">
        <span className="text-[14px]  md:text-[16px] text-[#999999] xl:text-[18px] ">
          What They Said 🤗
        </span>
        <p className="text-[14px]  md:text-[16px] xl:text-[18px]">
          Estatein's expertise in finding the perfect office space for our
          expanding operations was invaluable. They truly understand our
          business needs.
        </p>
      </section>
    </article>
  );
};
export default ClientValuesCard;

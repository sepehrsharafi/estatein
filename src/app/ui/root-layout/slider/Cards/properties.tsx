import Image from "next/image";
import Link from "next/link";
import Badge from "../badge";
import Button from "../../Button";
import { Card } from "@/mock/featured-properties";

const PropertiesCard = ({ card }: { card: Card }) => {
  return (
    <article className="flex flex-col gap-4 p-6 rounded-xl bg-[#141414]  border-[#262626] border-[1px] hover:bg-[#292929] text-white w-full">
      <section className=" relative w-full h-[210px] xl:h-[255px]">
        <Image
          src={card.image}
          alt="featured"
          style={{ objectFit: "cover" }}
          fill
          className="rounded-t-[8px] object-cover"
        />
      </section>
      <section>
        <h3 className="text-[18px] font-semibold">Rustic Retreat Cottage</h3>
        <p className="text-[14px] text-[#999999]">
          {card.description}
          <Link className="text-white underline" href="#">
            Read More
          </Link>
        </p>
      </section>{" "}
      <section className="flex flex-row flex-wrap justify-start items-center mt-4 gap-2">
        {card.badges.map((badge, index) => {
          return (
            <Badge key={index}>
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src={`/icons/${badge.key}.svg`}
                  alt={`${badge.key}`}
                  width={16}
                  height={16}
                  style={{ objectFit: "contain" }}
                />
                <p className="text-[14px]">
                  {badge.val > 0
                    ? ` ${badge.val}-${badge.key}`
                    : ` ${badge.key}`}
                </p>
              </div>
            </Badge>
          );
        })}
      </section>
      <section className="flex flex-row justify-between items-center mt-4">
        <div>
          <p className="text-sm text-[#999999] ">Price:</p>
          <p className="text-lg font-semibold ">{card.price}</p>
        </div>
        <Button variant="primary" className=" text-nowrap">
          View Property Details
        </Button>
      </section>
    </article>
  );
};
export default PropertiesCard;

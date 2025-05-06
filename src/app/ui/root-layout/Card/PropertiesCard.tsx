import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";
import Button from "../Button";

const PropertiesCard = () => {
  return (
    <article className="flex flex-col gap-4 p-6 rounded-xl bg-[#141414]  border-[#262626] border-[1px] hover:bg-[#292929] text-white w-full">
      <section className=" relative w-full h-[210px] xl:h-[255px]">
        <Image
          src={"/images/image.png"}
          alt="featured"
          style={{ objectFit: "cover" }}
          fill
          className="rounded-t-[8px] object-cover"
        />
      </section>
      <section>
        <h3 className="text-[18px] font-semibold">Rustic Retreat Cottage</h3>
        <p className="text-[14px] text-[#999999]">
          An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...
          <Link className="text-white underline" href="#">
            Read More
          </Link>
        </p>
      </section>{" "}
      <section className="flex flex-row flex-wrap justify-start items-center mt-4">
        <Badge>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src={"/icons/bedroom.svg"}
              alt="bedroom"
              width={16}
              height={16}
              style={{ objectFit: "contain" }}
            />
            <p className="text-[14px]">4 - Bedroom</p>
          </div>
        </Badge>
        <Badge>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src={"/icons/bathroom.svg"}
              alt="3-bathroom"
              width={16}
              height={16}
              style={{ objectFit: "contain" }}
            />
            <p className="text-[14px]">3-Bathroom</p>
          </div>
        </Badge>
        <Badge>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src={"/icons/villa.svg"}
              alt="villa"
              width={16}
              height={16}
              style={{ objectFit: "contain" }}
            />
            <p className="text-[14px]">villa</p>
          </div>
        </Badge>
      </section>
      <section className="flex flex-row justify-between items-center mt-4">
        <div>
          <p className="text-sm text-[#999999] ">Price</p>
          <p className="text-lg font-semibold ">$500,000</p>
        </div>
        <Button variant="primary">View Property Details</Button>
      </section>
    </article>
  );
};
export default PropertiesCard;

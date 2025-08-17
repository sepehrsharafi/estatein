import Image from "next/image";

export default function ImageGallery() {
  return (
    <section className="flex flex-col xl:flex-col-reverse gap-5 p-5 rounded-xl border-[1px] border-[#262626] bg-[#1A1A1A]">
      <div className="flex flex-row gap-7">
        <Image
          src={"/images/contact-us-image-4.png"}
          width={100}
          height={100}
          alt="image"
          className="w-full"
        />
        <Image
          src={"/images/contact-us-image-5.png"}
          width={100}
          height={100}
          alt="image"
          className="w-full hidden xl:block"
        />
      </div>
      <div className="h-16 xl:h-24 2xl:h-32 bg-[#141414] rounded-xl border-[1px] border-[#262626] flex flex-row w-full overflow-auto p-2.5 2xl:p-5 gap-2.5">
        <Image
          src={"/images/contact-us-image-4.png"}
          width={100}
          height={100}
          alt="image"
          className="w-fit"
        />
        <Image
          src={"/images/contact-us-image-4.png"}
          width={100}
          height={100}
          alt="image"
          className="w-fit"
        />
        <Image
          src={"/images/contact-us-image-4.png"}
          width={100}
          height={100}
          alt="image"
          className="w-fit"
        />
        <Image
          src={"/images/contact-us-image-4.png"}
          width={100}
          height={100}
          alt="image"
          className="w-fit"
        />
      </div>
    </section>
  );
}

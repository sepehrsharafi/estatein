import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col xl:flex-row items-start px-4 xl:px-20 w-full gap-14 xl:gap-20">
      <section className="py-12 px-4  w-full flex flex-col gap-5 xl:w-[326px]">
        <div className="w-[113px] h-[34px] relative ">
          <Image
            src={"/images/logo/logo.png"}
            alt="logo"
            fill
            objectFit="contain"
          />
        </div>

        <div className="w-full flex flex-row gap-1.5 justify-between border-2 border-[#262626] rounded-[8px] px-5 py-3.5">
          <Image src={"/icons/mail.svg"} alt="mail" width={20} height={20} />
          <input
            placeholder="Enter your email"
            className="text-[#999999] w-full xl:w-[305px]"
          />
          <Image src={"/icons/send.svg"} alt="send" width={24} height={24} />
        </div>
      </section>
      <section className="flex flex-row flex-wrap xl:gap-12 xl:flex-nowrap">
        <div className="flex flex-col gap-2 w-[160px] py-[20px]">
          <p className="text-[#999999]">Home</p>{" "}
          <div className="flex flex-col gap-2">
            <p className="text-[#FFFFFF]">Hero section</p>
            <p className="text-[#FFFFFF]">Features</p>
            <p className="text-[#FFFFFF]">Properties</p>
            <p className="text-[#FFFFFF]">Testimonials</p>
            <p className="text-[#FFFFFF]">FAQ’s</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[160px] py-[20px]">
          <p className="text-[#999999]">About Us</p>{" "}
          <div className="flex flex-col gap-2">
            <p className="text-[#FFFFFF]">Our Story</p>
            <p className="text-[#FFFFFF]">Our Works</p>
            <p className="text-[#FFFFFF]">How It Works</p>
            <p className="text-[#FFFFFF]">Our Team</p>
            <p className="text-[#FFFFFF]">Our Clients</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[160px] py-[20px]">
          <p className="text-[#999999]">Properties</p>{" "}
          <div className="flex flex-col gap-2">
            <p className="text-[#FFFFFF]">Portfolio</p>
            <p className="text-[#FFFFFF]">Categories</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[160px] py-[20px]">
          <p className="text-[#999999]">Services</p>{" "}
          <div className="flex flex-col gap-2">
            <p className="text-[#FFFFFF]">Valuation Mastery</p>
            <p className="text-[#FFFFFF]">Strategic Marketing</p>
            <p className="text-[#FFFFFF]">Negotiation Wizardry</p>
            <p className="text-[#FFFFFF]">Closing Success</p>
            <p className="text-[#FFFFFF]">Property Management</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[160px] py-[20px]">
          <p className="text-[#999999]">Contact Us</p>{" "}
          <div className="flex flex-col gap-2">
            <p className="text-[#FFFFFF]">Contact Form</p>
            <p className="text-[#FFFFFF]">Our Offices</p>
          </div>
        </div>
      </section>
      <section className="bg-[#1A1A1A] "></section>
    </footer>
  );
};
export default Footer;

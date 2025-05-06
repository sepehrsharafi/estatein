import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col md:flex-row  items-start px-4 xl:px-20 w-full gap-14">
        <section className="py-12 px-4  w-full flex flex-col gap-5 xl:w-[326px]">
          <div className="w-[113px] h-[34px] relative ">
            <Image
              src={"/images/logo/logo.png"}
              alt="logo"
              fill
              style={{ objectFit: "contain" }}
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
        <section className="flex flex-row flex-wrap md:gap-10 w-full justify-between  2xl:gap-20 xl:flex-nowrap gap-4">
          <div className="flex flex-col gap-2 w-[160px] xl:border-none  border-r-2 border-b-2  border-[#262626] xl:w-fit xl:text-nowrap py-[20px]">
            <p className="text-[#999999]">Home</p>{" "}
            <div className="flex flex-col gap-2 text-white ">
              <p>Hero section</p>
              <p>Features</p>
              <p>Properties</p>
              <p>Testimonials</p>
              <p>FAQ’s</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[160px] xl:border-none border-b-2  border-[#262626] xl:w-fit xl:text-nowrap py-[20px]">
            <p className="text-[#999999]">About Us</p>{" "}
            <div className="flex flex-col gap-2 text-white ">
              <p>Our Story</p>
              <p>Our Works</p>
              <p>How It Works</p>
              <p>Our Team</p>
              <p>Our Clients</p>
            </div>
          </div>
          <div className="flex flex-col xl:hidden h-fit gap-2 w-[160px] xl:border-none  border-r-2  border-[#262626] xl:w-fit xl:text-nowrap py-[20px]">
            <div className="flex flex-col h-fit gap-2 w-[160px] border-b-2 border-none  border-[#262626] xl:w-fit xl:text-nowrap py-[20px]">
              <p className="text-[#999999]">Properties</p>{" "}
              <div className="flex flex-col gap-2 text-white ">
                <p className="text-[#FFFFFF]">Portfolio</p>
                <p className="text-[#FFFFFF]">Categories</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-[160px] border-b-2 border-none  border-[#262626] xl:w-fit xl:text-nowrap py-[20px]">
              <p className="text-[#999999]">Contact Us</p>{" "}
              <div className="flex flex-col gap-2 text-white ">
                <p className="text-[#FFFFFF]">Contact Form</p>
                <p className="text-[#FFFFFF]">Our Offices</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-[160px] border-b-2 xl:border-none  border-[#262626] xl:w-fit xl:text-nowrap py-[20px]">
            <p className="text-[#999999]">Services</p>{" "}
            <div className="flex flex-col gap-2 text-white ">
              <p className="text-[#FFFFFF]">Valuation Mastery</p>
              <p className="text-[#FFFFFF]">Strategic Marketing</p>
              <p className="text-[#FFFFFF]">Negotiation Wizardry</p>
              <p className="text-[#FFFFFF]">Closing Success</p>
              <p className="text-[#FFFFFF]">Property Management</p>
            </div>
          </div>
          <div className="hidden xl:flex flex-col h-fit gap-2 w-[160px] border-b-2 border-none  border-[#262626] xl:w-fit xl:text-nowrap py-[20px]">
            <p className="text-[#999999]">Properties</p>{" "}
            <div className="flex flex-col gap-2 text-white ">
              <p className="text-[#FFFFFF]">Portfolio</p>
              <p className="text-[#FFFFFF]">Categories</p>
            </div>
          </div>
          <div className="hidden xl:flex flex-col gap-2 w-[160px] border-b-2 border-none  border-[#262626] xl:w-fit xl:text-nowrap py-[20px]">
            <p className="text-[#999999]">Contact Us</p>{" "}
            <div className="flex flex-col gap-2 text-white ">
              <p className="text-[#FFFFFF]">Contact Form</p>
              <p className="text-[#FFFFFF]">Our Offices</p>
            </div>
          </div>
        </section>
      </footer>
      <footer className="bg-[#1A1A1A] w-full flex gap-5 flex-col-reverse md:flex-row px-4 md:px-20 py-3 justify-between items-center text-white">
        <div className="flex flex-col text-center md:flex-row gap-5">
          <p className="text-nowrap">@2023 Estatein. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="flex flex-row gap-2">
          <div className="md:p-2.5 p-5 bg-[#141414] rounded-full">
            <Link href={""}>
              <Image
                src={"/icons/facebook.svg"}
                alt="facebook"
                width={20}
                height={20}
              />
            </Link>
          </div>

          <div className="md:p-2.5 p-5 bg-[#141414] rounded-full">
            <Link href={""}>
              <Image
                src={"/icons/linkedin.svg"}
                alt="linkedin"
                width={20}
                height={20}
              />
            </Link>
          </div>

          <div className="md:p-2.5 p-5 bg-[#141414] rounded-full">
            <Link href={""}>
              <Image
                src={"/icons/tweeter.svg"}
                alt="tweeter"
                width={20}
                height={20}
              />
            </Link>
          </div>

          <div className="md:p-2.5 p-5 bg-[#141414] rounded-full">
            <Link href={""}>
              <Image
                src={"/icons/youtube.svg"}
                alt="youtube"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

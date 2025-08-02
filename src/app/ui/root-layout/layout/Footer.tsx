import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const Footer = () => {
  return (
    <footer>
      <section className="container mx-auto px-4 relative flex flex-col md:flex-row mt-12  py-12 md:py-16 md:px-20 overflow-hidden  md:justify-between">
        <div className="flex flex-col md:max-w-[980px] ">
          <h3 className=" text-[28px] md:text-[38px] 2xl:text-[48px] text-white  z-10">
            Start Your Real Estate Journey Today
          </h3>
          <p className="text-[#999] text-sm md:text-[16px] 2xl:text-[18px] mt-1.5 z-10">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>

        <Button variant="primary" className="mt-8 z-10 h-fit">
          Explore Properties
        </Button>
        <Image
          src={"/images/abstract-down.png"}
          width={398}
          className="absolute z-0 top-[220px] left-[22px] md:hidden"
          height={217}
          alt="abstract"
        />
        <Image
          src={"/images/abstract-up.png"}
          width={284}
          className="absolute z-0 bottom-[0px] left-[0px] md:hidden"
          height={522}
          alt="abstract"
        />
        <Image
          src={"/images/abstract-down.png"}
          width={570}
          className="absolute z-0  right-[0px]  bottom-[0px] hidden md:block"
          height={310}
          alt="abstract"
        />
        <Image
          src={"/images/abstract-down.png"}
          width={570}
          className="absolute z-0  left-[0px]  bottom-[0px] hidden md:block -rotate-y-180"
          height={310}
          alt="abstract"
        />
      </section>
      <section className="container mx-auto flex flex-col md:flex-row  items-start px-4 xl:px-20 w-full gap-14">
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
            <Link href={"/"} className="text-[#999999]">
              Home
            </Link>
            <div className="flex flex-col gap-2 text-white ">
              <Link href={""}>Hero section</Link>
              <Link href={""}>Features</Link>
              <Link href={""}>Properties</Link>
              <Link href={""}>Testimonials</Link>
              <Link href={""}>FAQ’s</Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[160px] xl:border-none border-b-2  border-[#262626] xl:w-fit xl:text-nowrap py-[20px]">
            <Link href={"/about"} className="text-[#999999]">
              About Us
            </Link>{" "}
            <div className="flex flex-col gap-2 text-white ">
              <Link href={""}>Our Story</Link>
              <Link href={""}>Our Works</Link>
              <Link href={""}>How It Works</Link>
              <Link href={""}>Our Team</Link>
              <Link href={""}>Our Clients</Link>
            </div>
          </div>
          <div className="flex flex-col xl:hidden h-fit gap-2 w-[160px] xl:border-none  border-r-2  border-[#262626] xl:w-fit xl:text-nowrap py-[20px]">
            <div className="flex flex-col h-fit gap-2 w-[160px] border-b-2 border-none  border-[#262626] xl:w-fit xl:text-nowrap py-[20px]">
              <Link href={"/properties"} className="text-[#999999]">
                Properties
              </Link>{" "}
              <div className="flex flex-col gap-2 text-white ">
                <Link href={""} className="text-[#FFFFFF]">
                  Portfolio
                </Link>
                <Link href={""} className="text-[#FFFFFF]">
                  Categories
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-[160px] border-b-2 border-none  border-[#262626] xl:w-fit xl:text-nowrap py-[20px]">
              <Link href={"/contact"} className="text-[#999999]">
                Contact Us
              </Link>{" "}
              <div className="flex flex-col gap-2 text-white ">
                <Link href={""} className="text-[#FFFFFF]">
                  Contact Form
                </Link>
                <Link href={""} className="text-[#FFFFFF]">
                  Our Offices
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-[160px] border-b-2 xl:border-none  border-[#262626] xl:w-fit xl:text-nowrap py-[20px]">
            <Link href={"/services"} className="text-[#999999]">
              Services
            </Link>{" "}
            <div className="flex flex-col gap-2 text-white ">
              <Link href={""} className="text-[#FFFFFF]">
                Valuation Mastery
              </Link>
              <Link href={""} className="text-[#FFFFFF]">
                Strategic Marketing
              </Link>
              <Link href={""} className="text-[#FFFFFF]">
                Negotiation Wizardry
              </Link>
              <Link href={""} className="text-[#FFFFFF]">
                Closing Success
              </Link>
              <Link href={""} className="text-[#FFFFFF]">
                Property Management
              </Link>
            </div>
          </div>
          <div className="hidden xl:flex flex-col h-fit gap-2 w-[160px] border-b-2 border-none  border-[#262626] xl:w-fit xl:text-nowrap py-[20px]">
            <Link href={"/properties"} className="text-[#999999]">
              Properties
            </Link>{" "}
            <div className="flex flex-col gap-2 text-white ">
              <Link href={""} className="text-[#FFFFFF]">
                Portfolio
              </Link>
              <Link href={""} className="text-[#FFFFFF]">
                Categories
              </Link>
            </div>
          </div>
          <div className="hidden xl:flex flex-col gap-2 w-[160px] border-b-2 border-none  border-[#262626] xl:w-fit xl:text-nowrap py-[20px]">
            <Link href={"/contact"} className="text-[#999999]">
              Contact Us
            </Link>{" "}
            <div className="flex flex-col gap-2 text-white ">
              <Link href={""} className="text-[#FFFFFF]">
                Contact Form
              </Link>
              <Link href={""} className="text-[#FFFFFF]">
                Our Offices
              </Link>
            </div>
          </div>
        </section>
      </section>
      <section className="bg-[#1A1A1A] w-full flex gap-5 flex-col-reverse md:flex-row px-4 md:px-20 py-3 justify-between items-center text-white">
        <div className="flex md:flex-row flex-col gap-4 justify-between items-center container mx-auto">
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
        </div>
      </section>
    </footer>
  );
};
export default Footer;

import SearchItem from "./search-item";

export default function Filter() {
  return (
    <section className="flex flex-col  gap-5 xl:gap-0 mx-4 xl:mx-20 2xl:mx-40 my-6 xl:my-20">
      <div className="bg-[#1A1A1A] xl:p-3 xl:mx-[90px] rounded-xl -mb-2.5">
        <div className="flex flex-row gap-5 rounded-xl p-2.5 outline outline-[#262626] bg-[#141414]">
          <input
            className="ml-2 w-full text-base font-medium xl:text-lg 2xl:text-xl  text-white !outline-none"
            placeholder="Search For A Property"
            type="text"
            name=""
            id=""
          />
          <button className="flex flex-row-reverse items-center w-fit gap-2 px-6 py-4.5 bg-violet-600 rounded-lg">
            <span className="hidden xl:block font-medium w-full text-base 2xl:text-lg text-white whitespace-nowrap">
              Find Property
            </span>
            <svg
              className="w-5 h-5 2xl:w-7 2xl:h-7"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 17.5L13.1694 13.1694M13.1694 13.1694C14.3004 12.0384 15 10.4759 15 8.75C15 5.29822 12.2018 2.5 8.75 2.5C5.29822 2.5 2.5 5.29822 2.5 8.75C2.5 12.2018 5.29822 15 8.75 15C10.4759 15 12.0384 14.3004 13.1694 13.1694Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-3.5 bg-[#1A1A1A] p-4 xl:p-3 rounded-xl">
        <SearchItem
          placeholder="Location"
          icon="/icons/listings-location-icon.png"
        />
        <SearchItem
          placeholder="Property Type"
          icon="/icons/listings-property-type.png"
        />
        <SearchItem
          placeholder="Price Range"
          icon="/icons/listings-price-range.png"
        />
        <SearchItem
          placeholder="Property Size"
          icon="/icons/listings-property-size.png"
        />
        <SearchItem
          placeholder="Build Year"
          icon="/icons/listings-build-year.png"
        />
      </div>
    </section>
  );
}

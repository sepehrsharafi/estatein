export default function SearchItem({
  icon,
  placeholder,
}: {
  icon: string;
  placeholder: string;
}) {
  return (
    <div className="w-full flex flex-row justify-between items-center outline outline-[#262626] rounded-lg bg-[#141414] text-neutral-400 text-sm 2xl:text-lg font-medium p-3.5">
      <div className="flex flex-row gap-2">
        <img className="w-5 h-5 2xl:w-6 2xl:h-6" src={icon} alt="icon" />
        <div className="w-0.5 py-2.5 my-auto bg-[#262626]" />
        <p className="2xl:text-lg">{placeholder}</p>
      </div>
      <div className="bg-[#1A1A1A] p-1.5 rounded-full">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.25 6.875L10 13.125L3.75 6.875"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

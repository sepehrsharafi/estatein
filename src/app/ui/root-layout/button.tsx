const variants = {
  primary:
    "bg-[#703BF7] text-white rounded-[8px] border-[#262626] py-[14px] px-[35px]  border-[1px] hover:bg-[#440ddb] transition-colors duration-200 ease-in-out  2xl:py-[16px] 2xl:px-[24px] 2xl:text-lg",
  secondary:
    " text-white py-[14px] px-[20px] rounded-[8px] bg-[#141414] h-fit border-[#262626] border-[1px] hover:bg-[#292929] transition-colors duration-200 ease-in-out  2xl:py-[16px] 2xl:px-[24px]  2xl:text-lg",
};

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  variant?: keyof typeof variants;
  className?: string;
}

const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={` text-sm 2xl:text-lg 2xl:font-normal ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;

const variants = {
  primary: "bg-[#703BF7] text-white",
  secondary:
    " text-white py-[14px] px-[20px] rounded-[8px] bg-[#141414]  border-[#262626] border-[1px] hover:bg-[#292929] 2xl:py-[16px] 2xl:px-[24px]  2xl:text-lg",
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
    <button type={type} className={` ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
export default Button;

interface BadgeProps {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <>
      <div className="px-3.5 py-1.5 rounded-3xl bg-[#1A1A1A]  border-[#262626] border-[1px] hover:bg-[#292929] ">
        {children}
      </div>
    </>
  );
};
export default Badge;

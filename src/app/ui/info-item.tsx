export default function InformationItems({
  items,
}: {
  items: Array<{ title: string; description: string }>;
}) {
  function InfoItem({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    return (
      <article className="w-full flex flex-col items-center justify-center xl:items-start px-5 py-4 xl:py-5 gap-2 bg-[#1A1A1A] border-[1px] border-[#262626] rounded-lg xl:rounded-[10px] 2xl:rounded-xl">
        <h3 className="text-white text-2xl xl:text-3xl 2xl:text-[40px] font-bold">
          {title}
        </h3>
        <p className="text-neutral-400 text-sm xl:text-lg font-medium line-clamp-1">
          {description}
        </p>
      </article>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-3 xl:hidden">
        <div className="flex flex-row gap-3">
          {items.map(
            (item: { title: string; description: string }, index) =>
              index < items.length - 1 && (
                <InfoItem
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              )
          )}
        </div>
        <InfoItem
          title={items[items.length - 1].title}
          description={items[items.length - 1].description}
        />
      </div>
      <div className="xl:flex flex-row gap-3 hidden ">
        {items.map((item: { title: string; description: string }, index) => (
          <InfoItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

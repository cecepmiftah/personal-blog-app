type SlugProps = {
  item: string;
  color: string;
};

export const Slug = ({ item, color }: SlugProps) => {
  return (
    <p
      className={`text-purple-700 px-2.5 py-0.5 bg-slate-300 text-center rounded`}
      key={item}
    >
      {item}
    </p>
  );
};

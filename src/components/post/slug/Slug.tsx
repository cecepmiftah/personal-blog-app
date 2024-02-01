type SlugProps = {
  item: string;
  color: string;
};

export const Slug = ({ item, color }: SlugProps) => {
  return (
    <p
      className={`text-${color}-700 px-2.5 py-0.5 bg-${color}-50 text-center`}
      key={item}
    >
      {item}
    </p>
  );
};

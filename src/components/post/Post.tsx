import Image from "next/image";
import Link from "next/link";
import { Slug } from "./slug/Slug";
import { ArrowUpRight } from "./arrow-up-right/Arrow";

type PostProps = {
  id: number;
  img: string;
  date: string;
  title: string;
  summary: string;
  desc?: string;
  slug: string[];
  style?: "row" | "column";
};

const colors = ["purple", "pink", "indigo", "emerald", "orange"];
export const generateRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
const Post = ({
  id,
  img,
  date,
  title,
  summary,
  desc,
  slug,
  style,
}: PostProps) => {
  return (
    <div className={`mx-auto min-w-[300px]`}>
      <div
        className={`flex flex-col gap-6 md:flex-${
          style === "row" ? "row" : "col"
        }`}
      >
        <Link
          href={`/post/${id}`}
          className={`w-full min-h-[228px] flex relative md:${
            style === "column" ? "max-w-[377px]" : "max-w-80"
          }`}
        >
          <Image
            src={img}
            fill
            className="object-cover"
            alt={`image ${title}`}
          />
        </Link>
        <div className="flex flex-col gap-6 lg:w-full">
          <div className="flex flex-col gap-6">
            <p className="text-violet-700 text-sm font-semibold leading-tight">
              {date}
            </p>
            <div className="flex justify-between items-center gap-4">
              <Link href={`/post/${id}`}>
                <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
              </Link>
              <ArrowUpRight />
            </div>
            <p className="text-gray-500 text-base font-normal leading-normal">
              {summary}
            </p>
          </div>
          <div
            className={`flex justify-around text-sm font-medium gap-1 items-center ${
              style === "row" && "md:hidden"
            }`}
          >
            {slug.map((item) => {
              const color = generateRandomColor();

              return <Slug item={item} color={color} key={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

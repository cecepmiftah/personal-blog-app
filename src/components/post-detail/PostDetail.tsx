import Image from "next/image";
import React from "react";
import { Slug } from "../post/slug/Slug";
import Post, { generateRandomColor } from "../post/Post";
import { allBlog } from "@/dataTemp/blog";

type PostProps = {
  id: number;
  img: string;
  date: string;
  title: string;
  summary: string;
  desc: string;
  slug: string[];
};

export const PostDetail = ({
  id,
  img,
  date,
  title,
  summary,
  desc,
  slug,
}: PostProps) => {
  return (
    <div className="mx-5 xl:mx-5 lg:flex lg:gap-6 xl:gap-14 lg:max-w-[1216px] xl:max-w-[1440px] lg:mx-auto">
      <div className="hidden lg:block lg:flex-1">
        <h1 className="text-xl font-semibold">Recent blog posts</h1>
        {allBlog.slice(0, 3).map((blog) => (
          <div className="my-6" key={blog.id}>
            <Post
              id={blog.id}
              img={blog.img}
              date={blog.date}
              title={blog.title}
              summary={blog.summary}
              slug={blog.slug}
              style="column"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-6 lg:flex-2">
        <p className="text-violet-700 text-sm font-semibold">{date}</p>
        <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
        <div className="w-full min-h-[228px] flex relative">
          <Image
            src={img}
            alt={`image ${title}`}
            fill
            className="object-cover md:object-contain"
          />
        </div>
        <div className="flex flex-col gap-4 text-justify text-base font-normal leading-normal">
          <div dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
        <div className="flex justify-start">
          {slug.map((item) => {
            const color = generateRandomColor();

            return <Slug item={item} color={color} key={item} />;
          })}
        </div>
        <div className="mt-3 flex flex-col justify-center items-center gap-3">
          <p className="text-violet-500 text-base font-semibold">Newlatters</p>
          <h2 className="text-2xl font-semibold">Stories and interviews</h2>
          <p className="text-base font-normal text-justify">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>
          <div className="flex flex-col gap-2">
            <form className="md:flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-Midnight-Blue font-medium outline-violet-500 py-2 md:py-4 px-2 md:px-8 w-full rounded border border-spacing-1 border-slate-300"
              />
              <button className="self-end bg-violet-500 text-white font-medium px-5 py-3 md:px-8 md:py-4 rounded">
                Subscribe
              </button>
            </form>
            <p className="text-sm font-normal">
              We care about your data in our{" "}
              <span className="underline">privacy policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

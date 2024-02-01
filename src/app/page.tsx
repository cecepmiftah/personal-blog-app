import { Pagination } from "@/components/pagination/Pagination";
import Post from "@/components/post/Post";
import { allBlog } from "@/dataTemp/blog";

export default function Home() {
  return (
    <div className="lg:max-w-[1216px] xl:max-w-[1440px] lg:mx-auto">
      <div className="mx-5">
        <h1 className="text-2xl font-semibold py-8">Recent blog posts</h1>
      </div>
      <div className="hidden mx-5 xl:grid xl:grid-cols-2 xl:gap-4">
        <div className="grid grid-rows-subgrid row-span-2">
          {allBlog.slice(0, 1).map((blog) => (
            <div className="my-4" key={blog.id}>
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
        <div>
          {allBlog.slice(4, 6).map((blog) => (
            <div className="my-4" key={blog.id}>
              <Post
                id={blog.id}
                img={blog.img}
                date={blog.date}
                title={blog.title}
                summary={blog.summary}
                slug={blog.slug}
                style="row"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mx-5 my-4 xl:hidden">
        {allBlog.slice(0, 3).map((blog) => (
          <div className="my-4" key={blog.id}>
            <Post
              id={blog.id}
              img={blog.img}
              date={blog.date}
              title={blog.title}
              summary={blog.summary}
              slug={blog.slug}
              style="row"
            />
          </div>
        ))}
      </div>
      <div className="mx-5">
        <h1 className="text-2xl font-semibold py-8">All blog posts</h1>
      </div>
      <div className="mx-5 my-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {allBlog.slice(4).map((blog) => (
          <div className="my-4" key={blog.id}>
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
      <div className="mt-12">
        <Pagination />
      </div>
    </div>
  );
}

import Post from "@/components/post/Post";
import { allBlog } from "@/dataTemp/blog";

const page = () => {
  return (
    <div className="w-full lg:max-w-[1216px] xl:max-w-[1440px] mx-auto mt-4">
      <div className="mx-5">
        <h1 className="font-bold text-3xl mb-6 md:text-4xl text-center border-y-2 border-slate-700 py-6 md:py-10">
          Projects
        </h1>

        <h2 className="font-bold text-xl lg:text-2xl">List Project</h2>
        {/* Mobile */}
        <div className="md:hidden">
          {allBlog.map((blog) => (
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
        {/* Medium */}
        <div className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-4">
          {allBlog.map((blog) => {
            return (
              <div className="my-4" key={blog.id}>
                <Post {...blog} style="column" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;

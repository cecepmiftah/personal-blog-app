import { PostDetail } from "@/components/post-detail/PostDetail";
import { allBlog } from "@/dataTemp/blog";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

const getData = async (id: number) => {
  const post = allBlog.find((item) => item.id === id);
  if (!post) return notFound();

  return post;
};

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = parseInt(params.id);

  const post = await getData(id);

  return {
    title: post.title,
  };
}

const PostPage = async ({ params }: Props) => {
  if (!params.id) throw new Error("Id required!");

  const id = parseInt(params.id);

  const post = await getData(id);

  return (
    <div className="min-w-[300px] mt-4">
      <PostDetail {...post} />
    </div>
  );
};

export default PostPage;

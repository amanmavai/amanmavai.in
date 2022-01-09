import { MetaFunction, useLoaderData, Link } from "remix";
import * as postA from "./posts/learn-auth.mdx";
import * as postB from "./posts/learn-docker.mdx";

export let meta: MetaFunction = () => {
  return {
    title: "Aman Mavai – Developer, writer, creator.",
    description: `Front-end developer, JavaScript enthusiast.`,
  };
};

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export function loader() {
  return [postFromModule(postA), postFromModule(postB)];
}

export default function Index() {
  const posts = useLoaderData();

  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">Aman Mavai</h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            Lead Engineer at <span className="font-semibold">GS Lab</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16">Helping developers figure out web development.</p>
        </div>

        <div className="w-20 h-20 sm:w-36 sm:h-36 mb-8 sm:mb-0">
          <img
            alt="Aman Mavai"
            height={150}
            width={150}
            src="https://avatars.githubusercontent.com/amanmavai"
            className="rounded-full filter grayscale"
          />
        </div>
      </div>
      <div className="">
        <div className="title text-4xl">Featured Posts</div>
        <div className="flex space-x-5 mt-5">
          {posts.map((post: any) => {
            return (
              <Link to={`/posts/${post.slug}`} className="">
                <div
                  key={post.title}
                  className="w-52 h-36 rounded-md p-5 text-xl tracking-widest bg-gradient-to-r from-[#6EE7B7] via-[#639bf5] to-[#ad69ec]"
                >
                  {post.description}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

import { useLoaderData, Link } from "remix";

import * as postA from "./posts/learn-auth.mdx";
import * as postB from "./posts/learn-docker.mdx";

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return [postFromModule(postA), postFromModule(postB)];
}

export default function Blog() {
  const posts = useLoaderData();

  return (
    <ul className="space-y-5">
      {posts.map((post: any) => (
        <li key={post.slug}>
          <Link to={`/posts/${post.slug}`} className="text-lg text-blue-500">
            {post.title}
          </Link>
          {post.description && <p>{post.description}</p>}
        </li>
      ))}
    </ul>
  );
}

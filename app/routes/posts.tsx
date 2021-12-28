import { Outlet } from "remix";

export default function BlogPost() {
  return (
    <div className="prose md:prose-lg lg:prose-xl prose-headings:text-indigo-500 prose-a:text-teal-600 hover:prose-a:text-teal-500 prose-img:rounded-2xl prose-img:shadow-md prose-pre:bg-indigo-100 prose-pre:text-indigo-800 prose-blockquote:my-4 prose-blockquote:border-l-indigo-400 prose-blockquote:bg-blue-50 prose-blockquote:tracking-widest">
      <Outlet />
    </div>
  );
}

import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Aman Mavai – Developer, writer, creator.",
    description: `Front-end developer, JavaScript enthusiast.`,
  };
};

export default function Index() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col pr-8">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">Aman Mavai</h1>
        <h2 className="text-gray-700 dark:text-gray-200 mb-4">
          Lead Engineer at <span className="font-semibold">GS Lab</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-16">Helping developers figure out web development.</p>
      </div>

      <div className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] mb-8 sm:mb-0">
        <img
          alt="Aman Mavai"
          height={150}
          width={150}
          src="https://avatars.githubusercontent.com/amanmavai"
          className="rounded-full filter grayscale"
        />
      </div>
    </div>
  );
}

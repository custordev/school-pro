import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SmallTitle from "./SmallTitle";

export default function Component() {
  return (
    <section className="relative w-full py-8 ">
      <div className="container  max-w-6xl mx-auto px-4 md:px-6 items-center flex text-center justify-center space-y-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <SmallTitle title="Welcome to School Pro" />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            Simplify Your Video
            <span className="block">Production With Lucis</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Lucis empowers you to create stunning videos with precision and
            ease, all within a sleek and intuitive interface.
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-full bg-violet-600 px-8 text-sm font-medium text-white transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-full border border-gray-200 bg-white px-8 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
            >
              See All features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f8f8f8_1px,transparent_1px),linear-gradient(to_bottom,#f8f8f8_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#e0e7ff,transparent)]" />
      </div>
    </section>
  );
}

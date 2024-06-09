import { BODY_HEIGHT } from "@/lib/constants";
import Link from "next/link";

export default function About() {
  return (
    <section
      className={`w-full py-12 md:py-24 lg:py-32 border-b min-h-[${BODY_HEIGHT}] flex flex-col items-center justify-center`}
    >
      <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              About Me
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I&#39;ve built this site to track the things I build and learn in
              public, if you find this site or anything on it useful, please
              know that was on pure coincidance, this site is not intended to be
              a place to prove my skills or anything, it&#39;s purely for vibe&#39;s and
              was created in a day or so.
            </p>
            <p className="max-w-[900px] text-gray-500 text-sm">
              Guide if you are reading this, rememder the holy qoute
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

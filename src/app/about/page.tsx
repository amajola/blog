import { BODY_HEIGHT } from "@/lib/constants";
import Link from "next/link";
import TwitterLogo from "../assests/logos/twitter";
import InstagramLogo from "../assests/logos/instagram";
import AppleMusicLogo from "../assests/logos/appleMusic";

export default function About() {
  return (
    <section
      className={`w-full py-12 md:py-24 lg:py-32 border-b min-h-[${BODY_HEIGHT}] flex flex-col items-center justify-center`}
    >
      <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Asimthande Thandakwenkosi Ayavuya Majola
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {"Hi I'm Asimthande and I be doing things 👋🏾"}
            </p>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {`I'm a software developer from south africa with a million intrests ranging from programming to fashion.
              I've made this blog to document the things "I be doing". This blog will mainly be for improving my writing skills and expressing myself.`}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-8">
          <Link
            href="https://twitter.com/amajola_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogo width={40} height={40} />
          </Link>
          <Link
            href="https://www.instagram.com/asimthande_m/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo width={40} height={40} />
          </Link>
          <Link
            href="https://music.apple.com/profile/amajola"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppleMusicLogo width={40} height={40} />
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Collaboration } from "@/sections/collaboration";
import { Features } from "@/sections/features";
import { Hero } from "@/sections/hero";
import { MoreFeatures } from "@/sections/more-features";
import { NoLockin } from "@/sections/no-lockin";
import { SamePage } from "@/sections/same-page";
import { StreamlinedExperience } from "@/sections/streamlined-experience";
import { Sticky } from "@/sections/sticky";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quagmire Simplifiles Learning</title>
        <meta
          name="description"
          content="Quagmire Simplifiles Learning"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Sticky />
      <main>
        <Hero />
        <div className="relative z-10 w-full overflow-x-clip">
          <Collaboration />
          <SamePage />
          <StreamlinedExperience />
          <Features />
          <MoreFeatures />
          <NoLockin />
        </div>
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-[radial-gradient(circle_farthest-side_at_calc(300px)_calc(300px),_var(--color-secondary)_0%,_transparent_100%)] md:hidden">
          
          <p className="px-10 text-center text-xl text-white">
            Sorry, I only made this page work on desktop. Perhaps in a future
            video we cands make this responsive as well 😁
            <br />
            <a
              href="https://github.com/frontendfyi/Scroll-Animations-With-Framer-Motion--Codesandbox-Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block underline"
            >
              Check the source code on GitHub
            </a>
          </p>
        </div>
      </main>
    </>
  );
}

import { GithubIcon } from "@/icons/github";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (

    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative mb-[8rem] h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
    >
      <motion.div
        style={{ position, scale, x: "-50%" }}
        className="fixed left-1/2 z-10 flex flex-col items-center"
      >
        <p className="mb-2 text-2xl tracking-tight font-bold">
          <span className="font-manrope">Quagmire Beta</span>
        </p>
        <p className="mb-8 text-sm  font-normal opacity-50">
          <span className="font-manrope">A Nights & weekends project</span>
        </p>
        <p className="mb-8 text-center text-xs font-manrope text-text">
          by{" "}
          <a
            href=""
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            Samrat
          </a>
          ,
          <br />
          rebuilt by{" "}
          <a
            href=""
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            Encom Designs
          </a>
        </p>


        <h1 className="mb-12 text-center font-body text-3xl leading-[1]">
          Simplifiles
          <br />
          Learning
        </h1>

        <a href="#" className="flex items-center text-lg text-primary">
          <GithubIcon className="mr-2 inline h-5 w-5" />
          Import GitHub project
        </a>
      </motion.div>
    </motion.section>
  );
};

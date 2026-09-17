"use client";

import { about, personalInfo } from "@/data/bioData";
import { AnimatedLink } from "../ui/animated-link";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1.0] as const,
    },
  },
};

export default function About() {
  if (!about) {
    return (
      <section className="mt-8">
        <p>About information coming soon...</p>
      </section>
    );
  }

  return (
    <motion.section
      className="max-w-2xl text-base leading-relaxed sm:text-lg"
      aria-label="About Me"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      <motion.p
        className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-lavender"
        variants={paragraphVariants}
      >
        About
      </motion.p>
      <motion.h2
        className="mb-8 font-display text-3xl text-foreground sm:text-4xl"
        variants={paragraphVariants}
      >
        A bit more context
      </motion.h2>

      {about.introduction && (
        <motion.p className="mb-5 text-muted-foreground" variants={paragraphVariants}>
          {about.introduction}
        </motion.p>
      )}

      {about.experience && (
        <motion.p className="mb-5 text-muted-foreground" variants={paragraphVariants}>
          {about.experience}
        </motion.p>
      )}

      {about.specialties?.length > 0 && (
        <motion.ul
          className="mb-6 list-disc space-y-3 pl-5 text-muted-foreground"
          variants={paragraphVariants}
        >
          {about.specialties.map((specialty) => (
            <li key={specialty.title}>
              <span className="font-medium text-foreground/90">
                {specialty.title}:
              </span>{" "}
              {specialty.description}
            </li>
          ))}
        </motion.ul>
      )}

      {about.education && (
        <motion.p className="mb-8 text-muted-foreground" variants={paragraphVariants}>
          {about.education}
        </motion.p>
      )}

      <motion.p className="text-muted-foreground" variants={paragraphVariants}>
        Let&apos;s build something great. Get in touch via{" "}
        <AnimatedLink
          href={`mailto:${personalInfo.email}`}
          showIcon
          className="font-medium text-lavender"
        >
          email
        </AnimatedLink>{" "}
        or connect with me on{" "}
        <AnimatedLink
          href={personalInfo.linkedin}
          isExternal
          showIcon
          className="font-medium text-lavender"
        >
          LinkedIn!
        </AnimatedLink>
      </motion.p>
    </motion.section>
  );
}

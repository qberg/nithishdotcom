"use client";

import { about, personalInfo } from "@/data/bioData";
import { AnimatedLink } from "../ui/animated-link";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChidren: 0.1,
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

export default function About() {
  if (!about) {
    return (
      <section className="mt-12">
        <p>About information coming soon...</p>
      </section>
    );
  }
  return (
    <motion.section
      className="text-lg"
      aria-label="About Me"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {about.introduction && (
        <motion.p className="mb-4" variants={paragraphVariants}>
          {about.introduction}
        </motion.p>
      )}

      {about.experience && (
        <motion.p className="mb-4" variants={paragraphVariants}>
          {about.experience}
        </motion.p>
      )}

      {about.specialties?.length > 0 && (
        <motion.ul
          className="mb-4 list-disc space-y-3 pl-5"
          variants={paragraphVariants}
        >
          {about.specialties.map((specialty) => (
            <li key={specialty.title}>
              <span className="font-semibold">{specialty.title}:</span>{" "}
              {specialty.description}
            </li>
          ))}
        </motion.ul>
      )}

      {about.education && (
        <motion.p className="mb-4" variants={paragraphVariants}>
          {about.education}
        </motion.p>
      )}

      <motion.p className="sm:max-w-[60%]" variants={paragraphVariants}>
        Let&apos;s build something great. Get in touch via{" "}
        <AnimatedLink
          href={`mailto:${personalInfo.email}`}
          showIcon
          className="font-semibold"
        >
          email
        </AnimatedLink>{" "}
        or connect with me on{" "}
        <AnimatedLink
          href={personalInfo.linkedin}
          isExternal
          showIcon
          className="font-semibold"
        >
          LinkedIn!
        </AnimatedLink>
      </motion.p>
    </motion.section>
  );
}

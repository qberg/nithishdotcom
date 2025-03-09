"use client";

import { about, contacts } from "@/data/bioData";
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

      {about.education && (
        <motion.p className="mb-4" variants={paragraphVariants}>
          {about.education}
        </motion.p>
      )}

      <motion.p className="sm:max-w-[60%]" variants={paragraphVariants}>
        Want to chat?{" "}
        <AnimatedLink
          href={contacts[0].href}
          showIcon
          className="font-semibold"
        >
          Get in touch
        </AnimatedLink>{" "}
        or find me on{" "}
        <AnimatedLink
          href={contacts[1].href}
          showIcon
          className="font-semibold"
        >
          {contacts[1].label}
        </AnimatedLink>{" "}
        and{" "}
        <AnimatedLink
          href={contacts[2].href}
          showIcon
          className="font-semibold"
        >
          {contacts[2].label}
        </AnimatedLink>
      </motion.p>
    </motion.section>
  );
}

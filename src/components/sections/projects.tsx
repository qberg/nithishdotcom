"use client";

import { projects } from "@/data/bioData";
import { ProjectCard } from "../ui/project-card";
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1.0] as const,
    },
  },
};

export default function Projects() {
  return (
    <motion.section
      className="flex flex-col"
      aria-label="Projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-lavender">
        Projects
      </p>
      <h2 className="font-display text-3xl text-foreground sm:text-4xl">
        Selected work
      </h2>
      <p className="mt-4 max-w-xl text-base text-muted-foreground">
        Products and programs shaped through discovery, cross-functional
        execution, and measurable outcomes.
      </p>

      <div className="mt-10">
        {projects.map((item, index) => (
          <motion.div
            key={item.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <ProjectCard
              index={index}
              title={item.title}
              summary={item.summary}
              tags={item.tags}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

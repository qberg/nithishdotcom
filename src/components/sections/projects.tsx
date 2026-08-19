"use client";

import { projects } from "@/data/bioData";
import { ProjectCard } from "../ui/project-card";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0],
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
      viewport={{ once: true, amount: 0.1 }}
    >
      {projects.map((item, index) => (
        <motion.div
          key={item.title}
          className={index > 0 ? "mt-12" : undefined}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={index + 2}
        >
          <ProjectCard
            title={item.title}
            summary={item.summary}
            work={item.work}
            impact={item.impact}
          />
        </motion.div>
      ))}
    </motion.section>
  );
}

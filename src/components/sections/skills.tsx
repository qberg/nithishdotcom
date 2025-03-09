"use client";

import { skills, tools } from "@/data/bioData";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface EntryProps {
  title: string;
  buzzWords: string;
  delay: number;
}

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: delay * 0.1 },
  }),
};

const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

function Entry({ title, buzzWords, delay }: EntryProps) {
  return (
    <motion.div
      className="mb-4"
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={delay}
    >
      <div className="flex items-center group cursor-pointer mb-2">
        <ChevronRight className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
        <h3 className="font-semibold pl-2">{title}</h3>
      </div>
      <p className="text-muted-foreground border-l border-border pl-6 ml-[6px]">
        {buzzWords}
      </p>
    </motion.div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <motion.h2
      className="font-semibold text-2xl"
      variants={fadeInLeftVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
  );
}

export default function Skills() {
  // Container variants for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="mt-0" aria-label="Skills">
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeader title="Skills" />

        <div className="space-y-2">
          {skills.map((item, index) => (
            <Entry
              key={index}
              title={item.title}
              buzzWords={item.buzzWords}
              delay={index + 1}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="space-y-6 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeader title="Tools" />

        <div className="space-y-2">
          {tools.map((item, index) => (
            <Entry
              key={index}
              title={item.title}
              buzzWords={item.buzzWords}
              delay={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

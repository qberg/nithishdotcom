"use client";

import { skills, tools } from "@/data/bioData";
import { motion } from "motion/react";

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

function SkillEntry({
  title,
  items,
  delay,
}: {
  title: string;
  items: string;
  delay: number;
}) {
  return (
    <motion.article
      className="border-l border-border pl-4"
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={delay}
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1.5 text-muted-foreground leading-relaxed">{items}</p>
    </motion.article>
  );
}

function ToolRow({
  domain,
  stack,
  delay,
}: {
  domain: string;
  stack: string;
  delay: number;
}) {
  return (
    <motion.div
      className="grid gap-1 border-b border-border/60 py-4 last:border-b-0 sm:grid-cols-[minmax(9.5rem,34%)_1fr] sm:items-start sm:gap-6"
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={delay}
    >
      <div className="font-semibold">{domain}</div>
      <div className="text-muted-foreground leading-relaxed">{stack}</div>
    </motion.div>
  );
}

export default function Skills() {
  if (!skills?.length || !tools?.length) {
    return (
      <section className="mt-12">
        <p>Skills information coming soon...</p>
      </section>
    );
  }

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
    <section className="text-lg" aria-label="Skills">
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeader title="Skills & Core Competencies" />

        <div className="space-y-5">
          {skills.map((item, index) => (
            <SkillEntry
              key={item.title}
              title={item.title}
              items={item.items}
              delay={index + 1}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-12 space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeader title="Tools & Technical Stack" />

        <div>
          <div className="hidden border-b border-border pb-3 text-sm font-medium text-muted-foreground sm:grid sm:grid-cols-[minmax(9.5rem,34%)_1fr] sm:gap-6">
            <span>Domain</span>
            <span>Stack & Platforms</span>
          </div>

          {tools.map((item, index) => (
            <ToolRow
              key={item.domain}
              domain={item.domain}
              stack={item.stack}
              delay={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { skills, tools } from "@/data/bioData";
import { motion } from "motion/react";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: delay * 0.08 },
  }),
};

const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <motion.p
        className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-lavender"
        variants={fadeInLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="font-display text-3xl text-foreground sm:text-4xl"
        variants={fadeInLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
    </div>
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
      className="border-l border-border/70 pl-4"
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={delay}
    >
      <h3 className="font-medium text-foreground">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">{items}</p>
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
      className="grid gap-1 border-b border-border/50 py-5 last:border-b-0 sm:grid-cols-[minmax(9.5rem,34%)_1fr] sm:items-start sm:gap-6"
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={delay}
    >
      <div className="font-medium text-foreground">{domain}</div>
      <div className="leading-relaxed text-muted-foreground">{stack}</div>
    </motion.div>
  );
}

export default function Skills() {
  if (!skills?.length || !tools?.length) {
    return (
      <section className="mt-8">
        <p>Skills information coming soon...</p>
      </section>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section className="max-w-2xl text-base sm:text-lg" aria-label="Skills">
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        <SectionHeader
          eyebrow="Capabilities"
          title="Skills & Core Competencies"
        />

        <div className="space-y-6">
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
        className="mt-16 space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        <SectionHeader eyebrow="Stack" title="Tools & Technical Stack" />

        <div>
          <div className="hidden border-b border-border/60 pb-3 text-sm font-medium text-muted-foreground sm:grid sm:grid-cols-[minmax(9.5rem,34%)_1fr] sm:gap-6">
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

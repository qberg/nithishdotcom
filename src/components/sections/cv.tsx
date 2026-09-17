"use client";

import { motion } from "motion/react";

import { education, workExperience } from "@/data/bioData";
import InfoCard from "../ui/info-card";

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
    <div className="mb-2">
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function CV() {
  return (
    <section className="max-w-2xl text-base sm:text-lg" aria-label="CV">
      <motion.div
        className="space-y-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        <SectionHeader eyebrow="Career" title="Experience" />
        {workExperience.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.role}`}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index + 1}
          >
            <InfoCard
              duration={item.duration}
              location={item.location}
              where={item.company}
              didThis={item.role}
              theirSite={item.companyWebsite}
              highlights={item.highlights}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="mt-16 space-y-2">
        <SectionHeader eyebrow="Background" title="Education" />
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index + 1}
          >
            <InfoCard
              duration={item.duration}
              location={item.location}
              where={item.college}
              didThis={item.degree}
              theirSite={item.collegeWebsite}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

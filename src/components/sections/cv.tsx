"use client";

import { motion } from "motion/react";

import { education, workExperience } from "@/data/bioData";
import InfoCard from "../ui/info-card";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function CV() {
  return (
    <section className="text-lg" aria-label="CV">
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeader title="Experience" />
        {workExperience.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index + 1}
          >
            <InfoCard
              duration={item.duration}
              location={item.location}
              where={item.company}
              didThis={item.role}
              theirSite={item.companyWebsite}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="mt-12">
        <SectionHeader title="Education" />
        {education.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index + 1}
          >
            <InfoCard
              key={index}
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

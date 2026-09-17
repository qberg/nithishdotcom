import { contacts, personalInfo } from "@/data/bioData";

export default function HomeHero() {
  return (
    <section aria-label="Introduction" className="max-w-2xl pt-8 sm:pt-16">
      <p className="mb-10 text-xs font-medium uppercase tracking-[0.22em] text-lavender">
        Life is what happens when you&apos;re busy making other plans.
      </p>

      <h1 className="font-display text-4xl leading-snug tracking-[-0.01em] text-foreground sm:text-5xl md:text-[3.25rem]">
        Hi, I&apos;m {personalInfo.name}.
      </h1>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
        <p>
          Product manager with 4+ years building fintech, payments, and AI
          products — from discovery and roadmaps to launch. I work at the
          intersection of technical execution, data-driven prioritization, and
          cross-functional leadership.
        </p>
        <p className="font-medium text-foreground/90">
          Open to collaborations on products that turn complex workflows into
          clear, high-impact digital experiences.
        </p>
      </div>

      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
        <li>
          <a
            href={`mailto:${personalInfo.email}`}
            className="transition-colors duration-200 hover:text-lavender"
          >
            Email
          </a>
        </li>
        {contacts
          .filter((item) => item.label !== "Mail")
          .map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-lavender"
              >
                {item.label}
              </a>
            </li>
          ))}
      </ul>
    </section>
  );
}

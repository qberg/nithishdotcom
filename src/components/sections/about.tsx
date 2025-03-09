import { about, contacts } from "@/data/bioData";
import { AnimatedLink } from "../ui/animated-link";

export default function About() {
  if (!about) {
    return (
      <section className="mt-12">
        <p>About information coming soon...</p>
      </section>
    );
  }
  return (
    <section className="mt-6 text-lg" aria-label="About Me">
      {about.introduction && <p className="mb-4">{about.introduction}</p>}

      {about.experience && <p className="mb-4">{about.experience}</p>}

      {about.education && <p className="mb-4">{about.education}</p>}

      <p className="sm:max-w-[60%]">
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
      </p>
    </section>
  );
}

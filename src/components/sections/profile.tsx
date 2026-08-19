import { Eye, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { personalInfo } from "@/data/bioData";
import { ModeToggle } from "../theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Profile() {
  return (
    <section className="flex flex-col justify-center items-center gap-4 pb-12">
      <header className="flex justify-between items-center w-full">
        <figure>
          <Link href="/">
            <Avatar className="h-32 w-32 border-2 border-border">
              <AvatarImage
                src={personalInfo.profileImage}
                alt={personalInfo.profileImageAlt}
              />
              <AvatarFallback>NS</AvatarFallback>
            </Avatar>
          </Link>
          <figcaption className="sr-only">
            {personalInfo.profileImageAlt}
          </figcaption>
        </figure>
        <div className="flex items-center justify-between gap-4">
          <ModeToggle />
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full text-lg hover:bg-gray-800",
            )}
          >
            Resume
            <Eye className="size-4" />
          </a>
        </div>
      </header>

      <article className="flex flex-col w-full items-start justify-center gap-2">
        <header>
          <h1 className="text-2xl font-semibold">{personalInfo.name}</h1>
        </header>
        <p className="text-lg text-muted-foreground">
          {personalInfo.description}
        </p>
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            {personalInfo.location}
          </span>
          <span aria-hidden className="text-border">
            |
          </span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
          >
            <Mail className="size-3.5 shrink-0" aria-hidden />
            {personalInfo.email}
          </a>
          <span aria-hidden className="text-border">
            |
          </span>
          <a
            href={`tel:${personalInfo.phone.replace(/[^\d+]/g, "")}`}
            className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
          >
            <Phone className="size-3.5 shrink-0" aria-hidden />
            {personalInfo.phone}
          </a>
          <span aria-hidden className="text-border">
            |
          </span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
          >
            <Linkedin className="size-3.5 shrink-0" aria-hidden />
            LinkedIn
          </a>
        </p>
      </article>
    </section>
  );
}

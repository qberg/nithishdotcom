import { personalInfo } from "@/data/bioData";
import { ModeToggle } from "../theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";

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
          <Button
            variant="default"
            className="rounded-full  hover:bg-gray-800 text-lg"
          >
            Resume
          </Button>
        </div>
      </header>

      <article className="flex flex-col w-full items-start justify-center gap-2">
        <header>
          <h1 className="text-2xl font-semibold">{personalInfo.name}</h1>
        </header>
        <p className="text-lg text-muted-foreground">
          {personalInfo.description}
        </p>
      </article>
    </section>
  );
}

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  href?: string;
  tags: string[];
}

export function ProjectCard({
  title,
  description,
  date,
  imageUrl,
  tags,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-none bg-transparent">
      <CardContent className="p-0 mb-4">
        <div className="overflow-hidden rounded-lg bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={600}
            height={400}
            className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-0 space-y-3">
        <div className="flex justify-between items-start w-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <p className="text-muted-foreground text-lg">{description}</p>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-full font-normal"
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

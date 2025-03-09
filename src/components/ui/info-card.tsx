import { AnimatedLink } from "./animated-link";

interface InfoCardProps {
  duration: string;
  location: string;
  didThis: string;
  where: string;
  theirSite: string;
}

export default function InfoCard({
  duration,
  location,
  didThis,
  where,
  theirSite,
}: InfoCardProps) {
  return (
    <article className="flex flex-col mt-6">
      <div className="text-muted-foreground">
        {duration}, {location}
      </div>
      <div className="font-semibold">{didThis}</div>
      <AnimatedLink href={theirSite} isExternal showIcon className="w-fit">
        {where}
      </AnimatedLink>
    </article>
  );
}

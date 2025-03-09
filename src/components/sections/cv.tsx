import { education, workExperience } from "@/data/bioData";
import InfoCard from "../ui/info-card";

export default function CV() {
  return (
    <section className="mt-6 text-lg" aria-label="CV">
      <div>
        <h2 className="text-2xl font-semibold">Experience</h2>
        {workExperience.map((item, index) => (
          <InfoCard
            key={index}
            duration={item.duration}
            location={item.location}
            where={item.company}
            didThis={item.role}
            theirSite={item.companyWebsite}
          />
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Education</h2>
        {education.map((item, index) => (
          <InfoCard
            key={index}
            duration={item.duration}
            location={item.location}
            where={item.college}
            didThis={item.degree}
            theirSite={item.collegeWebsite}
          />
        ))}
      </div>
    </section>
  );
}

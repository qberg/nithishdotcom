import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabItems } from "@/data/bioData";
import About from "./about";
import CV from "./cv";
import Projects from "./projects";
import Skills from "./skills";

export default function TabContent() {
  return (
    <section className="w-full">
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="w-full bg-transparent h-auto p-0 space-x-2">
          {tabItems.map((tabItem, index) => (
            <TabsTrigger
              key={index}
              value={tabItem.value}
              className="px-4 py-2 rounded-full data-[state=active]:bg-secondary dark:data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground dark:data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none text-[16px]"
            >
              {tabItem.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabItems.map((tabItem, index) => (
          <TabsContent key={index} value={tabItem.value} className="mt-6">
            {tabItem.value === "about" && <About />}
            {tabItem.value === "cv" && <CV />}
            {tabItem.value === "projects" && <Projects />}
            {tabItem.value === "skills" && <Skills />}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

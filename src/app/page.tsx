import { Main } from "@/components/layout";
import Profile from "@/components/sections/profile";
import TabContent from "@/components/sections/tab-content";

export default function Home() {
  return (
    <Main>
      <Profile />
      <TabContent />
    </Main>
  );
}

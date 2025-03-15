import {
  Header,
  SectionAbout,
  SectionTools,
  SectionGetStarted,
  SectionHero,
  SectionRecent,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionAbout />
      <SectionRecent />
      <SectionTools />
      <SectionGetStarted />
    </>
  );
}

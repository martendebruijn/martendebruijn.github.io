import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";
import { SectionItem } from "../components/SectionItem";

export function Home() {
  return (
    <>
      <Header />
      <Section title="Projects">
        <SectionItem
          title="Types"
          description="Personal common used types, type guards and other to quickly jumpstart a new project or experiment"
          image="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=3615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="macbook pro on black wooden table"
        />
        <SectionItem
          title="TypeScript"
          description="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
          image="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=3615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="macbook pro on black wooden table"
        />
        <SectionItem
          title="React"
          description="A JavaScript library for building user interfaces."
          image="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=3615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="macbook pro on black wooden table"
        />
      </Section>
      <Footer />
    </>
  );
}

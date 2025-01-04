import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";
import { SectionItem } from "../components/SectionItem";

export function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <Header />
      <Section title="Projects">
        <SectionItem
          title="Types"
          description="Personal common used types, type guards and other to quickly jumpstart a new project or experiment"
          image="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=3615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="macbook pro on black wooden table"
          githubUrl="https://github.com/martendebruijn/types"
        />
        <SectionItem
          title="Dotfiles"
          description="Personal dotfiles for macOS"
          image="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=3615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="macbook pro on black wooden table"
          githubUrl="https://github.com/martendebruijn/dotfiles"
        />
        <SectionItem
          title="delete-merged"
          description="Delete merged branches in a GitHub repository locally"
          image="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=3615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="macbook pro on black wooden table"
          githubUrl="https://github.com/martendebruijn/delete-merged"
        />
      </Section>
      <Footer />
    </div>
  );
}

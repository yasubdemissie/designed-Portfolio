import AboutPage from "@/components/about";
import AboutIntro from "@/components/aboutIntro";
import Contact from "@/components/contact";
import { Header } from "@/components/header";
import HomePage from "@/components/home";
import MovingNews from "@/components/moving";
import Services from "@/components/services";
import WorkPage from "@/components/work";

export default function Home() {
  return (
    <div className="bg-brand-main grid space-y-3 scroll-smooth">
      <Header />
      <HomePage />
      <MovingNews />
      <WorkPage />
      <Services />
      {/* <AboutIntro />
      <AboutPage />
      <Contact /> */}
    </div>
  );
}

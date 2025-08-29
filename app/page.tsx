import AboutIntro from "@/components/aboutIntro";
import Contact from "@/components/contact";
import { EmailOverlay } from "@/components/EmailOverley";
import { Header } from "@/components/header";
import HomePage from "@/components/home";
import MovingNews from "@/components/moving";
import { ProgressBar } from "@/components/progressBar";
import Services from "@/components/services";
import ContactContextProvider from "@/components/supporters/context";
import WorkPage from "@/components/work";

export default function Home() {
  return (
    <ContactContextProvider>
      <div className="bg-brand-main grid space-y-3 scroll-smooth">
        <ProgressBar />
        <Header />
        <HomePage />
        <MovingNews />
        <WorkPage />
        <Services />
        <AboutIntro />
        <Contact />
      </div>
      <EmailOverlay />
    </ContactContextProvider>
  );
}

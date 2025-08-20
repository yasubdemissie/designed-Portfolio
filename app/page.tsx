import AboutPage from "@/components/about";
import { Header } from "@/components/header";
import HomePage from "@/components/home";
import MovingNews from "@/components/moving";
import WorkPage from "@/components/work";

export default function Home() {
  return (
    <div className="bg-brand-main">
      <Header />
      <HomePage />
      <MovingNews />
      <WorkPage />
      <AboutPage />
    </div>
  );
}

import TitleShow from "@/public/assets/image/titleShow";
import { ShowWork } from "./supporters/showWork";

const works = [
  {
    title: "E-commerce app",
    description:
      "I led the complete design lifecycle, from initial concept through to execution, encompassing responsive design, UI, and UX. This included key components like the login, navigation, and administrative pages.",
    imagePath: "e-commerce.png",
  },
  {
    title: "Ride Responsive App",
    description:
      "Created a user-friendly ride-sharing application, focusing on security and ease of use. Implemented features like real-time tracking, ride history, and user profiles.",
    imagePath: "ride.png",
  },
  {
    title: "Addis Ababa University",
    description:
      "Designed a responsive dashboard for a social media platform, focusing on user engagement and analytics. Implemented features like real-time notifications and user activity tracking.",
    imagePath: "AAU.png",
  },
  // Add more work items here
];

export default function WorkPage() {
  return (
    <div id="works" className="min-h-screen bg-brand-main relative top-5 overflow-hidden">
      {/* Main Content */}
      <main className="px-8 py-16">
        {/* WORKS Title */}
        <TitleShow title="WORKS" />

        {/* Some Design Works */}
        <div className="text-right mb-8">
          <p className="text-gray-600 text-lg">Some Design Works</p>
        </div>

        {/* Project Showcase */}
        {works.map((work) => (
          <ShowWork
            key={work.title}
            title={work.title}
            description={work.description}
            imagePath={work.imagePath}
          />
        ))}
      </main>
    </div>
  );
}

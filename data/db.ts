export interface Contact {
  phone: number;
  email: string;
  location?: string;
  telegram?: string;
  linkedIn?: string;
  twitter?: string;
  github?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  website?: string;
}
export interface User {
  name: string;
  image: string;
  image2: string;
  contact: Contact;
  description: string;
  job:
    | "Full Stack Web Developer"
    | "Front-End Developer"
    | "Back-End Developer"
    | "Digital Product Designer";
}

export interface Work {
  title: string;
  description: string;
  image: string;
  link: string;
  svgs: string[];
  caseStudy: string[];
}

export interface Data {
  user: User;
  works: Work[];
}

export const userData: Data[] = [
  {
    user: {
      name: "Nahom Dibaba",
      description:
        "I'm a UI/UX Designer driven by a genuine passion for solving complex user problems with elegant, intuitive solutions. My approach is rooted in deep user research and data-driven insights, which allows me to craft digital experiences that not only look great but also deliver measurable impact.",
      contact: {
        phone: 993448399,
        email: "nahom.dibaba@gmail.com",
        location: "Shashemane, Ethiopia",
        website: "nahomdibaba.dev",
      },
      image: "/assets/image/user/user.png",
      image2: "/assets/image/user/user1.png",
      job: "Digital Product Designer",
    } as User,
    works: [
      {
        title: "Ride Responsive App",
        description:
          "Created a user-friendly ride-sharing application, focusing on security and ease of use. Implemented features like real-time tracking, ride history, and user profiles.",
        image: "/assets/image/ride/ride.png",
        link: "ride-responsive-app-demo",
        svgs: [
          "/assets/image/ride/rideDetailMobile.svg",
          "/assets/image/ride/rideDetailPc.svg",
        ],
        caseStudy: [
          "/assets/image/ride/rideUpperCS.png",
          "/assets/image/ride/rideLowerCS.png",
        ],
      } as Work,
      {
        title: "E-commerce app",
        description:
          "I led the complete design lifecycle, from initial concept through to execution, encompassing responsive design, UI, and UX. This included key components like the login, navigation, and administrative pages.",
        image: "/assets/image/e-commerce/e-commerce.png",
        link: "e-commerce-app-demo",
        svgs: ["/assets/image/e-commerce/e-commerceDetail.svg"],
        caseStudy: [
          "/assets/image/e-commerce/e-commerceUpperCS.png",
          "/assets/image/e-commerce/e-commerceLowerCS.png",
        ],
      } as Work,
      {
        title: "Addis Ababa University App",
        description:
          "Designed a responsive dashboard for a social media platform, focusing on user engagement and analytics. Implemented features like real-time notifications and user activity tracking.",
        image: "/assets/image/ASTU/ASTU.png",
        link: "Adama-Science-and-Technology-University-App-demo",
        svgs: [
          "/assets/image/ASTU/ASTUDetailMobile.svg",
          "/assets/image/ASTU/ASTUDetailPc.svg",
        ],
        caseStudy: [
          "/assets/image/ASTU/ASTUUpperCS.png",
          "/assets/image/ASTU/ASTULowerCS.png",
        ],
      } as Work,
    ],
  },
];

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
}
export interface User {
  name: string;
  image: string;
  contact: Contact;
  job: "Developer" | "Designer";
}

export interface Work {
  title: string;
  description: string;
  image: string;
  link: string;
  svgs: string[];
}

export interface Data {
  user: User;
  works: Work[];
}

export const userData: Data[] = [
  {
    user: {
      name: "Nahom Dibaba",
      contact: {
        phone: 1234567890,
        email: "nahom.dibaba@gmail.com",
        location: "Shashemane, Ethiopia",
      },
      image: "/assets/image/users/nahom-dibaba.jpg",
      job: "Designer",
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
      } as Work,
      {
        title: "E-commerce app",
        description:
          "I led the complete design lifecycle, from initial concept through to execution, encompassing responsive design, UI, and UX. This included key components like the login, navigation, and administrative pages.",
        image: "/assets/image/e-commerce/e-commerce.png",
        link: "e-commerce-app-demo",
        svgs: ["/assets/image/e-commerce/e-commerceDetail.svg"],
      } as Work,
      {
        title: "Addis Ababa University App",
        description:
          "Designed a responsive dashboard for a social media platform, focusing on user engagement and analytics. Implemented features like real-time notifications and user activity tracking.",
        image: "/assets/image/AAU/AAU.png",
        link: "Addis-Ababa-University-App-demo",
        svgs: [
          "/assets/image/AAU/AAUDetailMobile.svg",
          "/assets/image/AAU/AAUDetailPc.svg",
        ],
      } as Work,
    ],
  },
];

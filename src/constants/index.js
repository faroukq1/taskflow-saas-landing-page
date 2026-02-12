import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  check,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How It Works",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Sign Up",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Log In",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [check, file02, searchMd, plusSquare];

export const notificationImages = [check, file02, plusSquare];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Kanban Boards",
    text: "Visualize and manage workflows with drag-and-drop boards for better task organization.",
    date: "June 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Time Tracking",
    text: "Track time spent on tasks and projects to improve productivity and billing.",
    date: "July 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Custom Workflows",
    text: "Allow teams to create custom automation rules for repetitive tasks.",
    date: "August 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integrations",
    text: "Connect with tools like Slack, Jira, and Google Workspace for seamless workflows.",
    date: "September 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With intuitive collaboration tools and enterprise-grade security, TaskFlow is the perfect solution for teams aiming to boost productivity.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integrations",
    text: collabText,
  },
  {
    id: "1",
    title: "Automated Workflows",
  },
  {
    id: "2",
    title: "Enterprise Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Essential task management for small teams",
    price: "0",
    features: [
      "Unlimited tasks and projects",
      "Basic reporting",
      "Email support",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced collaboration for growing teams",
    price: "19.99",
    features: [
      "All Basic features",
      "Advanced analytics",
      "Priority support",
      "API access",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom solutions for large organizations",
    price: null,
    features: [
      "All Premium features",
      "Dedicated account manager",
      "Custom integrations",
      "On-premise deployment",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Organize Tasks Efficiently",
    text: "Centralize all your projects and tasks in one place for easy access and management.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Boost Team Productivity",
    text: "Streamline workflows with automation and real-time updates to keep teams aligned.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Collaborate Anywhere",
    text: "Access projects from any device, ensuring remote teams stay connected.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Track Progress Visually",
    text: "Use charts and dashboards to monitor project timelines and milestones.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Secure Data Handling",
    text: "Enterprise-level security to protect sensitive project information.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Integrate with Favorites",
    text: "Connect TaskFlow with your favorite tools for a unified experience.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

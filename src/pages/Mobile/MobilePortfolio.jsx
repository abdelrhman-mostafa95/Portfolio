import { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import PortfolioHero from "../../components/PortfolioHero";
import AboutSection from "../../components/AboutSection";
import ProjectsSection from "../../components/ProjectsSection";
import FreelanceSection from "../../components/FreelanceSection";
import SkillsSection from "../../components/SkillsSection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import { useTheme } from "../../hooks/useTheme";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiAndroid,
  SiIos, // Changed from SiApple
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiMaterialdesign,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

// Skills data for Mobile Development
const skillCategories = [
  {
    title: "Mobile Development",
    icon: "",
    color: "#6366f1",
    skills: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Dart", icon: <SiDart /> },
      { name: "Android", icon: <SiAndroid /> },
      { name: "Bloc/Cubit" },
      { name: "Dio / http" },
      { name: "Provider" },
    ],
  },
  {
    title: "Backend & Services",
    icon: "",
    color: "#10b981",
    skills: [
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Supabase" },
      { name: "REST APIs", icon: "🔗" },
      { name: "Fundamentals of Node.js" },
    ],
  },
  {
    title: "Tools & Others",
    icon: "",
    color: "#f59e0b",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: <VscCode /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

const topSkills = [
  { name: "Flutter", level: 90 },
  { name: "Dart", level: 85 },
  { name: "Firebase", level: 80 },
  { name: "REST APIs", level: 85 },
  { name: "Git & GitHub", level: 85 },
  { name: "Responsive Design", level: 95 },
];

// Sample mobile projects data - Replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Codexa",
    description: `Codexa is an online learning platform that connects students and instructors in one interactive space.
Students can purchase courses, watch lessons, and rate both courses and instructors.
Instructors can create and manage courses, upload videos, set prices, and track student engagement.
The platform also includes a community where users can share posts, like, and comment.`,
    coverImage: "/codexa-1.png",
    videoUrl: "/codexa.mp4",
    techStack: [
      "Flutter",
      "Bloc/cubit",
      "Dio",
      "Sharedpreferences",
      "provider",
    ],
    repoUrl: "https://github.com/iti-frontend/Codexa-Mobile.git",
    demoUrl: "#",
    featured: false,
    features: [
      "Cross-platform support (iOS & Android)",
      "Modern and clean UI",
      "Dual user roles: Students and Instructors",
      "Course and instructor ratings & reviews",
      "Instructor dashboard to manage courses, pricing, and student insights",
    ],
  },
  {
    id: 2,
    title: "Task Manager",
    description: `Task Manager is a productivity application designed to help administrators manage teams efficiently.
Admins can assign tasks to employees, track task progress, and monitor attendance and check-in/check-out records.
Employees can update task statuses and submit attendance requests directly through the app.
All attendance and task updates are sent to the admin for review, approval, or rejection.`,
    coverImage: "/task-1.png",
    videoUrl: "/TaskManagment.mp4",
    techStack: ["Flutter", "Hive", "Provider"],
    repoUrl: "https://github.com/abdelrhman-mostafa95/Task-Management.git",
    demoUrl: "#",
    featured: false,
    features: [
      "Admin dashboard to assign and manage tasks",
      "Employee task list with real-time status updates",
      "Task status tracking (Pending, In Progress, Completed)",
      "Employee attendance with check-in and check-out",
    ],
  },
  {
    id: 3,
    title: "Islami App",
    description: `Islami App is a comprehensive Islamic application that includes the Holy Quran, Hadith, digital Tasbeeh, and Islamic radio.
The app offers a clean and easy-to-use interface with both light and dark themes for comfortable reading.
It is designed to help users stay connected to their daily worship anytime and anywhere.`,
    coverImage: "/islami-1.png",
    videoUrl: "/islami.mp4",
    techStack: ["Flutter", "Provider", "Localization"],
    repoUrl: "https://github.com/abdelrhman-mostafa95/Islami_app.git",
    demoUrl: "#",
    featured: false,
    features: [
      "Full Holy Quran with easy navigation",
      "Collection of authentic Hadiths",
      "Digital Tasbeeh (Sebha) counter",
      "Live Islamic Radio streaming",
      "Light and Dark themes",
    ],
  },
  // Add more projects here
];

// Freelance mobile projects data - Replace with your actual freelance work
const freelanceProjects = [
  {
    id: 1,
    title: "Nibras-University WebView App",
    description: `Nibras-University WebView App is a mobile application that provides seamless access to the university’s web platform through an integrated WebView.
The app supports essential device features such as location access, image and file uploads to ensure full functionality.
It automatically detects internet connectivity, pausing when the connection is lost and resuming smoothly once the internet is restored.`,
    coverImage: "/nubras-1.png",
    category: "",
    techStack: ["Flutter", "Web View", "Android"],
    deliverables: ["premision handling", "connectivity handling"],
    photos: [
      "/nubras-6.png",
      "/nubras-2.png",
      "/nubras-3.jpeg",
      "/nubras-4.jpeg",
      "/nubras-5.jpeg",
    ],
  },
  {
    id: 2,
    title: "HealthCare App Project",
    description: `Health Care App allows users to securely sign in and access available insurance companies in one place.
Users can add their insurance card, submit requests, or upload prescriptions to receive medications easily.
The app also enables users to track the status of their requests in real time for a smooth healthcare experience.`,
    coverImage: "/HealthCare-1.png",
    techStack: [
      "Flutter",
      "Animation",
      "Dio",
      "Sharedpreferences",
      "Provider",
      "Bloc/Cubit",
    ],
    deliverables: ["Full Mobile App", "State Management", "API Integration"],
    photos: [
      "/HealthCare-2.jpeg",
      "/HealthCare-3.jpeg",
      "/HealthCare-4.jpeg",
      "/HealthCare-5.jpeg",
      "/HealthCare-6.jpeg",
    ],
  },
  {
  id: 2,
  title: "FOOZ Glamour Spa App",
  description: `FOOZ is a home spa mobile application that connects clients with service providers for at-home beauty and spa services.
The app supports two types of users: client and provider.
Clients can browse and request specific services such as nails, choose a suitable time based on available slots, add their home location on the map, and complete payment through the app.
Providers receive booking requests, manage their availability, travel to the client’s address, complete the service, and receive ratings and reviews after each appointment.`,
  coverImage: "/fooz-4.png",
  category: "",
  techStack: ["Flutter", "Firebase"],
  deliverables: [
    "service booking system",
    "role-based users",
    "availability scheduling",
    "map location selection",
    "online payment",
    "rating and review system"
  ],
  video:"/fooz - client.mp4",
  photos: [
    "/fooz-1.png",
    "/fooz-2.png",
    "/fooz-3.png",
  ],
}
  // Add more freelance projects here
];

export default function MobilePortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { colors } = useTheme();

  return (
    <>
      <Navbar onMenuOpen={() => setMenuOpen(true)} />
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <section id="home">
        <PortfolioHero
          title="Abdel-Rahman Mostafa"
          subtitle="I build cross-platform mobile applications with Flutter, focusing on performance and great user experience."
          cta1="View Projects"
          cta2="Contact Me"
          cvLink="/Flutter-Developer_Abdelrahman.pdf"
          role="MOBILE DEVELOPER"
        />
      </section>

      <section id="about">
        <AboutSection
          title="About Me"
          description="I'm a Mobile Developer specializing in Flutter development. [Update this description with your actual background and experience in mobile development]"
          highlights={[
            "Cross-Platform Development",
            "Clean Architecture",
            "Performance Optimization",
            "Team Collaboration",
          ]}
          education={[
            {
              title: "B.Sc. Mechanical Engineering",
              subtitle:
                "Arab Academy for Science, Technology and Maritime Transport",
              date: "",
              logo: "/aast.png",
            },
          ]}
          internship={[
            {
              title: "ITI - Information Technology Institute",
              subtitle: "Frontend and Cross-Platform Development Track",
              date: "July 2025 - December 2025",
              logo: "/iti.png",
            },
          ]}
          courses={[
            {
              title: "Route Academy",
              subtitle: "Flutter Diploma",
              date: "2024",
              logo: "route.png",
            },
            {
              title: "itida",
              subtitle: "Freelancing Program",
              date: "2025",
              logo: "itida.png",
            },
          ]}
        />
      </section>

      {/* Unified Background Wrapper for Projects, Freelance & Contact */}
      <div style={{ backgroundColor: colors.primary }}>
        <section id="projects">
          <ProjectsSection
            title="My Mobile Projects"
            subtitle="Here are some of my recent mobile development projects. Click on any project to see more details."
            projects={projects}
            hideDemoButton={true}
          />
        </section>

        <section id="freelance">
          <FreelanceSection
            title="Freelance Mobile Projects"
            subtitle="Real-world mobile solutions built for real clients"
            projects={freelanceProjects}
            ratingImage="/rating.png"
            platformUrl="https://mostaql.com/u/yourprofile"
            platformName="Mostaql"
          />
        </section>

        <SkillsSection
          title="My Skills"
          subtitle="Technologies and tools I use to bring mobile ideas to life"
          categories={skillCategories}
          topSkills={topSkills}
        />

        <section id="contact">
          <ContactSection
            whatsapp="+201029454138"
            github="https://github.com/abdelrhman-mostafa95"
            linkedin="https://www.linkedin.com/in/abdel-rahman-mostafa-saad/"
            email="abdelrhman.mostafa1095@gmail.com"
          />
        </section>

        <Footer name="Abdel-Rahman Mostafa" />
      </div>
    </>
  );
}

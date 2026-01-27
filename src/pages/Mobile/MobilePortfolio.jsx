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
    title: "Mobile App 1",
    description: `A modern mobile application built with Flutter. [Update this description with your actual project details]`,
    coverImage: "/task-1.png",
    techStack: ["Flutter", "Dart", "Firebase"],
    repoUrl: "https://github.com/yourusername/project1",
    demoUrl: "#",
    featured: false,
    features: [
      "Cross-platform support (iOS & Android)",
      "Modern and clean UI",
      "Firebase integration",
      "Responsive design",
    ],
  },
  {
    id: 3,
    title: "Mobile App 1",
    description: `A modern mobile application built with Flutter. [Update this description with your actual project details]`,
    coverImage: "/islami-1.png",
    techStack: ["Flutter", "Dart", "Firebase"],
    repoUrl: "https://github.com/yourusername/project1",
    demoUrl: "#",
    featured: false,
    features: [
      "Cross-platform support (iOS & Android)",
      "Modern and clean UI",
      "Firebase integration",
      "Responsive design",
    ],
  },
  // Add more projects here
];

// Freelance mobile projects data - Replace with your actual freelance work
const freelanceProjects = [
  {
    id: 1,
    title: "Freelance Mobile App 1",
    description: `A freelance mobile application project. [Update this with your actual freelance project details]`,
    coverImage: "/nubras-1.png",
    category: "",
    techStack: ["Flutter", "Firebase", "Dart"],
    deliverables: ["Full Mobile App", "Admin Panel", "Cross Platform"],
    photos: ["/freelance-mobile-1.png"],
  },
  {
    id: 2,
    title: "Freelance Mobile App 1",
    description: `A freelance mobile application project. [Update this with your actual freelance project details]`,
    coverImage: "/HealthCare-1.png",
    category: "nubras-1.png",
    techStack: ["Flutter", "Firebase", "Dart"],
    deliverables: ["Full Mobile App", "Admin Panel", "Cross Platform"],
    photos: ["/freelance-mobile-1.png"],
  },
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
          cvLink="/mobile-cv.pdf"
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
              date: "2013 - 2018",
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

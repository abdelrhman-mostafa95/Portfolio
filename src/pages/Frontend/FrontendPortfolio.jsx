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
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiFramer,
    SiNodedotjs,
    SiFirebase,
    SiGit,
    SiGithub,
    SiFigma,
    SiVercel,
    SiNpm
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub } from "react-icons/fa";

const techStack = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "GitHub", icon: FaGithub },
];

// Skills data
const skillCategories = [
    {
        title: "Frontend",
        icon: "",
        color: "#6366f1",
        skills: [
            { name: "React", icon: <SiReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "HTML5", icon: <SiHtml5 /> },
            { name: "CSS3", icon: <SiCss3 /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Framer Motion", icon: <SiFramer /> },
        ]
    },
    {
        title: "Backend",
        icon: "",
        color: "#10b981",
        skills: [
            { name: "Fundementals of Node.js", icon: <SiNodedotjs /> },
            { name: "REST APIs", icon: "🔗" },
            { name: "Firebase", icon: <SiFirebase /> },
        ]
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
            { name: "Vercel", icon: <SiVercel /> },
            { name: "npm", icon: <SiNpm /> },
        ]
    },
];

const topSkills = [
    { name: "React & Next.js", level: 90 },
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "CSS & Tailwind", level: 90 },
    { name: "Node.js & Express", level: 75 },
    { name: "Git & GitHub", level: 85 },
    { name: "Responsive Design", level: 95 },
];


// Sample projects data - Replace with your actual projects
const projects = [
    {
        id: 1,
        title: "Pato Restaurant ( Restaurant Website UI )",
        description: `A visually engaging restaurant website designed to highlight the brand and menu experience.
        Features include a dynamic menu layout, blog section, gallery showcase, and contact page, all crafted with a modern and responsive UI.`,
        coverImage: "/pato.png",
        techStack: ["React", "Tailwind", "React-Router", "Framer-Motion"],
        repoUrl: "https://github.com/abdelrhman-mostafa95/Pato-Restaurant.git",
        demoUrl: "https://pato-restaurant-alpha.vercel.app/",
        featured: false,
        features: [
            "Responsive design across all devices",
            "Modern and clean UI",
            "Well-structured menu layout",
            "Blog section with readable content layout",
            "Image gallery showcase",
            "Smooth animations and transitions",
            "Consistent design system",
            "User-friendly navigation",
        ]
    },
    {
        id: 2,
        title: "WebUni YouTube courses ( E-Learning Website UI)",
        description: `A modern e-learning website UI designed for browsing and watching YouTube-based courses. The project focuses on clean layouts, intuitive navigation, and an engaging learning experience, built as a frontend-only interface.`,
        coverImage: "/Web.png",
        techStack: ["React",
            "JavaScript",
            "Tailwind CSS",
            "React Router",
            "Framer Motion",
            "Local Storage Authentication"],
        repoUrl: "https://github.com/abdelrhman-mostafa95/WebUni.git",
        demoUrl: "https://web-uni-zzxu.vercel.app/",
        features: [
            "Responsive e-learning website UI",
            "Course listing and browsing experience",
            "YouTube-based course layout",
            "Smooth page transitions and animations",
            "Client-side authentication using local storage",
            "Protected routes with React Router",
            "Clean and modern UI design",
            "Reusable React components",
            "State management using React Hooks",
            "Mobile-first and responsive layout"
        ]
    },
    {
        id: 3,
        title: "Burger Home Page & Menu Page",
        description: `A modern landing page for a burger restaurant featuring a visually appealing home section and a well-structured menu layout.
The project focuses on clean UI design, smooth interactions, and a fully responsive experience across devices.`,
        coverImage: "/burger.png",
        techStack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        repoUrl: "https://github.com/abdelrhman-mostafa95/Burger.git",
        demoUrl: "https://burger-t1z4.vercel.app/",
        features: [
            "Responsive layout using Bootstrap",
            "Modern and clean UI design",
            "Home and menu landing page sections",
            "Dark and light mode toggle",
            "Interactive UI elements with JavaScript",
            "Mobile-first and cross-browser support",
            "Clean and structured HTML & CSS",
            "Smooth UI interactions"
        ]
    },
];

// Freelance projects data - Replace with your actual freelance work
const freelanceProjects = [
    {
        id: 1,
        title: "Rifstage Entertainment Hub",
        description: `Rifstage is a modern entertainment platform that brings together music, YouTube video links, and written articles in one place.
The platform features an admin dashboard for managing content, while the website displays playlists, single tracks, video links, and articles in a clean and user-friendly interface.`,
        coverImage: "rifstage-1.png",
        category: "Entertainment Platform",
        techStack: ["Next.js", "Tailwind CSS", "JavaScript", "Supabase", "Framer Motion"],
        deliverables: [
            "Full Website",
            "Admin Panel",
            "Mobile Responsive"
        ],
        photos: [
            "/rifstage-2.png",
            "/rifstage-3.png",
            "/rifstage-4.png",
            "/rifstage-5.png",
            "/rifstage-6.png",
            "/rifstage-7.png",
            "/rifstage-8.png",
        ]
    },
    {
        id: 2,
        title: "HealthCare Platform",
        description: `A comprehensive admin dashboard designed to manage users, handle incoming requests and prescriptions, and respond directly to submissions.
The system allows creating companies with customizable fields that users can fill in to generate insurance cards, all managed through a structured and user-friendly interface.`,
        coverImage: "/HealthCare-1.png",
        category: "HealthCare Platform",
        techStack: ["React", "Tailwind", "Recharts", "Framer Motion"],
        deliverables: [
            "Responsive Design",
            "Contact Forms",
            "SEO Optimized",
            "Fast Loading"
        ],
        photos: [
            "/HealthCare-2.png",
            "/HealthCare-3.png"
        ]
    },
];



export default function FrontendPortfolio() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { colors } = useTheme();

    return (
        <>
            <Navbar onMenuOpen={() => setMenuOpen(true)} />
            <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

            <section id="home">
                <PortfolioHero
                    title="Abdel-Rahman Mostafa"
                    subtitle="I build modern, high-quality frontend applications focused on performance, clean architecture, and great user experience."
                    cta1="View Projects"
                    cta2="Contact Me"
                    cvLink="/frontend-cv.pdf"
                />
            </section>

            <section id="about">
                <AboutSection
                    title="About Me"
                    description="I'm a Frontend Developer with a strong engineering background, originally a Mechanical Engineer with over 5 years of professional experience that shaped my skills in leadership, teamwork, and problem-solving. After graduating from the ITI Frontend Development track in December 2025, I now combine an engineering mindset with modern frontend technologies to build clean, scalable, and user-focused web applications."
                    highlights={[
                        "Responsive & Mobile-First",
                        "Component Libraries",
                        "Performance Optimization",
                        "Team Collaboration",
                    ]}
                    education={[
                        {
                            title: "B.Sc. Mechanical Engineering",
                            subtitle: "Arab Academy for Science, Technology and Maritime Transport",
                            date: "2013 - 2018",
                            logo: "/aast.png"
                        }
                    ]}
                    internship={[
                        {
                            title: "ITI - Information Technology Institute",
                            subtitle: "Frontend and Cross-Platform Development Track",
                            date: "July 2025 - December 2025",
                            logo: "/iti.png"
                        }
                    ]}
                    courses={[
                        {
                            title: "Route Academy",
                            subtitle: "Flutter Diploma",
                            date: "2024",
                            logo: "route.png"
                        },
                        {
                            title: "itida",
                            subtitle: "Freelancing Program",
                            date: "2025",
                            logo: "itida.png"
                        },
                    ]}
                />
            </section>

            {/* Unified Background Wrapper for Projects, Freelance & Contact */}
            <div style={{ backgroundColor: colors.primary }}>
                <section id="projects">
                    <ProjectsSection
                        title="My Projects"
                        subtitle="Here are some of my recent web development projects. Click on any project to see more details."
                        projects={projects}
                    />
                </section>

                <section id="freelance">
                    <FreelanceSection
                        title="Freelance Projects"
                        subtitle="Real-world solutions built for real clients"
                        projects={freelanceProjects}
                        ratingImage="/rating.png"
                        platformUrl="https://mostaql.com/u/yourprofile"
                        platformName="Mostaql"
                    />
                </section>

                <SkillsSection
                    title="My Skills"
                    subtitle="Technologies and tools I use to bring ideas to life"
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

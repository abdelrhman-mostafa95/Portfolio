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

// Skills data
const skillCategories = [
    {
        title: "Frontend",
        icon: "🎨",
        color: "#6366f1",
        skills: [
            { name: "React", icon: "⚛️" },
            { name: "Next.js", icon: "▲" },
            { name: "TypeScript", icon: "📘" },
            { name: "JavaScript", icon: "🟨" },
            { name: "HTML5", icon: "🌐" },
            { name: "CSS3", icon: "🎨" },
            { name: "Tailwind CSS", icon: "💨" },
            { name: "Framer Motion", icon: "🎬" },
        ]
    },
    {
        title: "Backend",
        icon: "⚙️",
        color: "#10b981",
        skills: [
            { name: "Node.js", icon: "🟢" },
            { name: "Express", icon: "🚂" },
            { name: "MongoDB", icon: "🍃" },
            { name: "REST APIs", icon: "🔗" },
            { name: "Firebase", icon: "🔥" },
        ]
    },
    {
        title: "Tools & Others",
        icon: "🛠️",
        color: "#f59e0b",
        skills: [
            { name: "Git", icon: "📚" },
            { name: "GitHub", icon: "🐙" },
            { name: "VS Code", icon: "💻" },
            { name: "Figma", icon: "🎯" },
            { name: "Vercel", icon: "▲" },
            { name: "npm", icon: "📦" },
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
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with product catalog, shopping cart, and payment integration. Built with modern technologies for optimal performance.",
        coverImage: "/pato.png",
        techStack: ["React", "Next.js", "Tailwind", "Node.js"],
        repoUrl: "https://github.com/username/ecommerce",
        demoUrl: "https://ecommerce-demo.vercel.app",
        featured: true,
        features: [
            "Responsive design",
            "Shopping cart functionality",
            "Payment integration",
            "Admin dashboard"
        ]
    },
    {
        id: 2,
        title: "Dashboard App",
        description: "An interactive dashboard with real-time data visualization, charts, and analytics for business insights.",
        coverImage: "/projects/dashboard.png",
        techStack: ["React", "TypeScript", "Chart.js"],
        repoUrl: "https://github.com/username/dashboard",
        demoUrl: "https://dashboard-demo.vercel.app",
        features: [
            "Real-time data updates",
            "Interactive charts",
            "Dark/Light mode"
        ]
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A beautiful portfolio website showcasing projects and skills with smooth animations and modern design.",
        coverImage: "/projects/portfolio.png",
        techStack: ["React", "Framer Motion", "Tailwind"],
        repoUrl: "https://github.com/username/portfolio",
        demoUrl: "https://portfolio-demo.vercel.app",
    },
];

// Freelance projects data - Replace with your actual freelance work
const freelanceProjects = [
    {
        id: 1,
        title: "Client E-Commerce Store",
        description: "Built a complete e-commerce solution for a retail business. Included product management, inventory tracking, and order processing systems.",
        coverImage: "/freelance/project1.png",
        category: "E-Commerce",
        techStack: ["React", "Node.js", "MongoDB", "Stripe"],
        deliverables: [
            "Full Website",
            "Admin Panel",
            "Payment Integration",
            "Mobile Responsive"
        ]
    },
    {
        id: 2,
        title: "Business Landing Page",
        description: "Designed and developed a modern landing page for a startup company with animations and lead generation forms.",
        coverImage: "/freelance/project2.png",
        category: "Landing Page",
        techStack: ["React", "Tailwind", "Framer Motion"],
        deliverables: [
            "Responsive Design",
            "Contact Forms",
            "SEO Optimized",
            "Fast Loading"
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

            <PortfolioHero
                title="Abdel-Rahman Mostafa"
                subtitle="I build modern, high-quality frontend applications focused on performance, clean architecture, and great user experience."
                cta1="View Projects"
                cta2="Contact Me"
            />

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
                        title: "ITI - Frontend Development",
                        subtitle: "Information Technology Institute",
                        date: "Sep 2025 - Dec 2025"
                    },
                    {
                        title: "B.Sc. Mechanical Engineering",
                        subtitle: "Faculty of Engineering",
                        date: "2013 - 2018"
                    }
                ]}
                internship={[
                    {
                        title: "Frontend Developer Intern",
                        subtitle: "Tech Company Name",
                        date: "Jan 2026 - Present"
                    }
                ]}
                courses={[
                    {
                        title: "React - The Complete Guide",
                        subtitle: "Udemy - Maximilian Schwarzmüller",
                        date: "2025"
                    },
                    {
                        title: "JavaScript Algorithms & DS",
                        subtitle: "freeCodeCamp",
                        date: "2025"
                    },
                    {
                        title: "Next.js & React",
                        subtitle: "Udemy",
                        date: "2025"
                    }
                ]}
            />

            {/* Unified Background Wrapper for Projects, Freelance & Contact */}
            <div style={{ backgroundColor: colors.primary }}>
                <ProjectsSection
                    title="My Projects"
                    subtitle="Here are some of my recent web development projects. Click on any project to see more details."
                    projects={projects}
                />

                <FreelanceSection
                    title="Freelance Projects"
                    subtitle="Real-world solutions built for real clients"
                    projects={freelanceProjects}
                    ratingImage="/rating.png"
                    platformUrl="https://mostaql.com/u/yourprofile"
                    platformName="Mostaql"
                />

                <SkillsSection
                    title="My Skills"
                    subtitle="Technologies and tools I use to bring ideas to life"
                    categories={skillCategories}
                    topSkills={topSkills}
                />

                <ContactSection
                    whatsapp="201234567890"
                    github="https://github.com/yourusername"
                    linkedin="https://linkedin.com/in/yourusername"
                    email="your.email@example.com"
                />

                <Footer name="Abdel-Rahman Mostafa" />
            </div>
        </>
    );
}

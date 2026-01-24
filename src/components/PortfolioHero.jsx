import { motion } from "framer-motion";
import Button from "../components/Button";
import Container from "../components/Container";
import colors from "../constants/colors";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiRedux } from "react-icons/si";

// Tech stack data with icons
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

// Floating particles component
const FloatingParticle = ({ delay, x, y, size }) => (
    <motion.div
        className="absolute rounded-full"
        style={{
            width: size,
            height: size,
            left: x,
            top: y,
            backgroundColor: colors.accent,
        }}
        animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
        }}
        transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    />
);

export default function PortfolioHero({ title, subtitle, cta1, cta2 }) {
    return (
        <section
            className="min-h-screen relative overflow-hidden pt-20 lg:pt-0"
            style={{ backgroundColor: colors.primary }}
        >
            {/* Animated Decorative Elements */}
            <motion.div
                className="absolute top-20 left-20 w-72 h-72 rounded-full opacity-10 blur-3xl"
                style={{ backgroundColor: colors.accent }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
                style={{ backgroundColor: colors.secondary }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Floating Particles */}
            <FloatingParticle delay={0} x="10%" y="20%" size={8} />
            <FloatingParticle delay={0.5} x="85%" y="15%" size={6} />
            <FloatingParticle delay={1} x="70%" y="70%" size={10} />
            <FloatingParticle delay={1.5} x="15%" y="60%" size={7} />
            <FloatingParticle delay={2} x="50%" y="80%" size={5} />
            <FloatingParticle delay={2.5} x="90%" y="50%" size={8} />

            <Container className="relative z-10 min-h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                    {/* Text Content */}
                    <motion.div
                        className="order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            className="flex items-center gap-3 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.div
                                className="w-12 h-1 rounded-full"
                                style={{ backgroundColor: colors.accent }}
                                animate={{ width: [48, 64, 48] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <p
                                className="tracking-widest text-sm font-medium"
                                style={{ color: colors.accent }}
                            >
                                FRONTEND DEVELOPER
                            </p>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                            style={{ color: colors.background }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl mb-10 leading-relaxed max-w-xl"
                            style={{ color: colors.accent }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            {subtitle}
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <Button>{cta1}</Button>
                            <Button variant="outline">{cta2}</Button>
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div
                            className="mt-12 pt-8 border-t"
                            style={{ borderColor: `${colors.secondary}50` }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <p
                                className="text-sm mb-4 tracking-wide"
                                style={{ color: colors.accent }}
                            >
                                TECH STACK
                            </p>
                            <div className="flex gap-4 flex-wrap">
                                {techStack.map((tech, i) => (
                                    <motion.span
                                        key={tech.name}
                                        className="px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
                                        style={{
                                            backgroundColor: `${colors.secondary}40`,
                                            color: colors.background
                                        }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + i * 0.1 }}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: colors.secondary
                                        }}
                                    >
                                        <tech.icon className="text-lg" />
                                        {tech.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        className="flex justify-center lg:justify-end order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative">
                            {/* Background Circle */}
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    backgroundColor: colors.background,
                                    transform: "translate(20px, 20px)"
                                }}
                                animate={{
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Pulsing Glow */}
                            <motion.div
                                className="absolute -inset-8 rounded-full blur-2xl"
                                style={{ backgroundColor: colors.accent }}
                                animate={{
                                    opacity: [0.1, 0.25, 0.1],
                                    scale: [0.95, 1.05, 0.95],
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Decorative Ring */}
                            <motion.div
                                className="absolute -inset-4 rounded-full opacity-30"
                                style={{
                                    border: `3px solid ${colors.accent}`,
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Second Decorative Ring - Counter Rotate */}
                            <motion.div
                                className="absolute -inset-8 rounded-full opacity-20"
                                style={{
                                    border: `2px dashed ${colors.background}`,
                                }}
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Profile Image Container */}
                            <motion.div
                                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden"
                                style={{
                                    border: `4px solid ${colors.accent}`,
                                    boxShadow: `0 25px 50px -12px ${colors.primary}80`,
                                    backgroundColor: colors.accent
                                }}
                                whileHover={{ scale: 1.02 }}
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                    scale: { duration: 0.3 }
                                }}
                            >
                                <img
                                    src="/profile.png"
                                    alt="Profile"
                                    className="w-80 h-full mt-7 md:m-7"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}


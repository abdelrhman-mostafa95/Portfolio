import { motion } from "framer-motion";
import Container from "../../../components/Container";
import Logo from "../../../components/Logo";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import colors from "../../../constants/colors";
import { FaLaptopCode, FaMobileAlt, FaArrowRight } from "react-icons/fa";

// Floating particle component
const FloatingParticle = ({ delay, size, x, y }) => (
    <motion.div
        className="absolute rounded-full"
        style={{
            width: size,
            height: size,
            left: x,
            top: y,
            backgroundColor: colors.accent,
            opacity: 0.3,
        }}
        animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
        }}
        transition={{
            duration: 4 + Math.random() * 2,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
        }}
    />
);

// Portfolio Card Component
const PortfolioCard = ({ title, description, icon: Icon, onClick, delay }) => (
    <motion.div
        className="relative group cursor-pointer p-6 md:p-8 rounded-3xl overflow-hidden"
        style={{
            backgroundColor: `${colors.secondary}40`,
            border: `1px solid ${colors.accent}30`,
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6, type: "spring" }}
        whileHover={{
            scale: 1.02,
            y: -5,
        }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
    >
        {/* Animated border glow */}
        <motion.div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
                background: `linear-gradient(135deg, ${colors.accent}40, transparent, ${colors.accent}40)`,
            }}
        />

        {/* Background glow on hover */}
        <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{
                background: `radial-gradient(circle at 50% 50%, ${colors.accent}20, transparent 70%)`,
            }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-4">
            {/* Icon */}
            <motion.div
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${colors.accent}30` }}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
            >
                <Icon
                    className="text-3xl md:text-4xl"
                    style={{ color: colors.accent }}
                />
            </motion.div>

            {/* Title */}
            <h3
                className="text-xl md:text-2xl font-bold"
                style={{ color: colors.background }}
            >
                {title}
            </h3>

            {/* Description */}
            <p
                className="text-sm md:text-base opacity-80"
                style={{ color: colors.accent }}
            >
                {description}
            </p>

            {/* Arrow */}
            <motion.div
                className="flex items-center gap-2 mt-2"
                style={{ color: colors.accent }}
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
            >
                <span className="text-sm font-medium">Explore</span>
                <FaArrowRight className="text-sm" />
            </motion.div>
        </div>

        {/* Corner decorations */}
        <div
            className="absolute top-0 right-0 w-20 h-20 opacity-20"
            style={{
                background: `radial-gradient(circle at 100% 0%, ${colors.accent}, transparent 70%)`,
            }}
        />
    </motion.div>
);

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section
            className="min-h-screen bg-cover bg-center relative overflow-hidden"
            style={{ backgroundColor: colors.primary }}
        >
            {/* Accent border on top */}
            <div
                className="absolute top-0 left-0 right-0 h-2"
                style={{ backgroundColor: colors.accent }}
            />

            {/* Animated Background Blobs */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: colors.accent }}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-60 h-60 md:w-80 md:h-80 rounded-full blur-3xl opacity-15"
                style={{ backgroundColor: colors.secondary }}
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -20, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
                style={{ backgroundColor: colors.background }}
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating Particles */}
            <FloatingParticle delay={0} size={8} x="10%" y="20%" />
            <FloatingParticle delay={0.5} size={6} x="85%" y="15%" />
            <FloatingParticle delay={1} size={10} x="75%" y="70%" />
            <FloatingParticle delay={1.5} size={5} x="20%" y="75%" />
            <FloatingParticle delay={2} size={7} x="50%" y="10%" />
            <FloatingParticle delay={2.5} size={6} x="90%" y="50%" />

            <Container className="relative z-10 min-h-screen flex flex-col justify-center py-20">

                {/* Logo Section */}
                <motion.div
                    className="flex flex-col items-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Logo with glow effect */}
                    <div className="relative">

                        {/* Inner pulsing glow */}
                        <motion.div
                            className="absolute -inset-4 md:-inset-6 rounded-full blur-xl"
                            style={{ backgroundColor: colors.accent }}
                            animate={{
                                opacity: [0.2, 0.4, 0.2],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Floating Logo */}
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Logo className="w-32 md:w-40 relative z-10" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Typing Text */}
                <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <h1
                        className="text-2xl md:text-4xl font-bold mb-4"
                        style={{ color: colors.background }}
                    >
                        <Typewriter
                            words={["Crafting code. Building experiences."]}
                            cursor
                            cursorStyle="_"
                            typeSpeed={80}
                            deleteSpeed={0}
                            delaySpeed={1000000}
                        />
                    </h1>
                    <motion.p
                        className="text-base md:text-lg opacity-80"
                        style={{ color: colors.accent }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.8, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        Choose your journey below
                    </motion.p>
                </motion.div>

                {/* Portfolio Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto w-full mt-8">
                    <PortfolioCard
                        title="Frontend Portfolio"
                        description="Web applications, responsive designs, and modern UI/UX"
                        icon={FaLaptopCode}
                        onClick={() => navigate("/frontend")}
                        delay={0.8}
                    />
                    <PortfolioCard
                        title="Mobile Portfolio"
                        description="Cross-platform mobile apps with Flutter & React Native"
                        icon={FaMobileAlt}
                        onClick={() => navigate("/mobile")}
                        delay={1}
                    />
                </div>


            </Container>
        </section>
    );
}

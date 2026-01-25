import { motion } from "framer-motion";
import Container from "../components/Container";
import { useTheme } from "../hooks/useTheme";
import { FaStar, FaExternalLinkAlt, FaBriefcase, FaCheckCircle } from "react-icons/fa";
import colors from "../constants/colors";

// Freelance Project Card
const FreelanceCard = ({ project, index }) => {
    const { colors } = useTheme();

    return (
        <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.7, type: "spring" }}
        >
            {/* Main Card */}
            <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                    backgroundColor: colors.background,
                    boxShadow: `0 25px 80px ${colors.primary}40`,
                }}
            >
                {/* Cover Image with Overlay */}
                <div className="relative h-56 md:h-72 overflow-hidden">
                    <motion.img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                    />

                    {/* Gradient Overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to top, ${colors.background} 0%, ${colors.background}80 30%, transparent 100%)`
                        }}
                    />

                    {/* Client Work Badge */}
                    <motion.div
                        className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md"
                        style={{
                            backgroundColor: `${colors.primary}90`,
                            color: colors.background,
                        }}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <FaBriefcase className="text-sm" />
                        <span className="text-xs font-bold">Client Project</span>
                    </motion.div>

                    {/* Category Tag */}
                    {project.category && (
                        <div
                            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md"
                            style={{
                                backgroundColor: `${colors.accent}90`,
                                color: colors.primary
                            }}
                        >
                            {project.category}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 -mt-8 relative">
                    {/* Title */}
                    <motion.h3
                        className="text-2xl md:text-3xl font-bold mb-3"
                        style={{ color: colors.primary }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {project.title}
                    </motion.h3>

                    {/* Description */}
                    <p
                        className="text-sm md:text-base leading-relaxed mb-6 opacity-80"
                        style={{ color: colors.secondary }}
                    >
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    {project.techStack && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.techStack.map((tech, i) => (
                                <motion.span
                                    key={i}
                                    className="px-3 py-1 rounded-lg text-xs font-medium"
                                    style={{
                                        backgroundColor: `${colors.accent}40`,
                                        color: colors.primary,
                                    }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.05 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    )}

                    {/* Deliverables */}
                    {project.deliverables && (
                        <div className="grid grid-cols-2 gap-2">
                            {project.deliverables.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center gap-2 text-xs"
                                    style={{ color: colors.secondary }}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                >
                                    <FaCheckCircle style={{ color: colors.primary }} />
                                    <span>{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at 50% 0%, ${colors.primary}20, transparent 60%)`
                    }}
                />
            </div>
        </motion.div>
    );
};

// Rating Badge Component  
const RatingBadge = ({ ratingImage, platformUrl, platformName }) => (
    <motion.a
        href={platformUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-4 p-4 md:p-6 rounded-2xl cursor-pointer"
        style={{
            backgroundColor: colors.background,
            border: `2px solid ${colors.primary}40`,
            boxShadow: `0 15px 50px ${colors.primary}30`,
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring" }}
        whileHover={{
            scale: 1.05,
            borderColor: colors.primary,
            boxShadow: `0 20px 60px ${colors.primary}40`,
        }}
        whileTap={{ scale: 0.98 }}
    >
        {/* Rating Image */}
        {ratingImage && (
            <img
                src={ratingImage}
                alt="Rating"
                className="h-12 md:h-16 w-auto object-contain"
            />
        )}

        {/* Platform Info */}
        <div className="flex flex-col">
            <span
                className="text-sm opacity-70"
                style={{ color: colors.secondary }}
            >
                View my profile on
            </span>
            <span
                className="text-lg md:text-xl font-bold"
                style={{ color: colors.primary }}
            >
                {platformName}
            </span>
        </div>

        {/* Arrow */}
        <motion.div
            className="ml-4 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: colors.primary }}
            whileHover={{ scale: 1.1 }}
        >
            <FaExternalLinkAlt style={{ color: colors.background }} />
        </motion.div>
    </motion.a>
);

export default function FreelanceSection({
    title = "Freelance Work",
    subtitle = "Client projects delivered with excellence",
    projects = [],
    ratingImage = null,
    platformUrl = "",
    platformName = "Freelance Platform",
}) {
    const { colors } = useTheme();

    return (
        <section
            className="py-20 md:py-32 relative overflow-hidden"
            style={{ backgroundColor: colors.primary }}
        >
            {/* Background Decorations */}
            <motion.div
                className="absolute top-20 right-0 w-80 h-80 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: colors.background }}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 left-0 w-60 h-60 rounded-full blur-3xl opacity-15"
                style={{ backgroundColor: colors.accent }}
                animate={{
                    scale: [1, 1.3, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <Container className="relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            backgroundColor: `${colors.background}15`,
                            border: `1px solid ${colors.accent}30`
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <FaStar style={{ color: colors.accent }} />
                        <span
                            className="text-sm font-medium tracking-wide"
                            style={{ color: colors.accent }}
                        >
                            FREELANCE PORTFOLIO
                        </span>
                        <FaStar style={{ color: colors.accent }} />
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ color: colors.background }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                        style={{ color: colors.accent }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        {subtitle}
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-16">
                    {projects.map((project, index) => (
                        <FreelanceCard
                            key={project.id || index}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {projects.length === 0 && (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <p style={{ color: colors.accent }}>
                            Freelance projects coming soon...
                        </p>
                    </motion.div>
                )}

                {/* Rating & Platform Link */}
                {(ratingImage || platformUrl) && (
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <RatingBadge
                            ratingImage={ratingImage}
                            platformUrl={platformUrl}
                            platformName={platformName}
                        />
                    </motion.div>
                )}
            </Container>
        </section>
    );
}

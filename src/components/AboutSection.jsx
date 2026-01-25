import { motion } from "framer-motion";
import Container from "../components/Container";
import { useTheme } from "../hooks/useTheme";

// Timeline Card Component for Education, Internship, Courses
const TimelineCard = ({ icon, title, items, delay, accentColor, colors }) => (
    <motion.div
        className="relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
    >
        {/* Card */}
        <motion.div
            className="p-6 rounded-2xl relative overflow-hidden backdrop-blur-sm"
            style={{
                background: `linear-gradient(135deg, ${colors.background}ee 0%, ${colors.accent}15 100%)`,
                border: `1px solid ${colors.accent}30`,
                boxShadow: `0 8px 32px ${colors.primary}15`
            }}
            whileHover={{
                y: -8,
                boxShadow: `0 20px 50px ${accentColor}30`,
                borderColor: `${accentColor}60`,
                transition: { duration: 0.3 }
            }}
        >
            {/* Animated Glow */}
            <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl"
                style={{ backgroundColor: accentColor }}
                animate={{
                    opacity: [0.1, 0.25, 0.1],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Header */}
            <div className="flex items-center gap-4 mb-5 relative z-10">
                <motion.div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                    style={{
                        backgroundColor: `${accentColor}20`,
                        border: `2px solid ${accentColor}50`
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    {icon}
                </motion.div>
                <h3
                    className="text-xl md:text-2xl font-bold"
                    style={{ color: colors.primary }}
                >
                    {title}
                </h3>
            </div>

            {/* Items */}
            <div className="space-y-4 relative z-10">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: delay + 0.1 + index * 0.1 }}
                    >
                        {/* Timeline Dot */}
                        <div className="flex flex-col items-center">
                            <motion.div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: accentColor }}
                                animate={{
                                    scale: [1, 1.3, 1],
                                    boxShadow: [
                                        `0 0 0 0 ${accentColor}40`,
                                        `0 0 0 8px ${accentColor}00`,
                                        `0 0 0 0 ${accentColor}40`,
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                            />
                            {index < items.length - 1 && (
                                <motion.div
                                    className="w-0.5 flex-1 min-h-[40px]"
                                    style={{ backgroundColor: `${accentColor}30` }}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: delay + 0.2 + index * 0.1, duration: 0.4 }}
                                />
                            )}
                        </div>

                        {/* Content */}
                        <motion.div
                            className="flex-1 pb-4"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h4
                                className="font-semibold text-base md:text-lg"
                                style={{ color: colors.primary }}
                            >
                                {item.title}
                            </h4>
                            {item.subtitle && (
                                <p
                                    className="text-sm mt-1"
                                    style={{ color: accentColor }}
                                >
                                    {item.subtitle}
                                </p>
                            )}
                            {item.date && (
                                <p
                                    className="text-xs mt-1 opacity-70"
                                    style={{ color: colors.secondary }}
                                >
                                    📅 {item.date}
                                </p>
                            )}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </motion.div>
);

export default function AboutSection({
    title = "About Me",
    description,
    highlights = [],
    education = [],
    internship = [],
    courses = []
}) {
    const { colors } = useTheme();

    return (
        <section
            className="py-20 md:py-32 relative overflow-hidden"
            style={{ backgroundColor: colors.background }}
        >
            {/* Animated Decorative Blobs */}
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: colors.accent }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.25, 0.1],
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl"
                style={{ backgroundColor: colors.secondary }}
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -20, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl"
                style={{ backgroundColor: colors.primary }}
                animate={{
                    scale: [1, 1.4, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            <Container className="relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.div
                            className="w-12 h-1 rounded-full"
                            style={{ backgroundColor: colors.primary }}
                            animate={{ width: [48, 64, 48] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <p
                            className="tracking-widest text-sm font-medium"
                            style={{ color: colors.secondary }}
                        >
                            GET TO KNOW ME
                        </p>
                        <motion.div
                            className="w-12 h-1 rounded-full"
                            style={{ backgroundColor: colors.primary }}
                            animate={{ width: [48, 64, 48] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        />
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold"
                        style={{ color: colors.primary }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        {title}
                    </motion.h2>
                </motion.div>

                {/* Description Section */}
                <motion.div
                    className="max-w-4xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.p
                        className="text-lg md:text-xl leading-relaxed text-center mb-8"
                        style={{ color: colors.secondary }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {description}
                    </motion.p>

                    {/* Highlights */}
                    {highlights.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-3">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="px-4 py-2 rounded-full text-sm"
                                    style={{
                                        backgroundColor: `${colors.primary}15`,
                                        border: `1px solid ${colors.primary}30`,
                                        color: colors.primary
                                    }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: `${colors.primary}25`,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    ✓ {item}
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Education, Internship, Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Education */}
                    {education.length > 0 && (
                        <TimelineCard
                            icon="🎓"
                            title="Education"
                            items={education}
                            delay={0.3}
                            accentColor="#6366f1"
                            colors={colors}
                        />
                    )}

                    {/* Internship */}
                    {internship.length > 0 && (
                        <TimelineCard
                            icon="💼"
                            title="Internship"
                            items={internship}
                            delay={0.4}
                            accentColor="#10b981"
                            colors={colors}
                        />
                    )}

                    {/* Courses */}
                    {courses.length > 0 && (
                        <TimelineCard
                            icon="📚"
                            title="Courses"
                            items={courses}
                            delay={0.5}
                            accentColor="#f59e0b"
                            colors={colors}
                        />
                    )}
                </div>
            </Container>
        </section>
    );
}

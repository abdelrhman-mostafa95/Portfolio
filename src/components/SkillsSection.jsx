import { motion } from "framer-motion";
import Container from "../components/Container";
import { useTheme } from "../hooks/useTheme";
import { darkColors, lightColors } from "../context/ThemeContext";

// Skill Category Card
const SkillCategory = ({ title, icon, skills, delay, accentColor, invertedColors }) => {
    const colors = invertedColors;

    return (
        <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        >
            <motion.div
                className="p-6 md:p-8 rounded-3xl relative overflow-hidden h-full"
                style={{
                    backgroundColor: colors.background,
                    boxShadow: `0 20px 60px ${colors.primary}30`,
                }}
                whileHover={{
                    y: -10,
                    boxShadow: `0 30px 80px ${colors.primary}40`,
                }}
                transition={{ duration: 0.3 }}
            >
                {/* Animated Glow */}
                <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ backgroundColor: accentColor }}
                />

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    <h3
                        className="text-xl md:text-2xl font-bold"
                        style={{ color: colors.primary }}
                    >
                        {title}
                    </h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: delay + 0.1 + index * 0.05 }}
                        >
                            <motion.div
                                className="px-4 py-2 rounded-xl flex items-center gap-2 cursor-default"
                                style={{
                                    border: `1px solid ${colors.primary}20`,
                                }}
                                whileHover={{
                                    scale: 1.08,
                                    backgroundColor: `${accentColor}25`,
                                    borderColor: accentColor,
                                    boxShadow: `0 5px 20px ${accentColor}30`,
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <span
                                    className="text-sm font-medium"
                                    style={{ color: colors.primary }}
                                >
                                    {skill.name}
                                </span>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

// Single Skill Bar (Alternative display)
const SkillBar = ({ skill, index, delay, invertedColors }) => {
    const colors = invertedColors;

    return (
        <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + index * 0.1, duration: 0.5 }}
        >
            <div className="flex justify-between mb-2">
                <span
                    className="font-medium text-sm"
                    style={{ color: colors.background }}
                >
                    {skill.name}
                </span>
                <span
                    className="text-sm"
                    style={{ color: colors.accent }}
                >
                    {skill.level}%
                </span>
            </div>
            <div
                className="h-2 rounded-full overflow-hidden"
                style={{ backgroundColor: `${colors.background}20` }}
            >
                <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: colors.accent }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
};

export default function SkillsSection({
    title = "My Skills",
    subtitle = "Technologies and tools I work with",
    categories = [],
    topSkills = [],
}) {
    const { isDark } = useTheme();

    // Invert colors for Skills section only
    const colors = isDark ? lightColors : darkColors;

    return (
        <section
            className="py-20 md:py-32 relative overflow-hidden"
            style={{ backgroundColor: colors.background }}
        >
            {/* Background Decorations */}
            <motion.div
                className="absolute top-20 left-0 w-80 h-80 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: colors.primary }}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-0 w-60 h-60 rounded-full blur-3xl opacity-15"
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
                            EXPERTISE
                        </p>
                        <motion.div
                            className="w-12 h-1 rounded-full"
                            style={{ backgroundColor: colors.primary }}
                            animate={{ width: [48, 64, 48] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        />
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ color: colors.primary }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        className="text-lg max-w-2xl mx-auto"
                        style={{ color: colors.secondary }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        {subtitle}
                    </motion.p>
                </motion.div>

                {/* Skill Categories Grid */}
                {categories.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
                        {categories.map((category, index) => (
                            <SkillCategory
                                key={index}
                                title={category.title}
                                icon={category.icon}
                                skills={category.skills}
                                delay={0.2 + index * 0.1}
                                accentColor={category.color || colors.primary}
                                invertedColors={colors}
                            />
                        ))}
                    </div>
                )}
            </Container>
        </section>
    );
}

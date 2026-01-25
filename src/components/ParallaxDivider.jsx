import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import colors from "../constants/colors";

export default function ParallaxDivider({
    title = "What's Next?",
    subtitle = "Discover more of my work",
    backgroundImage = null,
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <section
            ref={ref}
            className="relative h-[50vh] md:h-[60vh] overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: colors.secondary }}
        >
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 w-full h-[140%] -top-[20%]"
                style={{ y }}
            >
                {backgroundImage ? (
                    <img
                        src={backgroundImage}
                        alt="Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                ) : (
                    <div
                        className="w-full h-full"
                        style={{
                            background: `
                                radial-gradient(ellipse at 20% 50%, ${colors.accent}30 0%, transparent 50%),
                                radial-gradient(ellipse at 80% 50%, ${colors.primary}50 0%, transparent 50%),
                                linear-gradient(180deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.primary} 100%)
                            `
                        }}
                    />
                )}
            </motion.div>

            {/* Decorative Lines */}
            <motion.div
                className="absolute left-0 right-0 top-0 h-px"
                style={{
                    background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
                    opacity
                }}
            />
            <motion.div
                className="absolute left-0 right-0 bottom-0 h-px"
                style={{
                    background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
                    opacity
                }}
            />

            {/* Floating Elements */}
            <motion.div
                className="absolute top-1/4 left-10 w-2 h-2 rounded-full"
                style={{ backgroundColor: colors.accent }}
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 right-16 w-3 h-3 rounded-full"
                style={{ backgroundColor: colors.accent }}
                animate={{
                    y: [0, 20, 0],
                    opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />

            {/* Content */}
            <motion.div
                className="relative z-10 text-center px-4"
                style={{ opacity, scale }}
            >
                {/* Decorative element */}
                <motion.div
                    className="flex items-center justify-center gap-4 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="w-16 md:w-24 h-0.5"
                        style={{ backgroundColor: colors.accent }}
                        animate={{ scaleX: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                    <div
                        className="w-3 h-3 rotate-45"
                        style={{ backgroundColor: colors.accent }}
                    />
                    <motion.div
                        className="w-16 md:w-24 h-0.5"
                        style={{ backgroundColor: colors.accent }}
                        animate={{ scaleX: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    />
                </motion.div>

                <motion.h2
                    className="text-3xl md:text-5xl font-bold mb-4"
                    style={{ color: colors.background }}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {title}
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl"
                    style={{ color: colors.accent }}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 0.8 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {subtitle}
                </motion.p>
            </motion.div>

            {/* Animated gradient overlay */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `linear-gradient(180deg, ${colors.primary}80 0%, transparent 20%, transparent 80%, ${colors.primary}80 100%)`
                }}
            />
        </section>
    );
}

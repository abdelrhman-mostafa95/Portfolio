import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../components/Logo";
import { useTheme } from "../hooks/useTheme";

export default function Navbar({ onMenuOpen }) {
    const [scrolled, setScrolled] = useState(false);
    const { isDark, colors } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50"
        >
            {/* Accent border on top */}
            <motion.div
                className="h-2"
                style={{ backgroundColor: colors.accent }}
            />

            {/* Main navbar content */}
            <div className="flex justify-between items-center p-4 md:p-6">

                {/* Logo with individual blur background */}
                <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    animate={{
                        scale: scrolled ? 0.6 : 1,
                    }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                >
                    {/* Background behind logo */}
                    <motion.div
                        className="absolute -inset-3 rounded-2xl -z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: scrolled ? 1 : 0,
                            scale: scrolled ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                            backgroundColor: colors.accent,
                            boxShadow: `0 8px 32px ${colors.primary}40`,
                            border: `1px solid ${colors.primary}20`,
                        }}
                    />
                    {/* White logo when not scrolled AND dark mode, or scrolled in light mode */}
                    <motion.div
                        animate={{ opacity: (scrolled && isDark) || (!scrolled && !isDark) ? 0 : 1 }}
                        transition={{ duration: 0.2 }}
                        style={{ position: ((scrolled && isDark) || (!scrolled && !isDark)) ? 'absolute' : 'relative' }}
                    >
                        <Logo className="w-24 md:w-28" src="/logo-white.png" />
                    </motion.div>
                    {/* Blue logo when scrolled in dark mode OR not scrolled in light mode */}
                    <motion.div
                        animate={{ opacity: (scrolled && isDark) || (!scrolled && !isDark) ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ position: ((scrolled && isDark) || (!scrolled && !isDark)) ? 'relative' : 'absolute', top: 0, left: 0 }}
                    >
                        <Logo className="w-24 md:w-28" src="/logo-blue.png" />
                    </motion.div>
                </motion.div>

                {/* Menu Button with individual blur background */}
                <motion.button
                    onClick={onMenuOpen}
                    className="flex items-center gap-2 md:gap-3 px-4 py-2.5 rounded-xl cursor-pointer relative"
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Accent background when scrolled */}
                    <motion.div
                        className="absolute inset-0 rounded-xl -z-10"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: scrolled ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                            backgroundColor: colors.accent,
                            boxShadow: `0 8px 32px ${colors.primary}40`,
                            border: `1px solid ${colors.primary}20`,
                        }}
                    />

                    {/* Simple border when not scrolled */}
                    <motion.div
                        className="absolute inset-0 rounded-xl -z-10"
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: scrolled ? 0 : 1,
                        }}
                        style={{
                            border: `1.5px solid ${colors.accent}60`,
                        }}
                    />

                    <AnimatePresence mode="wait">
                        {!scrolled && (
                            <motion.span
                                style={{ color: colors.accent }}
                                className="tracking-widest text-sm md:text-base font-medium"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10, width: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                MENU
                            </motion.span>
                        )}
                    </AnimatePresence>

                    {/* Hamburger icon */}
                    <div className="flex flex-col gap-1.5">
                        <motion.span
                            className="block h-[2px] rounded-full"
                            animate={{
                                width: scrolled ? 22 : 20,
                                backgroundColor: scrolled ? colors.primary : colors.accent,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="block h-[2px] rounded-full"
                            animate={{
                                width: scrolled ? 16 : 20,
                                x: scrolled ? 3 : 0,
                                backgroundColor: scrolled ? colors.primary : colors.accent,
                            }}
                            transition={{ duration: 0.3, delay: 0.05 }}
                        />
                        <motion.span
                            className="block h-[2px] rounded-full"
                            animate={{
                                width: scrolled ? 22 : 20,
                                backgroundColor: scrolled ? colors.primary : colors.accent,
                            }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        />
                    </div>
                </motion.button>
            </div>
        </motion.nav>
    );
}

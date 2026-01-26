import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

import { useLocation } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
    const { colors } = useTheme();
    const location = useLocation();
    const isMobilePortfolio = location.pathname === '/mobile';

    const menuItems = ["Home", "About", "Projects", "Freelance", "Contact"];

    const handleNavClick = (e, item) => {
        e.preventDefault();
        const targetId = item.toLowerCase();
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Close sidebar first
            onClose();

            // Smooth scroll to target after a short delay
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 300); // Wait for sidebar close animation
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
                    />

                    {/* Sidebar Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-[85%] sm:w-[50%] lg:w-[25%] z-50 p-8 shadow-2xl"
                        style={{ backgroundColor: colors.primary }}
                    >
                        {/* Close Button */}
                        <motion.button
                            onClick={onClose}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-2xl cursor-pointer"
                            style={{
                                backgroundColor: `${colors.secondary}50`,
                                color: colors.background
                            }}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: colors.secondary
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            ×
                        </motion.button>

                        {/* Theme Toggle */}
                        <motion.div
                            className="absolute top-6 left-8"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <ThemeToggle />
                        </motion.div>

                        {/* Portfolio Switcher Button */}
                        <motion.div
                            className="mt-16 mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <a href={isMobilePortfolio ? "/frontend" : "/mobile"}>
                                <motion.div
                                    className="relative p-4 rounded-2xl overflow-hidden cursor-pointer"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.accent}20, ${colors.secondary}40)`,
                                        border: `2px solid ${colors.accent}`,
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: `0 10px 30px ${colors.accent}50`,
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p
                                                className="text-xs font-medium mb-1 tracking-wide"
                                                style={{ color: colors.accent }}
                                            >
                                                SWITCH TO
                                            </p>
                                            <p
                                                className="text-lg font-bold"
                                                style={{ color: colors.background }}
                                            >
                                                {isMobilePortfolio ? "Frontend Portfolio" : "Mobile Portfolio"}
                                            </p>
                                        </div>
                                        <motion.div
                                            className="w-10 h-10 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: colors.accent }}
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <span style={{ color: colors.primary }}>→</span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </a>
                        </motion.div>

                        {/* Menu Items */}
                        <nav className="space-y-2">
                            {menuItems.map((item, index) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={(e) => handleNavClick(e, item)}
                                    className="block py-4 px-4 text-xl font-semibold rounded-xl cursor-pointer"
                                    style={{ color: colors.background }}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{
                                        backgroundColor: `${colors.secondary}40`,
                                        x: 10
                                    }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </nav>

                        {/* Bottom Section */}
                        <motion.div
                            className="absolute bottom-8 left-8 right-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >

                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}


import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
    const { isDark, toggleTheme, colors } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full p-1 cursor-pointer overflow-hidden"
            style={{
                backgroundColor: isDark ? colors.secondary : colors.accent,
                boxShadow: `0 4px 15px ${colors.primary}30`,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Background gradient */}
            <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                    background: isDark
                        ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
                        : 'linear-gradient(135deg, #87CEEB 0%, #FFD700 100%)',
                }}
                transition={{ duration: 0.5 }}
            />

            {/* Stars (visible in dark mode) */}
            <motion.div
                className="absolute inset-0"
                animate={{ opacity: isDark ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <span className="absolute top-1 left-2 text-[6px] text-white">✦</span>
                <span className="absolute top-3 left-4 text-[4px] text-white">✦</span>
                <span className="absolute bottom-2 left-3 text-[5px] text-white">✦</span>
            </motion.div>

            {/* Toggle circle with icon */}
            <motion.div
                className="relative w-6 h-6 rounded-full flex items-center justify-center z-10"
                animate={{
                    x: isDark ? 0 : 32,
                    backgroundColor: isDark ? '#F5EFE7' : '#FFF',
                    boxShadow: isDark
                        ? '0 0 10px rgba(255, 255, 255, 0.3)'
                        : '0 0 15px rgba(255, 215, 0, 0.6)',
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                <motion.div
                    animate={{ rotate: isDark ? 0 : 360 }}
                    transition={{ duration: 0.5 }}
                >
                    {isDark ? (
                        <FaMoon className="text-sm" style={{ color: '#213555' }} />
                    ) : (
                        <FaSun className="text-sm" style={{ color: '#FFD700' }} />
                    )}
                </motion.div>
            </motion.div>
        </motion.button>
    );
}

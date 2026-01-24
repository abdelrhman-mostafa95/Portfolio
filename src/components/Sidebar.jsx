import { motion, AnimatePresence } from "framer-motion";
import colors from "../constants/colors";

export default function Sidebar({ isOpen, onClose }) {
    const menuItems = ["Home", "About", "Works", "Clients", "Contact"];

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

                        {/* Menu Items */}
                        <nav className="mt-20 space-y-2">
                            {menuItems.map((item, index) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
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
                            <div
                                className="p-4 rounded-xl"
                                style={{ backgroundColor: `${colors.secondary}30` }}
                            >
                                <p
                                    className="text-sm mb-2"
                                    style={{ color: colors.accent }}
                                >
                                    Let's work together
                                </p>
                                <a
                                    href="mailto:hello@example.com"
                                    className="font-medium hover:underline"
                                    style={{ color: colors.background }}
                                >
                                    hello@example.com
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

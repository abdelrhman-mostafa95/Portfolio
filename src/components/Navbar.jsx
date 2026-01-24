import { motion } from "framer-motion";
import Logo from "../components/Logo";
import colors from "../constants/colors";

export default function Navbar({ onMenuOpen }) {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 flex justify-between items-center"
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            >
                <Logo className="w-24 md:w-28" />
            </motion.div>

            <motion.button
                onClick={onMenuOpen}
                style={{
                    border: `1px solid ${colors.accent}`,
                }}
                className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-lg cursor-pointer"
                whileHover={{
                    scale: 1.05,
                    backgroundColor: `${colors.secondary}50`
                }}
                whileTap={{ scale: 0.95 }}
            >
                <span
                    style={{ color: colors.accent }}
                    className="tracking-widest text-sm md:text-base"
                >
                    MENU
                </span>
                <div className="space-y-1">
                    <span
                        style={{ backgroundColor: colors.accent }}
                        className="block w-5 md:w-6 h-[2px]"
                    />
                    <span
                        style={{ backgroundColor: colors.accent }}
                        className="block w-5 md:w-6 h-[2px]"
                    />
                    <span
                        style={{ backgroundColor: colors.accent }}
                        className="block w-5 md:w-6 h-[2px]"
                    />
                </div>
            </motion.button>
        </motion.nav>
    );
}

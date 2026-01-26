import clsx from "clsx";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

export default function Button({
    children,
    variant = "primary",
    className,
    ...props
}) {
    const { colors } = useTheme();

    const variants = {
        primary: {
            background: colors.background,
            color: colors.primary,
            border: "transparent",
            glow: colors.secondary,
        },
        outline: {
            background: "transparent",
            color: colors.background,
            border: colors.background,
            glow: colors.accent,
        },
    };

    const v = variants[variant];

    return (
        <motion.button
            style={{
                backgroundColor: v.background,
                color: v.color,
                borderColor: v.border,
            }}
            whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: `0 8px 30px ${v.glow}80`,
            }}
            whileTap={{
                scale: 0.98,
            }}

            className={clsx(
                "px-8 py-3 rounded-xl font-semibold border cursor-pointer",
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}

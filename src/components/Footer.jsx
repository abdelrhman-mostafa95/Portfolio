import { useTheme } from "../hooks/useTheme";

export default function Footer({ name = "Abdel-Rahman Mostafa" }) {
    const { colors } = useTheme();

    return (
        <footer
            className="py-6 text-center"
            style={{ backgroundColor: colors.primary }}
        >
            <p
                className="text-sm"
                style={{ color: colors.accent }}
            >
                © 2026 {name}. All rights reserved.
            </p>
        </footer>
    );
}

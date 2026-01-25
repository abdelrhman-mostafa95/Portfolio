import { motion } from "framer-motion";
import colors from "../constants/colors";

export default function ImageSection({
    image,
    smallTitle,
    mainTitle,
    height = "400px",
    overlay = "bg-black/60",
}) {
    return (
        <section
            className="relative bg-fixed bg-center bg-cover flex items-center justify-center"
            style={{
                backgroundImage: `url(${image})`,
                height: height,
            }}
        >
            {/* Overlay */}
            <div className={`absolute inset-0 ${overlay}`} />

            {/* Content */}
            <motion.div
                className="relative z-10 text-center text-white px-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Small title */}
                <motion.h4
                    className="italic tracking-widest mb-4 text-xl"
                    style={{ color: colors.primary }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    {smallTitle}
                </motion.h4>

                {/* Main title */}
                <motion.h2
                    className="text-5xl md:text-6xl font-bold tracking-widest"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {mainTitle}
                </motion.h2>
            </motion.div>
        </section>
    );
}

import { motion } from "framer-motion";
import Container from "../../../components/Container";
import Button from "../../../components/Button";
import Logo from "../../../components/Logo";
import LightGlow from "../../../effects/LightGlow";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import colors from "../../../constants/colors";
import styles from "./Hero.module.css";


export default function Hero() {
    const navigate = useNavigate();

    return (
        <section
            className="min-h-screen bg-cover bg-center relative overflow-hidden"
            style={{ backgroundColor: colors.primary }}
        >
            {/* Glowing Orbs */}
            <div
                className={`absolute hidden md:block top-[50px] left-[50px] w-72 h-72 rounded-full blur-3xl opacity-40 ${styles['animate-pulse-slow']}`}
                style={{ backgroundColor: colors.background }}
            ></div>
            <div
                className={`absolute hidden md:block bottom-0 right-[50px] w-72 h-72 rounded-full blur-3xl opacity-40 ${styles['animate-pulse-slow']}`}
                style={{ backgroundColor: colors.background }}
            ></div>

            <LightGlow />

            <Container className="relative z-10 min-h-screen flex flex-col justify-between py-20">

                {/* Logo Animation */}
                <div className="flex-1 flex items-center justify-center">
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{
                            y: [0, -15, 0],
                            opacity: 1
                        }}
                        transition={{
                            y: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            },
                            opacity: { duration: 1 }
                        }}
                    >
                        <Logo
                            style={{
                                filter: `
                                             drop-shadow(0 0 40px ${colors.secondary})
                                            drop-shadow(0 0 80px ${colors.accent})
                                            `
                            }}
                        />
                    </motion.div>
                </div>
                {/* Typing Text */}
                <div className="text-center mb-12">
                    <span
                        style={{ color: colors.background }}
                        className=" text-xl md:text-2xl font-medium tracking-wide">
                        <Typewriter
                            words={["Crafting code. Building experiences."]}
                            cursor
                            cursorStyle="_"
                            typeSpeed={80}
                            deleteSpeed={0}
                            delaySpeed={1000000}
                        />
                    </span>
                </div>


                {/* Buttons */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex justify-center gap-6"
                >
                    <Button onClick={() => navigate("/frontend")}>
                        Frontend Portfolio
                    </Button>

                    <Button variant="outline" onClick={() => navigate("/mobile")}>
                        Mobile Portfolio
                    </Button>
                </motion.div>

            </Container>
        </section>
    );
}

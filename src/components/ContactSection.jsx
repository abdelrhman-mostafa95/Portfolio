import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";
import { useTheme } from "../hooks/useTheme";
import { FaWhatsapp, FaGithub, FaLinkedinIn, FaEnvelope, FaPaperPlane } from "react-icons/fa";

// Social Link Component
const SocialLink = ({ icon: Icon, label, href, color }) => {
    const { colors } = useTheme();

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-xl"
            style={{
                backgroundColor: `${color}15`,
                border: `1px solid ${color}30`,
            }}
            whileHover={{
                scale: 1.05,
                backgroundColor: `${color}25`,
                borderColor: color,
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <Icon className="text-xl" style={{ color }} />
            <span className="font-medium" style={{ color: colors.background }}>
                {label}
            </span>
        </motion.a>
    );
};

export default function ContactSection({
    whatsapp = "+201029454138",
    github = "https://github.com/abdelrhman-mostafa95",
    linkedin = "https://www.linkedin.com/in/abdel-rahman-mostafa-saad/",
    email = "abdelrhman.mostafa1095@gmail.com",
}) {
    const { colors } = useTheme();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create mailto link with form data
        const subject = `Message from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

        setTimeout(() => setIsSubmitting(false), 1000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const socials = [
        { icon: FaWhatsapp, label: "WhatsApp", href: `https://wa.me/${whatsapp}`, color: "#25D366" },
        { icon: FaGithub, label: "GitHub", href: github, color: "#000000" },
        { icon: FaLinkedinIn, label: "LinkedIn", href: linkedin, color: "#0A66C2" },
    ];

    return (
        <section
            className="py-20 md:py-28 relative overflow-hidden"
            style={{ backgroundColor: colors.primary }}
        >
            {/* Simple Background Decoration */}
            <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
                style={{ backgroundColor: colors.accent }}
            />
            <div
                className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10"
                style={{ backgroundColor: colors.secondary }}
            />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Side - Info & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Section Title */}
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-4"
                            style={{ color: colors.background }}
                        >
                            Let's Work Together
                        </motion.h2>

                        <motion.p
                            className="text-base md:text-lg mb-8 leading-relaxed"
                            style={{ color: colors.accent }}
                        >
                            Have a project in mind? I'd love to hear about it.
                            Send me a message and let's create something amazing together.
                        </motion.p>

                        {/* Email Direct */}
                        <motion.a
                            href={`mailto:${email}`}
                            className="inline-flex items-center gap-3 mb-8 group"
                            whileHover={{ x: 5 }}
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: `${colors.accent}20` }}
                            >
                                <FaEnvelope style={{ color: colors.accent }} className="text-xl" />
                            </div>
                            <div>
                                <p className="text-sm" style={{ color: colors.accent, opacity: 0.7 }}>
                                    Email me at
                                </p>
                                <p
                                    className="font-medium group-hover:underline"
                                    style={{ color: colors.background }}
                                >
                                    {email || "abdelrhman.mostafa1095@gmail.com"}
                                </p>
                            </div>
                        </motion.a>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3">
                            {socials.map((social, index) => (
                                <SocialLink key={index} {...social} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="p-6 md:p-8 rounded-2xl"
                            style={{
                                backgroundColor: `${colors.secondary}30`,
                                border: `1px solid ${colors.accent}20`,
                            }}
                        >
                            <h3
                                className="text-xl font-bold mb-6"
                                style={{ color: colors.background }}
                            >
                                Send a Message
                            </h3>

                            {/* Name Field */}
                            <div className="mb-4">
                                <label
                                    className="block text-sm mb-2"
                                    style={{ color: colors.accent }}
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2"
                                    style={{
                                        backgroundColor: `${colors.primary}80`,
                                        color: colors.background,
                                        border: `1px solid ${colors.accent}30`,
                                    }}
                                    placeholder="name"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-4">
                                <label
                                    className="block text-sm mb-2"
                                    style={{ color: colors.accent }}
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2"
                                    style={{
                                        backgroundColor: `${colors.primary}80`,
                                        color: colors.background,
                                        border: `1px solid ${colors.accent}30`,
                                    }}
                                    placeholder="@"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="mb-6">
                                <label
                                    className="block text-sm mb-2"
                                    style={{ color: colors.accent }}
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 resize-none"
                                    style={{
                                        backgroundColor: `${colors.primary}80`,
                                        color: colors.background,
                                        border: `1px solid ${colors.accent}30`,
                                    }}
                                    placeholder="message"
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-medium text-lg"
                                style={{
                                    backgroundColor: colors.accent,
                                    color: colors.primary,
                                }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FaPaperPlane />
                                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

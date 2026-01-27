import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/Container";
import { useTheme } from "../hooks/useTheme";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import PhoneMockup from "./PhoneMockup";
import VideoPlayer from "./VideoPlayer";

const ProjectCard = ({ project, index, isActive, onClick }) => {
  const { colors } = useTheme();

  return (
    <motion.div
      className={`relative cursor-pointer overflow-hidden rounded-3xl ${isActive ? "col-span-2 row-span-2" : ""}`}
      style={{
        backgroundColor: colors.primary,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onClick={onClick}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
      layout
    >
      {/* Cover Image */}
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Overlay Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${colors.primary} 0%, transparent 60%)`,
          }}
        />

        {/* Tech Stack Pills */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.techStack?.slice(0, 3).map((tech, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md"
              style={{
                backgroundColor: `${colors.background}90`,
                color: colors.primary,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
            style={{
              backgroundColor: colors.accent,
              color: colors.primary,
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⭐ Featured
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          className="text-xl md:text-2xl font-bold mb-2"
          style={{ color: colors.background }}
        >
          {project.title}
        </motion.h3>

        <p
          className="text-sm mb-4 line-clamp-2"
          style={{ color: colors.accent }}
        >
          {project.description}
        </p>

        {/* Details Button */}
        <motion.button
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium w-full justify-center"
          style={{
            backgroundColor: colors.accent,
            color: colors.primary,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: `0 10px 30px ${colors.accent}50`,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View Details</span>
          <FaArrowRight />
        </motion.button>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors.accent}30, transparent 70%)`,
        }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};

// Project Modal for expanded view
const ProjectModal = ({ project, onClose, hideDemoButton = false }) => {
  const { colors } = useTheme();

  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-md"
        style={{ backgroundColor: `${colors.primary}90` }}
      />

      {/* Modal Content */}
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-auto rounded-3xl"
        style={{ backgroundColor: colors.background }}
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-xl cursor-pointer"
          style={{
            backgroundColor: colors.primary,
            color: colors.background,
          }}
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ×
        </motion.button>

        {/* Cover Image or Video in Phone Mockup */}
        {project.videoUrl ? (
          <div
            className="relative py-8 flex justify-center rounded-t-3xl"
            style={{ backgroundColor: colors.background }}
          >
            <PhoneMockup>
              <VideoPlayer src={project.videoUrl} poster={project.coverImage} />
            </PhoneMockup>
          </div>
        ) : (
          <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${colors.background} 0%, transparent 50%)`,
              }}
            />
          </div>
        )}

        {/* Content */}
        <div className="p-8 -mt-16 relative">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack?.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.background,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colors.primary }}
          >
            {project.title}
          </h2>

          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: colors.secondary }}
          >
            {project.description}
          </p>

          {/* Features if available */}
          {project.features && (
            <div className="mb-8">
              <h4
                className="text-lg font-semibold mb-4"
                style={{ color: colors.primary }}
              >
                Key Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 rounded-xl"
                    style={{ backgroundColor: `${colors.accent}30` }}
                  >
                    <span style={{ color: colors.primary }}>✓</span>
                    <span style={{ color: colors.secondary }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.repoUrl && (
              <motion.a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.background,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-xl" />
                <span>View Repository</span>
              </motion.a>
            )}

            {project.demoUrl && !hideDemoButton && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium"
                style={{
                  backgroundColor: colors.accent,
                  color: colors.primary,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 10px 30px ${colors.accent}50`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt />
                <span>View Live Demo</span>
                <FaArrowRight />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ProjectsSection({
  title = "My Projects",
  subtitle = "Check out some of my recent work",
  projects = [],
  hideDemoButton = false,
}) {
  const [selectedProject, setSelectedProject] = useState(null);
  const { colors } = useTheme();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: colors.accent }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: colors.secondary }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="w-12 h-1 rounded-full"
              style={{ backgroundColor: colors.accent }}
              animate={{ width: [48, 64, 48] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <p
              className="tracking-widest text-sm font-medium"
              style={{ color: colors.accent }}
            >
              PORTFOLIO
            </p>
            <motion.div
              className="w-12 h-1 rounded-full"
              style={{ backgroundColor: colors.accent }}
              animate={{ width: [48, 64, 48] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: colors.background }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: colors.accent }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          layout
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {projects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p style={{ color: colors.accent }}>Projects coming soon...</p>
          </motion.div>
        )}
      </Container>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            hideDemoButton={hideDemoButton}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

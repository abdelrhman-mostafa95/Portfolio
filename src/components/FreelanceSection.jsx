import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/Container";
import { useTheme } from "../hooks/useTheme";
import {
  FaStar,
  FaExternalLinkAlt,
  FaBriefcase,
  FaCheckCircle,
  FaImages,
  FaTimes,
} from "react-icons/fa";
import { darkColors, lightColors } from "../context/ThemeContext";

// Photo Gallery Modal
const PhotoGalleryModal = ({
  photos,
  isOpen,
  onClose,
  projectTitle,
  invertedColors,
}) => {
  const colors = invertedColors;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !photos || photos.length === 0) return null;

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{ backgroundColor: `${colors.primary}95` }}
        />

        {/* Modal Content */}
        <motion.div
          className="relative w-full max-w-5xl max-h-[90vh] flex flex-col"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between p-4 rounded-t-2xl"
            style={{ backgroundColor: colors.background }}
          >
            <h3
              className="text-lg md:text-xl font-bold"
              style={{ color: colors.primary }}
            >
              {projectTitle} - Photos ({currentIndex + 1}/{photos.length})
            </h3>
            <motion.button
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: colors.primary,
                color: colors.background,
              }}
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTimes />
            </motion.button>
          </div>

          {/* Image Container */}
          <div
            className="relative flex-1 rounded-b-2xl overflow-hidden flex items-center justify-center p-6"
            style={{ backgroundColor: colors.background }}
          >
            <motion.img
              key={currentIndex}
              src={photos[currentIndex]}
              alt={`${projectTitle} - Photo ${currentIndex + 1}`}
              className="max-w-sm max-h-96 object-contain"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            />

            {/* Navigation Arrows */}
            {photos.length > 1 && (
              <>
                {/* Previous Button */}
                <motion.button
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: `${colors.primary}90`,
                    color: colors.background,
                  }}
                  onClick={prevPhoto}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ‹
                </motion.button>

                {/* Next Button */}
                <motion.button
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: `${colors.primary}90`,
                    color: colors.background,
                  }}
                  onClick={nextPhoto}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ›
                </motion.button>
              </>
            )}

            {/* Dots Indicator */}
            {photos.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {photos.map((_, idx) => (
                  <button
                    key={idx}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{
                      backgroundColor:
                        idx === currentIndex
                          ? colors.accent
                          : `${colors.accent}40`,
                    }}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Freelance Project Card
const FreelanceCard = ({ project, index, invertedColors }) => {
  const colors = invertedColors;

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7, type: "spring" }}
    >
      {/* Main Card */}
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          backgroundColor: colors.background,
          boxShadow: `0 25px 80px ${colors.primary}40`,
        }}
      >
        {/* Cover Image with Overlay */}
        <div className="relative h-56 md:h-72 overflow-hidden">
          <motion.img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7 }}
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${colors.background} 0%, ${colors.background}80 30%, transparent 100%)`,
            }}
          />

          {/* Client Work Badge */}
          <motion.div
            className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md"
            style={{
              backgroundColor: `${colors.primary}90`,
              color: colors.background,
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <FaBriefcase className="text-sm" />
            <span className="text-xs font-bold">Client Project</span>
          </motion.div>

          {/* Category Tag */}
          {project.category && (
            <div
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md"
              style={{
                backgroundColor: `${colors.accent}90`,
                color: colors.primary,
              }}
            >
              {project.category}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 -mt-8 relative">
          {/* Title */}
          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: colors.primary }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <p
            className="text-sm md:text-base leading-relaxed mb-6 opacity-80"
            style={{ color: colors.secondary }}
          >
            {project.description}
          </p>

          {/* Tech Stack */}
          {project.techStack && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-medium"
                  style={{
                    backgroundColor: `${colors.accent}40`,
                    color: colors.primary,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          )}

          {/* Deliverables */}
          {project.deliverables && (
            <div className="grid grid-cols-2 gap-2">
              {project.deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 text-xs"
                  style={{ color: colors.secondary }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <FaCheckCircle style={{ color: colors.primary }} />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          )}

          {/* View Photos Button */}
          {project.photos && project.photos.length > 0 && (
            <motion.button
              onClick={() => project.onViewPhotos && project.onViewPhotos()}
              className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium"
              style={{
                backgroundColor: colors.accent,
                color: colors.primary,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 10px 30px ${colors.accent}50`,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <FaImages />
              <span>View Photos</span>
            </motion.button>
          )}
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${colors.primary}20, transparent 60%)`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default function FreelanceSection({
  title = "Freelance Work",
  subtitle = "Client projects delivered with excellence",
  projects = [],
}) {
  const { isDark } = useTheme();

  // Invert colors for Freelance section only
  const colors = isDark ? lightColors : darkColors;

  const [selectedProject, setSelectedProject] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openGallery = (project) => {
    setSelectedProject(project);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Background Decorations */}
      <motion.div
        className="absolute top-20 right-0 w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: colors.background }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-60 h-60 rounded-full blur-3xl opacity-15"
        style={{ backgroundColor: colors.accent }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              backgroundColor: `${colors.background}15`,
              border: `1px solid ${colors.accent}30`,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <FaStar style={{ color: colors.accent }} />
            <span
              className="text-sm font-medium tracking-wide"
              style={{ color: isDark ? "#F5EFE7" : colors.primary }}
            >
              FREELANCE PORTFOLIO
            </span>
            <FaStar style={{ color: colors.accent }} />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: isDark ? "#F5EFE7" : colors.primary }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: isDark ? "#F5EFE7" : colors.primary }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <FreelanceCard
              key={project.id || index}
              project={{
                ...project,
                onViewPhotos: () => openGallery(project),
              }}
              index={index}
              invertedColors={colors}
            />
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p style={{ color: colors.accent }}>
              Freelance projects coming soon...
            </p>
          </motion.div>
        )}
      </Container>

      {/* Photo Gallery Modal */}
      {isGalleryOpen && selectedProject && (
        <PhotoGalleryModal
          photos={selectedProject.photos}
          isOpen={isGalleryOpen}
          onClose={closeGallery}
          projectTitle={selectedProject.title}
          invertedColors={colors}
        />
      )}
    </section>
  );
}

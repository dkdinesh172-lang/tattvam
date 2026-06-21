import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// ═══════════════════════════════════════════════════════════════════
// IMAGE LOADING FOR EACH CATEGORY
// ═══════════════════════════════════════════════════════════════════

// Annual Day Images
const annualDayImages = Object.entries(
  import.meta.glob("@/assets/gallery/annual-day-*.jpg", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => {
    const numA = Number(a.match(/annual-day-(\d+)/)?.[1] || 0);
    const numB = Number(b.match(/annual-day-(\d+)/)?.[1] || 0);
    return numA - numB;
  })
  .map(([_, src], index) => ({
    src: src as string,
    alt: `Annual Day ${index + 1}`,
  }));

// Sports Day Images
const sportsDayImages = Object.entries(
  import.meta.glob("@/assets/gallery/sports-day-*.jpg", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => {
    const numA = Number(a.match(/sports-day-(\d+)/)?.[1] || 0);
    const numB = Number(b.match(/sports-day-(\d+)/)?.[1] || 0);
    return numA - numB;
  })
  .map(([_, src], index) => ({
    src: src as string,
    alt: `Sports Day ${index + 1}`,
  }));

// Carnival Day Images
const carnivalDayImages = Object.entries(
  import.meta.glob("@/assets/gallery/carnival-day-*.jpg", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => {
    const numA = Number(a.match(/carnival-day-(\d+)/)?.[1] || 0);
    const numB = Number(b.match(/carnival-day-(\d+)/)?.[1] || 0);
    return numA - numB;
  })
  .map(([_, src], index) => ({
    src: src as string,
    alt: `Carnival Day ${index + 1}`,
  }));

// Colours Day Images
const coloursDayImages = Object.entries(
  import.meta.glob("@/assets/gallery/colours-day-*.jpg", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => {
    const numA = Number(a.match(/colours-day-(\d+)/)?.[1] || 0);
    const numB = Number(b.match(/colours-day-(\d+)/)?.[1] || 0);
    return numA - numB;
  })
  .map(([_, src], index) => ({
    src: src as string,
    alt: `Colours Day ${index + 1}`,
  }));

// Festivals Day Images
const festivalDayImages = Object.entries(
  import.meta.glob("@/assets/gallery/festival-day-*.jpg", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => {
    const numA = Number(a.match(/festival-day-(\d+)/)?.[1] || 0);
    const numB = Number(b.match(/festival-day-(\d+)/)?.[1] || 0);
    return numA - numB;
  })
  .map(([_, src], index) => ({
    src: src as string,
    alt: `Festival Day ${index + 1}`,
  }));

// ═══════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════

type CarouselImage = { src: string; alt: string };

interface CategoryData {
  key: string;
  label: string;
  emoji: string;
  images: CarouselImage[];
}

interface Lightbox {
  categoryKey: string;
  imageIndex: number;
}

// ═══════════════════════════════════════════════════════════════════
// CATEGORY CAROUSEL CELL COMPONENT
// ═══════════════════════════════════════════════════════════════════

const CarouselCell = ({
  image,
  index,
  totalImages,
  isHovered,
  onHover,
  onClick,
}: {
  image: CarouselImage;
  index: number;
  totalImages: number;
  isHovered: boolean;
  onHover: (hovering: boolean) => void;
  onClick: () => void;
}) => {
  const angle = (360 / totalImages) * index;

  return (
    <motion.div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onClick}
      style={{
        position: "absolute",
        width: "190px",
        height: "100px",
        left: "20px",
        top: "35px",
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{
        transform: isHovered
          ? `rotateY(${angle}deg) translateZ(380px) scale(1.5)`
          : `rotateY(${angle}deg) translateZ(380px) scale(1)`,
      }}
      transition={{
        transform: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.4,
        },
      }}
    >
      <img
        src={image.src}
        alt={image.alt}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "12px",
          objectFit: "cover",
          cursor: "pointer",
          display: "block",
          boxShadow: isHovered
            ? "0 25px 60px rgba(0, 0, 0, 0.7)"
            : "0 10px 30px rgba(0, 0, 0, 0.2)",
          transition: "box-shadow 0.4s ease",
          WebkitBoxReflect:
            "below 5px linear-gradient(transparent, rgba(0, 0, 0, 0.4))",
          filter: isHovered ? "brightness(1.1)" : "brightness(1)",
        }}
      />
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════════
// SINGLE CAROUSEL SECTION COMPONENT
// ═══════════════════════════════════════════════════════════════════

interface CarouselSectionProps {
  category: CategoryData;
  onImageClick: (categoryKey: string, imageIndex: number) => void;
}

const CarouselSection = ({ category, onImageClick }: CarouselSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Skip rendering if no images
  if (category.images.length === 0) {
    return null;
  }

  const displayCount = Math.min(category.images.length, 12);
  const displayImages = category.images.slice(0, displayCount);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-80px" }}
      className="py-4 lg:py-8 relative"
    >
      {/* Category Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-04"
      >
        <h3 className="font-display text-3xl md:text-4xl font-bold text-secondary">
          <span className="mr-3">{category.emoji}</span>
          {category.label}
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-4" />
      </motion.div>

      {/* 3D Carousel Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center items-center min-h-[30px] px-4"
      >
        <div
          style={{
            width: "300px",
            height: "250px",
            perspective: "10000px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            ref={carouselRef}
            animate={isAnimating ? { rotateY: 360 } : { rotateY: 0 }}
            transition={{
              rotateY: {
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            onMouseEnter={() => setIsAnimating(false)}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setIsAnimating(true);
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              transformStyle: "preserve-3d",
              cursor: "grab",
            }}
          >
            {/* Carousel Cells */}
            {displayImages.map((image, index) => (
              <CarouselCell
                key={`${category.key}-cell-${index}`}
                image={image}
                index={index}
                totalImages={displayCount}
                isHovered={hoveredIndex === index}
                onHover={(hovering) =>
                  setHoveredIndex(hovering ? index : null)
                }
                onClick={() => onImageClick(category.key, index)}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

// ═══════════════════════════════════════════════════════════════════
// MAIN GALLERY COMPONENT WITH ALL CATEGORIES
// ═══════════════════════════════════════════════════════════════════

const MultiCategoryGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<Lightbox | null>(null);

  // Gallery Categories Data
  const galleryCategories: CategoryData[] = [
    {
      key: "annual-day",
      label: "Annual Day",
      emoji: "🎭",
      images: annualDayImages,
    },
    {
      key: "sports-day",
      label: "Sports Day",
      emoji: "🏅",
      images: sportsDayImages,
    },
    {
      key: "carnival-day",
      label: "Carnival Day",
      emoji: "🎪",
      images: carnivalDayImages,
    },
    {
      key: "colours-day",
      label: "Colours Day",
      emoji: "🎨",
      images: coloursDayImages,
    },
    {
      key: "festival-day",
      label: "Festivals Day",
      emoji: "🇮🇳",
      images: festivalDayImages,
    },
  ];

  // Preload all images
  useEffect(() => {
    galleryCategories.forEach((category) => {
      category.images.forEach((img) => {
        const image = new Image();
        image.src = img.src;
      });
    });
  }, []);

  // Handle lightbox opening
  const openLightbox = useCallback((categoryKey: string, imageIndex: number) => {
    setLightbox({ categoryKey, imageIndex });
  }, []);

  // Handle lightbox closing
  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  // Get current category and images
  const currentCategory = lightbox
    ? galleryCategories.find((cat) => cat.key === lightbox.categoryKey)
    : null;
  const currentImages = currentCategory ? currentCategory.images : [];

  // Navigate in lightbox
  const navigate = useCallback(
    (direction: number) => {
      if (!lightbox || !currentImages.length) return;
      const newIndex =
        (lightbox.imageIndex + direction + currentImages.length) %
        currentImages.length;
      setLightbox({ ...lightbox, imageIndex: newIndex });
    },
    [lightbox, currentImages]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [lightbox, navigate, closeLightbox]);

  return (
    <section
      id="gallery"
      className="relative bg-background overflow-hidden"
      ref={ref}
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-light-peach/40 to-transparent -z-0" />

      {/* Main Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center pt-20 pb-8 px-4 relative z-10"
      >
        <span className="font-body font-semibold text-sm text-secondary uppercase tracking-wider">
          Gallery
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
          Wall of <span className="text-gradient">Memories</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
          A cherished collection of precious moments and milestones from our school events
        </p>
      </motion.div>

      {/* Gallery Categories */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {galleryCategories.map((category) => (
          <CarouselSection
            key={category.key}
            category={category}
            onImageClick={openLightbox}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox !== null && currentImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </motion.button>

          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50"
            onClick={(e) => {
              e.stopPropagation();
              navigate(-1);
            }}
            disabled={currentImages.length <= 1}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </motion.button>

          {/* Image Display */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            <img
              src={currentImages[lightbox.imageIndex].src}
              alt={currentImages[lightbox.imageIndex].alt}
              className="w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
            />

            {/* Image Counter */}
            <div className="text-center mt-6 text-white/70 text-sm font-body">
              <p className="mb-2">{currentCategory?.label}</p>
              <p>
                {lightbox.imageIndex + 1} / {currentImages.length}
              </p>
            </div>
          </motion.div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50"
            onClick={(e) => {
              e.stopPropagation();
              navigate(1);
            }}
            disabled={currentImages.length <= 1}
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </motion.button>
        </motion.div>
      )}
    </section>
  );
};

export default MultiCategoryGallery;
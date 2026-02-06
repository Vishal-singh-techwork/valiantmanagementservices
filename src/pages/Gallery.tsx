import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// Gallery images from Valiant Management Services
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://lh3.googleusercontent.com/p/AF1QipOUb_kC7axTIt80BFy40bWRGtMqD8gMwf7gcM2k=s1360-w1360-h1020-rw",
    alt: "Valiant Management Services Team",
    category: "Our Team"
  },
  {
    id: 2,
    src: "https://lh3.googleusercontent.com/p/AF1QipMb6MThVKvH8UJI8NhFlnHHNmGLlUB2A76vZ8Da=s1360-w1360-h1020-rw",
    alt: "Security Operations Center",
    category: "Operations"
  },
  {
    id: 3,
    src: "https://lh3.googleusercontent.com/p/AF1QipPwJz0li80jY80KMxGIsUN-5mPeb2jPcq6tQiMI=s1360-w1360-h1020-rw",
    alt: "Professional Security Services",
    category: "Security Services"
  },
  {
    id: 4,
    src: "https://lh3.googleusercontent.com/p/AF1QipM70C9ab4TlqTm-vKElEadf5_Ok-A2c0M9dbri8=s1360-w1360-h1020-rw",
    alt: "Security Guard Training",
    category: "Training"
  },
  {
    id: 5,
    src: "https://lh3.googleusercontent.com/p/AF1QipPJYemYlXikwOpCzZrhZe66qyEmyB3efi1jyLg7=s1360-w1360-h1020-rw",
    alt: "Corporate Security Solutions",
    category: "Corporate Security"
  },
  {
    id: 6,
    src: "https://lh3.googleusercontent.com/p/AF1QipPVlKsS1RCQPNMEYHyNLO9aVxpN6ttC9xf5dOYj=s1360-w1360-h1020-rw",
    alt: "Valiant Security Personnel",
    category: "Our Team"
  },
  {
    id: 7,
    src: "https://lh3.googleusercontent.com/p/AF1QipNRsf3V7rcv9MtyfjZhcj7wHXsZy3b0zTzFt8AR=s1360-w1360-h1020-rw",
    alt: "Security Guard on Duty",
    category: "Security Services"
  },
  {
    id: 8,
    src: "https://lh3.googleusercontent.com/p/AF1QipPlCZOzIeuBxjlw3JhBpZAJbDnAJyuWbTluhN84=s1360-w1360-h1020-rw",
    alt: "Access Control Systems",
    category: "Access Control"
  },
  {
    id: 9,
    src: "https://lh3.googleusercontent.com/p/AF1QipPI7CMj1T08gdKQqvejoPjYN88sy1j4ErjqnnaM=s1360-w1360-h1020-rw",
    alt: "Event Security Management",
    category: "Event Security"
  },
  {
    id: 10,
    src: "https://lh3.googleusercontent.com/p/AF1QipMeihq46yul-acv4wHrm5g_s--4pQjA1O-Fq-rG=s1360-w1360-h1020-rw",
    alt: "Valiant Management Office",
    category: "Office"
  },
  {
    id: 11,
    src: "https://lh3.googleusercontent.com/p/AF1QipNHf-KzoXiUzmignaaRWAOVoFDcHW8wogWNyBq-=s1360-w1360-h1020-rw",
    alt: "Professional Security Team",
    category: "Our Team"
  },
  {
    id: 12,
    src: "https://lh3.googleusercontent.com/p/AF1QipOegvwiI2-Vt1OSAoLV4M5aL5sleDVq88Vl8k-D=s1360-w1360-h1020-rw",
    alt: "Security Guard Services",
    category: "Security Services"
  },
  {
    id: 13,
    src: "https://lh3.googleusercontent.com/p/AF1QipMS3-spCIlVlz0tj-EPHXgPUcOQOP05C7gXg2Cc=s1360-w1360-h1020-rw",
    alt: "Valiant Security Operations",
    category: "Operations"
  }
];

const categories = ["All", "Our Team", "Security Services", "Corporate Security", "Operations", "Training", "Event Security", "Access Control", "Office"];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>({});

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage, index: number) => {
    setLightboxImage(image);
    setCurrentIndex(index);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % filteredImages.length
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  const handleImageLoad = (id: number) => {
    setImageLoading(prev => ({ ...prev, [id]: false }));
  };

  const handleImageError = (id: number) => {
    setImageLoading(prev => ({ ...prev, [id]: false }));
  };

  return (
    <div className="pt-24 lg:pt-28">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Our Gallery</h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto px-4">
              Explore our professional security operations, team, and services in action
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-300 text-sm sm:text-base">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-secondary">Gallery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 sm:py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter - Horizontal Scroll on Mobile */}
          <div className="mb-8 sm:mb-12">
            <div className="flex overflow-x-auto pb-4 sm:flex-wrap sm:justify-center gap-2 sm:gap-3 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-shrink-0 px-4 sm:px-5 py-2 rounded-full font-medium text-sm sm:text-base transition-all whitespace-nowrap ${selectedCategory === category
                    ? 'bg-secondary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Image Count */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-primary">{filteredImages.length}</span> {filteredImages.length === 1 ? 'image' : 'images'}
              {selectedCategory !== "All" && <span> in <span className="font-semibold text-secondary">{selectedCategory}</span></span>}
            </p>
          </div>

          {/* Gallery Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-gray-100"
                onClick={() => openLightbox(image, index)}
              >
                {/* Loading Placeholder */}
                {imageLoading[image.id] !== false && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                    <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}

                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onLoad={() => handleImageLoad(image.id)}
                  onError={() => handleImageError(image.id)}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block bg-secondary text-white text-xs px-3 py-1 rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-white text-sm line-clamp-2">{image.alt}</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Mobile Touch Indicator */}
                <div className="absolute bottom-3 right-3 sm:hidden">
                  <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow">
                    <ZoomIn className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">No images found in this category.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 text-secondary hover:text-secondary-dark font-medium"
              >
                View all images
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-secondary to-secondary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need Professional Security Services?</h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Contact us today for a free consultation and let us protect what matters most to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919873636552"
              className="inline-flex items-center justify-center gap-2 bg-white text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: +91 9873636552
            </a>
            <a
              href="https://wa.me/+919873636552?text=Hello%2C%20I%20am%20interested%20in%20your%20services.%20Please%20assist%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#128C7E] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[80] flex items-center justify-center"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Navigation - Previous */}
          {filteredImages.length > 1 && (
            <button
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          )}

          {/* Navigation - Next */}
          {filteredImages.length > 1 && (
            <button
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          )}

          {/* Image */}
          <div
            className="max-w-6xl w-full mx-4 sm:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="w-full max-h-[70vh] sm:max-h-[75vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4 px-4">
              <span className="inline-block bg-secondary text-white text-xs sm:text-sm px-4 py-1 rounded-full mb-2">
                {lightboxImage.category}
              </span>
              <p className="text-white text-sm sm:text-base">{lightboxImage.alt}</p>
              <p className="text-white/60 text-xs sm:text-sm mt-2">
                {currentIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Keyboard Navigation Hint - Desktop Only */}
          <div className="hidden sm:block absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-sm">
            Use ← → arrow keys to navigate • Press ESC to close
          </div>
        </div>
      )}

      {/* Styles for hiding scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Gallery;

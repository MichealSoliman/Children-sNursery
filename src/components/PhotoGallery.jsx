import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const PhotoGallery = ({ images = [], title = "معرض صور حضانتنا", subtitle = "اكتشف بيئة التعلم الآمنة والمحفزة التي نوفرها لأطفالكم الأعزاء" }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [filteredImages, setFilteredImages] = useState([]);

  // Default gallery data - يمكن استبدالها بالصور الخاصة بك
  const defaultGalleryData = [
    {
      id: 1,
      src: './src/assets/galary-1.jpg',
      alt: 'مركز رعاية الأطفال',
      category: 'facilities',
      title: 'مرافق الحضانة'
    },
    {
      id: 2,
      src: './src/assets/galary-2.jpg',
      alt: 'أطفال يتعلمون مع المعلم',
      category: 'learning',
      title: 'أنشطة التعلم'
    },
    {
      id: 3,
      src: './src/assets/galary-3.jpg',
      alt: 'فصل دراسي للأطفال',
      category: 'classroom',
      title: 'الفصول الدراسية'
    },
    {
      id: 4,
      src: './src/assets/galary-4.webp',
      alt: 'أطفال في الزي السعودي',
      category: 'culture',
      title: 'الثقافة السعودية'
    },
    {
      id: 5,
      src: './src/assets/galary-5.jpg',
      alt: 'طلاب المرحلة الابتدائية',
      category: 'students',
      title: 'طلابنا'
    },
    {
      id: 6,
      src: './src/assets/galary-6.jpg',
      alt: 'أطفال في الفصل',
      category: 'classroom',
      title: 'بيئة التعلم'
    },
    {
      id: 7,
      src: './src/assets/galary-7.jpg',
      alt: 'غرفة اللعب',
      category: 'playroom',
      title: 'غرفة اللعب'
    },
    {
      id: 8,
      src: './src/assets/galary-8.jpg',
      alt: 'منطقة اللعب الداخلية',
      category: 'playroom',
      title: 'أنشطة اللعب'
    }
  ];

  const galleryData = images.length > 0 ? images : defaultGalleryData;

  const categories = [
    { key: 'all', label: 'جميع الصور', icon: Grid },
    { key: 'facilities', label: 'المرافق', icon: Grid },
    { key: 'learning', label: 'التعلم', icon: Grid },
    { key: 'classroom', label: 'الفصول', icon: Grid },
    { key: 'culture', label: 'الثقافة', icon: Grid },
    { key: 'students', label: 'الطلاب', icon: Grid },
    { key: 'playroom', label: 'اللعب', icon: Grid }
  ];

  useEffect(() => {
    if (filter === 'all') {
      setFilteredImages(galleryData);
    } else {
      setFilteredImages(galleryData.filter(img => img.category === filter));
    }
  }, [filter, galleryData]);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen" dir="rtl">
      {/* Header */}
      <div className="text-center mb-12">
        
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Filter Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3 mb-8"
      >
        {categories.map((category) => (
          <Button
            key={category.key}
            onClick={() => setFilter(category.key)}
            variant={filter === category.key ? "default" : "outline"}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              filter === category.key 
                ? 'bg-blue-600 text-white shadow-lg scale-105' 
                : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            <category.icon className="w-4 h-4 ml-2" />
            {category.label}
          </Button>
        ))}
      </motion.div>

      {/* View Mode Toggle */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center mb-8"
      >
        <div className="bg-white rounded-full p-1 shadow-md">
          <Button
            onClick={() => setViewMode('grid')}
            variant={viewMode === 'grid' ? "default" : "ghost"}
            size="sm"
            className="rounded-full"
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => setViewMode('list')}
            variant={viewMode === 'list' ? "default" : "ghost"}
            size="sm"
            className="rounded-full"
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 sm:grid-cols-2'
        }`}
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              layout
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                onClick={closeModal}
                variant="ghost"
                size="sm"
                className="absolute top-4 left-4 z-10 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              >
                <X className="w-5 h-5" />
              </Button>
              
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600">
                  {selectedImage.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;



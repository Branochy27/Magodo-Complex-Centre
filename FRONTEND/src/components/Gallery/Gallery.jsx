import React, { useState } from 'react';
import { Image, Upload, Filter } from 'lucide-react';
import ImageModal from './ImageModal';
import { schoolInfo } from '../../data/schoolData';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [uploadedImages, setUploadedImages] = useState([]);

  // Combine school data images with uploaded images
  const allImages = [...schoolInfo.gallery.images, ...uploadedImages];

  // Filter images by category
  const filteredImages = selectedCategory === 'All'
    ? allImages
    : allImages.filter(img => img.category === selectedCategory);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage = {
          id: Date.now() + Math.random(),
          url: event.target.result,
          title: file.name.split('.')[0],
          category: 'Activities',
          description: 'Uploaded image'
        };
        setUploadedImages(prev => [...prev, newImage]);
      };
      reader.readAsDataURL(file);
    });
  };

  const openModal = (image, index) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showPrevious = () => {
    const newIndex = selectedImageIndex - 1;
    if (newIndex >= 0) {
      setSelectedImage(filteredImages[newIndex]);
      setSelectedImageIndex(newIndex);
    }
  };

  const showNext = () => {
    const newIndex = selectedImageIndex + 1;
    if (newIndex < filteredImages.length) {
      setSelectedImage(filteredImages[newIndex]);
      setSelectedImageIndex(newIndex);
    }
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <header className="gallery-header">
          <h2 className="gallery-title">School Gallery</h2>
          <p className="gallery-subtitle">
            Explore our campus, facilities, and vibrant school community
          </p>
        </header>

        {/* Upload Section */}
        <div className="upload-section">
          <label className="upload-button">
            <Upload size={24} />
            Upload Images
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden-input"
            />
          </label>
          <p className="upload-hint">Click to upload school photos (JPG, PNG)</p>
        </div>

        {/* Category Filter */}
        <div className="filter-section">
          <div className="filter-buttons">
            {schoolInfo.gallery.categories.map(category => (
              <button
                key={category}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredImages.length === 0 ? (
          <div className="gallery-empty-state">
            <div className="empty-icon">
              <Image size={48} />
            </div>
            <h3>No Images Yet</h3>
            <p>Upload images to showcase your school's facilities, students, and activities.</p>
            <div className="example-categories">
              <div className="example-item">
                <span>🏫</span>
                <p>Classrooms</p>
              </div>
              <div className="example-item">
                <span>👨‍🎓</span>
                <p>Students</p>
              </div>
              <div className="example-item">
                <span>🎪</span>
                <p>Events</p>
              </div>
              <div className="example-item">
                <span>🏃</span>
                <p>Activities</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => openModal(image, index)}
              >
                <img src={image.url} alt={image.title} />
                <div className="image-overlay">
                  <h4>{image.title}</h4>
                  <p>{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Image Count */}
        {filteredImages.length > 0 && (
          <div className="image-counter">
            <p>
              Showing {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={closeModal}
          onPrevious={showPrevious}
          onNext={showNext}
          hasPrevious={selectedImageIndex > 0}
          hasNext={selectedImageIndex < filteredImages.length - 1}
        />
      )}
    </div>
  );
};

export default Gallery;
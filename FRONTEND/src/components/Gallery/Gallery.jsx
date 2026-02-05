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
    
      
        
          
          School Gallery
          
            Explore our campus, facilities, and vibrant school community
          
        

        {/* Upload Section */}
        
          
            
            Upload Images
            
          
          Click to upload school photos (JPG, PNG)
        

        {/* Category Filter */}
        
          
          
            {schoolInfo.gallery.categories.map(category => (
              <button
                key={category}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              
            ))}
          
        

        {/* Gallery Grid */}
        {filteredImages.length === 0 ? (
          
            
              
            
            No Images Yet
            Upload images to showcase your school's facilities, students, and activities.
            
              
                🏫
                Classrooms
              
              
                👨‍🎓
                Students
              
              
                🎪
                Events
              
              
                🏃
                Activities
              
            
          
        ) : (
          
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => openModal(image, index)}
              >
                
                
                  {image.title}
                  {image.category}
                
              
            ))}
          
        )}

        {/* Image Count */}
        {filteredImages.length > 0 && (
          
            Showing {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          
        )}
      

      {/* Image Modal */}
      {selectedImage && (
         0}
          hasNext={selectedImageIndex < filteredImages.length - 1}
        />
      )}
    
  );
};

export default Gallery;
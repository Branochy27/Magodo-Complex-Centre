import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageModal = ({ image, onClose, onPrevious, onNext, hasPrevious, hasNext }) => {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        {hasPrevious && (
          <button className="modal-nav modal-prev" onClick={onPrevious}>
            <ChevronLeft size={32} />
          </button>
        )}

        <div className="modal-image-container">
          <img src={image.url} alt={image.title} className="modal-image" />
          <div className="modal-info">
            <h2>{image.title}</h2>
            {image.description && <p>{image.description}</p>}
            <span className="modal-category">{image.category}</span>
          </div>
        </div>

        {hasNext && (
          <button className="modal-nav modal-next" onClick={onNext}>
            <ChevronRight size={32} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
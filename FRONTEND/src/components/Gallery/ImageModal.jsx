import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageModal = ({ image, onClose, onPrevious, onNext, hasPrevious, hasNext }) => {
  if (!image) return null;

  return (
    
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
          
        

        {hasPrevious && (
          
            
          
        )}

        
          
          
            {image.title}
            {image.description && {image.description}}
            {image.category}
          
        

        {hasNext && (
          
            
          
        )}
      
    
  );
};

export default ImageModal;
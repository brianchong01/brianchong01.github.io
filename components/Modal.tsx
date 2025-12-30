
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'pdf' | 'video';
  url: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, type, url }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b dark:border-slate-800">
          <h3 className="text-xl font-bold dark:text-white">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="aspect-video w-full bg-black">
          {type === 'pdf' ? (
            <iframe src={url} className="w-full h-full border-none" />
          ) : (
            <video 
              src={url} 
              className="w-full h-full" 
              controls 
              autoPlay 
              playsInline
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

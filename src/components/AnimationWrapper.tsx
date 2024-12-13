// src/components/AnimationWrapper.tsx
"use client";
import { useState } from 'react';
import IntroAnimation from './IntroAnimation';

export default function AnimationWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleEnter = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <IntroAnimation loading={isLoading} onEnter={handleEnter} />
      ) : (
        <div 
          style={{ 
            opacity: isLoading ? 0 : 1, 
            transition: 'opacity 0.3s' 
          }}
        >
          {children}
        </div>
      )}
    </>
  );
}
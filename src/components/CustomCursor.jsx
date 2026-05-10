import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Small inner dot physics
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Outer larger ring physics with spring damping for fluid trailing
  const ringX = useSpring(cursorX, { damping: 30, stiffness: 250 });
  const ringY = useSpring(cursorY, { damping: 30, stiffness: 250 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button';
        
      setIsHovered(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  // Block custom cursor on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Outer Glowing Ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
        animate={{
          width: isHovered ? 64 : 40,
          height: isHovered ? 64 : 40,
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="border border-cyan-500/40 rounded-full mix-blend-screen backdrop-blur-[1px]"
      >
        <motion.div
          animate={{
            opacity: isHovered ? 0.3 : 0.1,
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 blur-[8px]"
        />
      </motion.div>

      {/* Inner precise dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#00D2FF]"
      />
    </>
  );
};

export default CustomCursor;

import { useMotionTemplate, motion } from 'framer-motion';
import React from 'react';
import { GridPattern } from './GridPattern';

export function CardPattern({ mouseX, mouseY, ...gridProps }: any) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className='pointer-events-none'>
      <motion.div
        className='absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-#CFFCC1 via-#CFFCC1 transition duration-300 group-hover:opacity-30 '
        style={style}
      />
    </div>
  );
}

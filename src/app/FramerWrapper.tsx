'use client';
import { motion, AnimatePresence } from 'framer-motion';

export default function FramerWrapper({ children }) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 6 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

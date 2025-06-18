import { motion } from "framer-motion";
import { useState } from "react";

interface RippleEffectProps {
  children: React.ReactNode;
  className?: string;
}

export default function RippleEffect({ children, className = "" }: RippleEffectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {children}
      
      {/* Ripple circles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 w-4 h-4 bg-golden-amber/20 rounded-full"
          style={{ x: "-50%", y: "-50%" }}
          animate={{
            scale: [1, 2, 3],
            opacity: [0.6, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-4 h-4 bg-warm-clay/15 rounded-full"
          style={{ x: "-50%", y: "-50%" }}
          animate={{
            scale: [1, 2.5, 4],
            opacity: [0.4, 0.2, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-4 h-4 bg-terra-cotta/10 rounded-full"
          style={{ x: "-50%", y: "-50%" }}
          animate={{
            scale: [1, 3, 5],
            opacity: [0.3, 0.1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
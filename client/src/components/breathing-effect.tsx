import { motion } from "framer-motion";

interface BreathingEffectProps {
  children: React.ReactNode;
  className?: string;
}

export default function BreathingEffect({ children, className = "" }: BreathingEffectProps) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
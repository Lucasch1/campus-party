import { motion } from 'framer-motion';

const AnimatedLoading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        className="w-16 h-16 rounded-full border-4 border-white border-t-4 border-t-transparent animate-spin"
        style={{
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
        }}
        animate={{ rotate: 360 }}
        transition={{ loop: Infinity, duration: 1.5, ease: 'linear' }}
      ></motion.div>
    </div>
  );
};

export default AnimatedLoading;

import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const FallbackComponent = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center text-center"
    >
      <Info size={64} className="text-gray-300" />
      <h2 className="mt-4 text-2xl font-semibold text-gray-700">Welcome!</h2>
      <p className="mt-2 text-sm text-gray-500 max-w-xs">
        Select a tab from above to get started and explore the content.
      </p>
    </motion.div>
  );
};

export default FallbackComponent;

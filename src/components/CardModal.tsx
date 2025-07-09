import { categoryColors } from "../constants/categoryColors";
import { motion } from "framer-motion";

interface CardModalProps {
  question: string;
  category: string;
  onClose: () => void;
}

export default function CardModal({
  question,
  category,
  onClose,
}: CardModalProps) {
  const bgColor = categoryColors[category] || categoryColors.default;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={`relative p-6 w-96 rounded-xl shadow-2xl ${bgColor} text-white animate-pulse border-4 border-white/20`}
      >
        <button
          onClick={onClose}
          className="absolute -top-2 right-2 text-gray-300 text-xl hover:text-white transition-colors"
          aria-label="Close"
        >
          ×
        </button>

        {category === "sex" && (
          <div className="text-sm text-rose-200 text-center mb-2">
            Things are heating up... 🔥
          </div>
        )}

        <h2 className="text-2xl font-semibold text-center sparkle-text">
          {question}
        </h2>
      </motion.div>
    </div>
  );
}

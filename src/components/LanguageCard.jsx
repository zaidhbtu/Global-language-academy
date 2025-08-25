import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";

export default function LanguageCard({ language, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
      data-testid={`card-language-${language.id}`}
    >
      <img
        src={language.image}
        alt={`${language.name} language learning materials and cultural elements`}
        className="w-full h-48 object-cover"
        data-testid={`img-language-${language.id}`}
      />
      
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-2xl mr-3" data-testid={`flag-${language.id}`}>
            {language.flag}
          </span>
          <h3 className="text-xl font-semibold text-slate-900" data-testid={`title-${language.id}`}>
            {language.name}
          </h3>
        </div>
        
        <p className="text-neutral mb-4" data-testid={`description-${language.id}`}>
          {language.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full" data-testid={`level-${language.id}`}>
            {language.level}
          </span>
          <span className="text-sm text-neutral flex items-center gap-1" data-testid={`duration-${language.id}`}>
            <FiClock className="w-4 h-4" />
            {language.duration}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary" data-testid={`price-${language.id}`}>
            ${language.price}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            data-testid={`button-learn-more-${language.id}`}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import * as Icons from "react-icons/fi";

export default function FeatureCard({ feature, index }) {
  const IconComponent = Icons[feature.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl p-8 shadow-lg border border-slate-200"
      data-testid={`card-feature-${feature.id}`}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
        {IconComponent && (
          <IconComponent className={`text-xl ${feature.color}`} />
        )}
      </div>

      <h3
        className="text-xl font-semibold text-slate-900 mb-4"
        data-testid={`title-feature-${feature.id}`}
      >
        {feature.title}
      </h3>

      <p
        className="text-neutral"
        data-testid={`description-feature-${feature.id}`}
      >
        {feature.description}
      </p>
    </motion.div>
  );
}

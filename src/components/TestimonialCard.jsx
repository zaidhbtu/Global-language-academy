import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-slate-50 rounded-xl p-8 border border-slate-200"
      data-testid={`card-testimonial-${testimonial.id}`}
    >
      <div className="flex text-yellow-400 mb-4" data-testid={`rating-${testimonial.id}`}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <FiStar key={i} className="fill-current" />
        ))}
      </div>
      
      <p className="text-neutral mb-6 italic" data-testid={`content-${testimonial.id}`}>
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={`${testimonial.name}, satisfied student`}
          className="w-12 h-12 rounded-full object-cover mr-4"
          data-testid={`avatar-${testimonial.id}`}
        />
        <div>
          <p className="font-semibold text-slate-900" data-testid={`name-${testimonial.id}`}>
            {testimonial.name}
          </p>
          <p className="text-sm text-neutral" data-testid={`role-${testimonial.id}`}>
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

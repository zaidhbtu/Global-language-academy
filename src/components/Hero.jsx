import { motion } from "framer-motion";
import { FiStar, FiPlay } from "react-icons/fi";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight"
              variants={itemVariants}
              data-testid="hero-title"
            >
              Master <span className="text-primary">Languages</span>{" "}
              with Expert Instructors
            </motion.h1>
            
            <motion.p
              className="text-xl text-neutral mt-6 leading-relaxed"
              variants={itemVariants}
              data-testid="hero-description"
            >
              Learn Spanish, Arabic, English, and more with our personalized approach. 
              Join thousands of students who've achieved fluency with our proven methods.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg"
                data-testid="button-start-learning"
              >
                Start Learning Today
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
                data-testid="button-view-demo"
              >
                <FiPlay className="w-5 h-5" />
                View Course Demo
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center justify-center lg:justify-start space-x-6"
              variants={itemVariants}
            >
              <div className="flex items-center" data-testid="hero-rating">
                <div className="flex text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-neutral font-medium">
                  4.9/5 from 2,500+ students
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="International students in modern language learning classroom"
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

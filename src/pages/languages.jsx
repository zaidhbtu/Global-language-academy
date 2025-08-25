import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LanguageCard from "../components/LanguageCard";
import { languages } from "../data/languages";

export default function Languages() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
              data-testid="languages-page-title"
            >
              Our Language Courses
            </h1>
            <p
              className="text-xl text-neutral max-w-3xl mx-auto"
              data-testid="languages-page-description"
            >
              Explore our comprehensive language programs designed to take you
              from beginner to fluency. Each course is carefully crafted by
              native speakers and language experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {languages.map((language, index) => (
              <LanguageCard
                key={language.id}
                language={language}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
              data-testid="benefits-title"
            >
              What's Included in Every Course
            </h2>
            <p
              className="text-xl text-neutral max-w-3xl mx-auto"
              data-testid="benefits-description"
            >
              Every LinguaLearn course comes with comprehensive materials and
              support to ensure your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Live Interactive Lessons",
                description:
                  "Join live classes with certified native instructors and fellow students from around the world.",
              },
              {
                title: "Cultural Immersion",
                description:
                  "Learn not just the language, but the culture, customs, and context behind every word.",
              },
              {
                title: "Progress Tracking",
                description:
                  "Monitor your improvement with detailed analytics and personalized feedback.",
              },
              {
                title: "Flexible Scheduling",
                description:
                  "Choose from multiple time slots that fit your schedule across different time zones.",
              },
              {
                title: "Course Materials",
                description:
                  "Access comprehensive digital textbooks, audio files, and interactive exercises.",
              },
              {
                title: "Certificate of Completion",
                description:
                  "Receive an internationally recognized certificate upon successful course completion.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                data-testid={`benefit-${index}`}
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

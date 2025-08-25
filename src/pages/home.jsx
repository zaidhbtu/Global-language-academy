import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LanguageCard from "../components/LanguageCard";
import FeatureCard from "../components/FeatureCard";
import TestimonialCard from "../components/TestimonialCard";
import ContactForm from "../components/ContactForm";
import { languages } from "../data/languages";
import { features } from "../data/features";
import { testimonials } from "../data/testimonials";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Home() {
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
      <Hero />

      {/* Language Offerings */}
      <section id="languages" className="py-20 bg-white">
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
              data-testid="languages-title"
            >
              Choose Your Language Journey
            </h2>
            <p
              className="text-xl text-neutral max-w-3xl mx-auto"
              data-testid="languages-description"
            >
              From beginner to advanced, our expert instructors guide you
              through immersive learning experiences tailored to your pace and
              goals.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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

      {/* Features */}
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
              data-testid="features-title"
            >
              Why Choose LinguaLearn?
            </h2>
            <p
              className="text-xl text-neutral max-w-3xl mx-auto"
              data-testid="features-description"
            >
              Our proven methodology combines modern technology with traditional
              teaching excellence to deliver results that last.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
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
              data-testid="testimonials-title"
            >
              Student Success Stories
            </h2>
            <p
              className="text-xl text-neutral max-w-3xl mx-auto"
              data-testid="testimonials-description"
            >
              Hear from our students who've transformed their careers and lives
              through language learning.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6"
                data-testid="about-title"
              >
                About LinguaLearn
              </h2>
              <p
                className="text-lg text-neutral mb-6 leading-relaxed"
                data-testid="about-description-1"
              >
                Founded in 2020, LinguaLearn has helped over 10,000 students
                worldwide achieve their language learning goals. Our mission is
                to break down language barriers and connect cultures through
                high-quality, accessible education.
              </p>
              <p
                className="text-lg text-neutral mb-8 leading-relaxed"
                data-testid="about-description-2"
              >
                Our team of 50+ certified instructors from around the world
                brings authentic cultural perspectives and proven teaching
                methodologies to create an immersive learning experience that
                goes beyond just vocabulary and grammar.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div
                    className="text-3xl font-bold text-primary"
                    data-testid="stat-students"
                  >
                    10,000+
                  </div>
                  <div className="text-neutral">Students Taught</div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-bold text-primary"
                    data-testid="stat-instructors"
                  >
                    50+
                  </div>
                  <div className="text-neutral">Expert Instructors</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Diverse group of international students learning together"
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="about-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
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
              data-testid="contact-title"
            >
              Ready to Start Your Language Journey?
            </h2>
            <p
              className="text-xl text-neutral max-w-3xl mx-auto"
              data-testid="contact-description"
            >
              Get in touch with our team to find the perfect course for your
              goals and schedule a free consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-2xl font-semibold text-slate-900 mb-6"
                data-testid="contact-info-title"
              >
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <FiMail className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <p className="text-neutral" data-testid="contact-email">
                      info@linguallearn.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <FiPhone className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <p className="text-neutral" data-testid="contact-phone">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <FiMapPin className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Address</p>
                    <p
                      className="text-neutral"
                      data-testid="contact-address"
                    >
                      123 Learning Street, Education City, EC 12345
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

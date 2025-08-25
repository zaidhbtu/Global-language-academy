import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { FiMail, FiPhone, FiMapPin, FiClock, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "info@linguallearn.com",
      description: "Send us an email anytime",
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call us during business hours",
    },
    {
      icon: FiMapPin,
      title: "Address",
      value: "123 Learning Street, Education City, EC 12345",
      description: "Visit our main campus",
    },
    {
      icon: FiClock,
      title: "Business Hours",
      value: "Mon-Fri: 9AM-6PM EST",
      description: "We're here to help",
    },
  ];

  const socialLinks = [
    { Icon: FiFacebook, href: "https://facebook.com", label: "Facebook", color: "hover:text-blue-600" },
    { Icon: FiTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-blue-400" },
    { Icon: FiInstagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-600" },
    { Icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-700" },
  ];

  const faqs = [
    {
      question: "How long does it take to complete a course?",
      answer: "Course duration varies by language and level. Most courses range from 10-18 weeks, with flexible pacing options available."
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes! We offer special pricing for groups of 3 or more students. Contact us for details on group enrollment."
    },
    {
      question: "Can I switch between courses?",
      answer: "Absolutely! You can upgrade or change courses within the first two weeks of enrollment with no additional fees."
    },
    {
      question: "What if I miss a live class?",
      answer: "All live classes are recorded and available for 30 days. You can also schedule makeup sessions with instructors."
    },
  ];

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
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6" data-testid="contact-page-title">
              Get in Touch
            </h1>
            <p className="text-xl text-neutral max-w-3xl mx-auto" data-testid="contact-page-description">
              Ready to start your language learning journey? We're here to help you find the perfect course 
              and answer any questions you might have.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold text-slate-900 mb-8" data-testid="contact-info-title">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    data-testid={`contact-info-${index}`}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{info.title}</h3>
                      <p className="text-lg text-slate-700 mb-1">{info.value}</p>
                      <p className="text-neutral text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4" data-testid="social-media-title">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map(({ Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      className={`w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 transition-colors ${color}`}
                      aria-label={label}
                      data-testid={`social-${label.toLowerCase()}`}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" data-testid="faq-title">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral" data-testid="faq-description">
              Find answers to common questions about our courses and enrollment process.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`faq-${index}`}
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" data-testid="cta-title">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8" data-testid="cta-description">
              Join thousands of successful language learners and start your journey today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-50 transition-colors"
              data-testid="cta-button"
            >
              Browse Our Courses
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiAward, FiGlobe, FiUsers, FiTrendingUp } from "react-icons/fi";

export default function About() {
  const stats = [
    { icon: FiUsers, value: "10,000+", label: "Students Taught", color: "text-primary" },
    { icon: FiGlobe, value: "50+", label: "Expert Instructors", color: "text-secondary" },
    { icon: FiAward, value: "15+", label: "Languages Offered", color: "text-accent" },
    { icon: FiTrendingUp, value: "95%", label: "Success Rate", color: "text-purple-600" },
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Head of Curriculum",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b586?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      description: "PhD in Applied Linguistics with 15+ years in language education.",
    },
    {
      name: "Carlos Rodriguez",
      role: "Spanish Language Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      description: "Native Spanish speaker and certified instructor from Madrid.",
    },
    {
      name: "Fatima Al-Rashid",
      role: "Arabic Language Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      description: "Expert in Modern Standard Arabic and regional dialects.",
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
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6" data-testid="about-page-title">
              About LinguaLearn
            </h1>
            <p className="text-xl text-neutral max-w-3xl mx-auto" data-testid="about-page-description">
              We're on a mission to connect cultures and break down language barriers through 
              world-class language education that's accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6" data-testid="mission-title">
                Our Mission
              </h2>
              <p className="text-lg text-neutral mb-6 leading-relaxed" data-testid="mission-description">
                Founded in 2020, LinguaLearn was born from the belief that language learning should be 
                engaging, effective, and accessible to everyone. We've helped over 10,000 students 
                worldwide achieve their language learning goals through our innovative approach that 
                combines cutting-edge technology with proven teaching methodologies.
              </p>
              <p className="text-lg text-neutral leading-relaxed" data-testid="vision-description">
                Our vision is to create a world where language barriers don't limit opportunities. 
                We believe that learning a new language opens doors to new cultures, relationships, 
                and professional possibilities.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Diverse team collaborating in modern office environment"
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="mission-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" data-testid="stats-title">
              Our Impact
            </h2>
            <p className="text-xl text-neutral max-w-3xl mx-auto" data-testid="stats-description">
              Numbers that reflect our commitment to excellence in language education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                data-testid={`stat-${index}`}
              >
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-neutral font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" data-testid="team-title">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-neutral max-w-3xl mx-auto" data-testid="team-description">
              Our experienced team of educators and language experts are passionate about 
              helping you achieve your language learning goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-slate-50 rounded-xl p-8 text-center border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                data-testid={`team-member-${index}`}
              >
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-neutral">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" data-testid="values-title">
              Our Values
            </h2>
            <p className="text-xl text-neutral max-w-3xl mx-auto" data-testid="values-description">
              The principles that guide everything we do at LinguaLearn.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for the highest quality in everything we do, from course content to student support.",
              },
              {
                title: "Accessibility",
                description: "Language learning should be available to everyone, regardless of background or circumstances.",
              },
              {
                title: "Cultural Respect",
                description: "We celebrate diversity and approach each language with deep respect for its cultural context.",
              },
              {
                title: "Innovation",
                description: "We continuously evolve our teaching methods and technology to enhance the learning experience.",
              },
              {
                title: "Community",
                description: "We foster a supportive environment where students and instructors learn from each other.",
              },
              {
                title: "Results",
                description: "We're committed to helping every student achieve their language learning goals successfully.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                data-testid={`value-${index}`}
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

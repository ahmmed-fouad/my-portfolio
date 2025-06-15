import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Creating modern, responsive web applications using the latest technologies like React, Next.js, and TypeScript.',
      icon: '🌐',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Development',
      ],
    },
    {
      title: 'UI/UX Design',
      description: 'Designing beautiful and intuitive user interfaces with a focus on user experience and accessibility.',
      icon: '🎨',
      features: [
        'User Interface Design',
        'User Experience Design',
        'Wireframing & Prototyping',
        'Design Systems',
      ],
    },
    {
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications using React Native for iOS and Android.',
      icon: '📱',
      features: [
        'Cross-platform Apps',
        'Native Features Integration',
        'App Store Optimization',
        'Performance Optimization',
      ],
    },
    {
      title: 'Consulting',
      description: 'Providing expert advice on technology stack, architecture, and best practices for your projects.',
      icon: '💡',
      features: [
        'Technical Architecture',
        'Code Review',
        'Performance Optimization',
        'Best Practices',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4 text-[hsl(var(--text))]">
          My Services
        </h1>
        <p className="text-xl text-[hsl(var(--text))]">
          I offer a wide range of services to help bring your ideas to life
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-lg p-8 shadow-lg bg-[hsl(var(--bgCard))] text-[hsl(var(--subText))]"
          >
            <div className="text-4xl mb-4 ">{service.icon}</div>
            <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--text))]">
              {service.title}
            </h2>
            <p className="text-foreground/60 mb-6">{service.description}</p>
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + featureIndex * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-primary">•</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            <Link
              to="/contact"
              className=" px-6 py-2 text-[hsl(var(--text))] border border-[hsl(var(--border))]  rounded-md hover:border-[hsl(var(--bordHover))] transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--text))]">
          Ready to Start Your Project?
        </h2>
        <p className="text-foreground/60 mb-8">
          Let's discuss how I can help bring your ideas to life
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 text-[hsl(var(--text))] border border-[hsl(var(--border))]  rounded-md hover:border-[hsl(var(--bordHover))] transition-colors"
        >
          Contact Me
        </Link>
      </motion.div>
    </div>
  );
};

export default Services; 
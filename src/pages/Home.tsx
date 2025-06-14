import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import devAnimation from '../assets/dev.json';
import { CreateApp } from '../components/CreateApp';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from '@/data/projects';

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/80 ">
        <div className="absolute inset-0 h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[hsl(var(--text)/0.4)] rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-4xl font-bold mb-6 text-[hsl(var(--text))] text-[hsl(var(--text)/var(--text-opacity))] text-xl ">
                Welcome to My Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-[hsl(var(--subText))] text-[hsl(var(--subText)/var(--subText-opacity))] mb-8">
                I'm a freelance developer specializing in creating modern,
                responsive web applications
              </p>
            </div>

            <div className="flex justify-center items-center">
              <Lottie
                className="w-1/1"
                animationData={devAnimation}
                loop={true}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-start gap-4">
            <Button
              asChild
              variant="outline"
              className="border-[hsl(var(--border))] hover:border-[hsl(var(--bordHover))] 
              text-[hsl(var(--text))] text-[hsl(var(--text)/var(--text-opacity))] bg-[hsl(var(--bgCard))]"
            >
              <Link to="/projects">View Projects</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-[hsl(var(--border))] hover:border-[hsl(var(--bordHover))]
               text-[hsl(var(--text))] text-[hsl(var(--text)/var(--text-opacity))] bg-[hsl(var(--bgCard))]"
            >
              <Link to="/create-app">Create Your Custom App</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-[hsl(var(--border))] hover:border-[hsl(var(--bordHover))]
               text-[hsl(var(--text))] text-[hsl(var(--text)/var(--text-opacity))] bg-[hsl(var(--bgCard))]"
            >
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card
                className="border-[hsl(var(--border))] hover:border-[hsl(var(--bordHover))]
                 bg-[hsl(var(--bgCard))]"
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-[hsl(var(--text))] text-[hsl(var(--text)/var(--text-opacity))]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--subText))] text-[hsl(var(--subText)/var(--subText-opacity))] text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "30+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--subText))] text-[hsl(var(--subText)/var(--subText-opacity))] mb-2">
                {stat.value}
              </div>
              <div className="text-[hsl(var(--subText))] text-[hsl(var(--subText)/var(--subText-opacity))]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Create App Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
          <CreateApp />
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 
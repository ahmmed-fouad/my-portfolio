import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import devAnimation from '../assets/dev.json';
import { CreateApp } from '../components/CreateApp';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features, homeButtons } from '@/data/projects';

const Home = () => {
  return (
    <div>
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto text-center"
        >
          <div className="flex items-center justify-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[hsl(var(--text))] text-xl ">
                Welcome to my Portfolio
              </h1>
              <p className="text-xl md:text-3xl text-[hsl(var(--subText2))] mb-8">
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

          <div className="flex flex-wrap justify-start gap-5 md:gap-12">
            {homeButtons.map((btn) => (
              <Button
                key={btn.id}
                asChild
                variant="outline"
                className="border-[hsl(var(--border))] hover:border-[hsl(var(--bordHover))] 
              text-[hsl(var(--text))] bg-[hsl(var(--bgCard))] text-xl py-5 px-8"
              >
                <Link to={btn.path}>{btn.title}</Link>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="my-[6rem] grid grid-cols-1 md:grid-cols-3 gap-8"
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
                 bg-[hsl(var(--bgCard))] h-[16rem]"
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-[hsl(var(--text))] text-3xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--subText))] text-xl">
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
              className="text-center bg-[hsl(var(--bgCard))] border border-[hsl(var(--border))] rounded-full py-8"
            >
              <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--subText)/0.8)] mb-2">
                {stat.value}
              </div>
              <div className="text-[hsl(var(--subText)/0.6)]">{stat.label}</div>
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
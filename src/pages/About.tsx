import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { skills } from '../data/projects';
import { Button } from '@/components/ui/button';

const About = () => {


  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-[hsl(var(--text))]">
            About Me
          </h1>
          <p className="text-xl text-[hsl(var(--subText2))]">
            Passionate developer crafting digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-[hsl(var(--subText))] bg-[hsl(var(--bgCard))] p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--text))]">
              My Journey
            </h2>
            <p className="text-[hsl(var(--subText))] mb-4">
              I'm a freelance developer with over 5 years of experience in
              creating modern web and mobile applications. My journey in
              software development began with a passion for building things that
              make a difference.
            </p>
            <p className="text-[hsl(var(--subText))] mb-4">
              Throughout my career, I've worked with various clients and
              companies, helping them transform their ideas into reality. I
              specialize in creating responsive, user-friendly applications
              using the latest technologies and best practices.
            </p>
            <p className="text-[hsl(var(--subText))]">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through technical writing and mentoring.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 "
          >
            <div className="bg-[hsl(var(--bgCard))] p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--text))]">
                Education
              </h2>
              <div className="space-y-4 text-[hsl(var(--subText))]">
                <div>
                  <h3>Bachelor of Science in Computer Science</h3>
                  <p>University Name, 2015-2019</p>
                </div>
                <div>
                  <h3>Full Stack Development Certification</h3>
                  <p className="text-foreground/60">Coding Bootcamp, 2020</p>
                </div>
              </div>
            </div>

            <div className="bg-[hsl(var(--bgCard))] p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--text))]">
                Certifications
              </h2>
              <div className="space-y-4 text-[hsl(var(--subText))]">
                <div>
                  <h3>AWS Certified Developer</h3>
                  <p>
                    Amazon Web Services, 2021
                  </p>
                </div>
                <div>
                  <h3>
                    Google Cloud Professional Developer
                  </h3>
                  <p>Google Cloud, 2022</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center text-[hsl(var(--text))]">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[hsl(var(--subText))] bg-[hsl(var(--bgCard))] p-6 rounded-lg">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full text-[hsl(var(--text))]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--text))]">
            Let's Work Together
          </h2>
          <p className="text-foreground/60 mb-8 text-[hsl(var(--subText2))]">
            I'm always open to discussing new projects and opportunities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="border-[hsl(var(--border))] hover:border-[hsl(var(--bordHover))]
               text-[hsl(var(--text))] bg-[hsl(var(--bgCard))]"
            >
              <Link to="/contact">contact me</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[hsl(var(--border))] hover:border-[hsl(var(--bordHover))]
               text-[hsl(var(--text))] bg-[hsl(var(--bgCard))]"
            >
              <Link to="/projects">View Projects</Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About; 
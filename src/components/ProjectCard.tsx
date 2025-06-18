import type { Project } from "../store/slices/projectsSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
    >
      <Card
        className="h-[27rem] flex flex-col justify-between
                    bg-[hsl(var(--bgCard))] border-[hsl(var(--border))] hover:border-[hsl(var(--bordHover))]"
      >
        <CardHeader className="p-2">
          <div className="aspect-video relative overflow-hidden group rounded">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div className="flex items-center justify-between mb-1 text-[hsl(var(--subText))]">
            <span className="px-2 py-1 text-xs font-medium rounded-full">
              {project.size}
            </span>
            <span className="px-2 py-1 text-xs font-medium rounded-full">
              ${project.price}
            </span>
            <span className="px-2 py-1 text-xs font-medium rounded-full">
              {project.type}
            </span>
          </div>

          <CardTitle className="text-[hsl(var(--text))] font-bold text-lg">
            {project.title}
          </CardTitle>

          <CardDescription className="text-[hsl(var(--subText))] line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-3">
          <div className="flex flex-wrap gap-2 text-[hsl(var(--text))]">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2 text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-center gap-2 px-4 py-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-[hsl(var(--border))] hover:border-[hsl(var(--bordHover))]
               text-[hsl(var(--text))] bg-[hsl(var(--bgCard))] cursor-pointer"
          >
            <Link to={`/projects/${project.id}`}>See More</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-[hsl(var(--border))] hover:border-[hsl(var(--bordHover))]
               text-[hsl(var(--text))] bg-[hsl(var(--bgCard))] cursor-pointer"
          >
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Try It
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-[hsl(var(--border))] hover:border-[hsl(var(--bordHover))]
               text-[hsl(var(--text))] bg-[hsl(var(--bgCard))] cursor-pointer"
          >
            <Link to={`/buy/${project.id}`}>Buy Now</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

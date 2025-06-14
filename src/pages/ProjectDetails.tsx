import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = useSelector((state: RootState) =>
    state.projects.projects.find((p) => p.id === id)
  );

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Project Details`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
            <h2 className="text-2xl font-bold mb-4">Project not found</h2>
            <Button asChild variant="outline" size="sm" className="border-[#5dbcfc4d] hover:border-[#5dbcfc]">
              <Link to="/projects">Back to Projects</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="bg-[hsl(var(--bgCard))] border-[hsl(var(--border))] text-[hsl(var(--subText))] text-[hsl(var(--subText)/var(--subText-opacity))]">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="text-[hsl(var(--text))] text-[hsl(var(--text)/var(--text-opacity))]">
              <div className="flex items-center gap-2 mb-4">
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
              <CardTitle className="text-[hsl(var(--text))] text-2xl font-bold">
                {project.title}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2 text-[hsl(var(--text))] text-[hsl(var(--text)/var(--text-opacity))]">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[hsl(var(--bgCard))] border-[hsl(var(--border))] text-[hsl(var(--subText))] text-[hsl(var(--subText)/var(--subText-opacity))]">
            <CardHeader className="text-[hsl(var(--text))] text-[hsl(var(--text)/var(--text-opacity))] text-2xl">
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[hsl(var(--text))] text-[hsl(var(--text)/var(--text-opacity))]">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-[hsl(var(--bgCard))] border-[hsl(var(--border))] text-[hsl(var(--subText))] text-[hsl(var(--subText)/var(--subText-opacity))] min-h-[485px]">
            <CardHeader className="text-[hsl(var(--text))] text-[hsl(var(--text)/var(--text-opacity))] text-2xl">
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 text-[hsl(var(--text))] text-[hsl(var(--text)/var(--text-opacity))]">
                  Description
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.longDescription}
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-[hsl(var(--text))] text-[hsl(var(--text)/var(--text-opacity))]">
                  Technologies Used
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.technologies.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-[hsl(var(--text))] text-[hsl(var(--text)/var(--text-opacity))]">
                  Requirements
                </h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {project.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[hsl(var(--bgCard))] border-[hsl(var(--border))] text-[hsl(var(--subText))] text-[hsl(var(--subText)/var(--subText-opacity))] min-h-[210px]">
            <CardHeader className="text-[hsl(var(--text))] text-[hsl(var(--text)/var(--text-opacity))] text-2xl">
              <CardTitle>Get Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-[hsl(var(--border))] hover:border-[hsl(var(--bordHover))]
               text-[hsl(var(--text))] bg-[hsl(var(--bgCard))] cursor-pointer"
                >
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Live Demo
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-[hsl(var(--border))] hover:border-[hsl(var(--bordHover))]
               text-[hsl(var(--text))] bg-[hsl(var(--bgCard))] cursor-pointer"
                >
                  <Link to={`/buy/${project.id}`}>Purchase Project</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails; 
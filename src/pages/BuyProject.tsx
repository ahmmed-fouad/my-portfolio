import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { byProjectInputs, whatIsIncluded } from '@/data/projects';

const BuyProject = () => {
  const { id } = useParams<{ id: string }>();
  const project = useSelector((state: RootState) =>
    state.projects.projects.find((p) => p.id === id)
  );

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
            <h2 className="text-2xl font-bold mb-4">Project not found</h2>
            <Button asChild variant="outline" size="sm" className="border-[hsl(var(--border))] hover:border-[hsl(var(--bordHover))]">
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
          <Card className="bg-[hsl(var(--bgCard))] border-[hsl(var(--border))] text-[hsl(var(--subText))]">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
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
              <div className="flex flex-wrap gap-2">
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
        </div>

        <div className="space-y-6">
          <Card className="bg-[hsl(var(--bgCard))] border-[hsl(var(--border))] text-[hsl(var(--subText))]">
            <CardHeader>
              <CardTitle className="text-[hsl(var(--text))] text-xl">
                Purchase Project
              </CardTitle>
              <CardDescription>
                Fill in your details to complete the purchase
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {byProjectInputs.map((item) => (
                <div className="space-y-2">
                  <label
                    htmlFor={item.htmlFor}
                    className="text-sm font-medium text-[hsl(var(--text))]"
                  >
                    {item.label}
                  </label>
                  <Input
                    id={item.htmlFor}
                    type={item.type}
                    placeholder={item.placeholder}
                    className="border-[hsl(var(--border))] focus:border-[hsl(var(--bordHover))]"
                  />
                </div>
              ))}

              <div className="pt-4">
                <Button className="w-full text-[hsl(var(--text))]">
                  Complete Purchase - ${project.price}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[hsl(var(--bgCard))] border-[hsl(var(--border))] text-[hsl(var(--subText))]">
            <CardHeader>
              <CardTitle className="text-[hsl(var(--text))] text-xl">
                What's Included
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {whatIsIncluded.map((item) => (
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--text))]">{item.sypole}</span>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BuyProject; 
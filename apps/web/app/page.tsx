import { Button } from "@repo/ui/button";
import { ProjectCard } from "@repo/ui/components/project-card";

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto">
      <main>
        <ProjectCard
          id="1"
          name="Project 1"
          description="Project 1 description"
        />
        <Button appName="web">Open alert</Button>
      </main>
    </div>
  );
}

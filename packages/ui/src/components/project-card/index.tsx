import { Project } from "@repo/types";

export const ProjectCard: React.FC<Project> = ({
  name = "Default Project",
  description = "Default Description",
}) => {
  return (
    <div className="text-2xl font-bold text-green-600">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

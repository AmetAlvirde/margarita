import { Project } from "@repo/types";

export const ProjectCard: React.FC<Project> = ({
  name = "Default Project",
  description = "Default Description",
  id = "",
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

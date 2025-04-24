import "./App.css";
import { ProjectCard } from "./components/project-card";

function App() {
  return (
    <>
      <div>
        <ProjectCard
          id="1"
          name="Project 1"
          description="Project 1 description"
        />
      </div>
    </>
  );
}

export default App;

import { Button } from "@repo/ui/button";
import { ProjectCard } from "@repo/ui/components/project-card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProjectCard
          id="1"
          name="Project 1"
          description="Project 1 description"
        />
        <Button appName="web" className={styles.secondary}>
          Open alert
        </Button>
      </main>
    </div>
  );
}

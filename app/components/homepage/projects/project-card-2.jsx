// ProjectCard.jsx
// @flow strict

import { projectsData } from "@/utils/data/projects";
import Image from "next/image";

function Projects() {
  return (
    <div id="projects" style={styles.container}>
      <h2 style={styles.heading}>Projects</h2>

      <div style={styles.projectGrid}>
        {projectsData.map((project) => (
          <div key={project.id} style={styles.projectCard}>
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={200}
              style={styles.image}
            />
            <h3 style={styles.projectTitle}>{project.name}</h3>
            <p style={styles.description}>{project.description}</p>
            
            <div style={styles.tools}>
              <strong>Tools:</strong> {project.tools.join(", ")}
            </div>

            <div style={styles.buttons}>
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.button}
                >
                  Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.button}
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem 1rem',
    margin: '3rem auto',
    maxWidth: '1200px',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#16f2b3',
    marginBottom: '2rem',
    fontWeight: 'bold',
  },
  projectGrid: {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  },
  projectCard: {
    backgroundColor: '#1a1b2e',
    borderRadius: '8px',
    padding: '1.5rem',
    color: '#fff',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    ':hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  image: {
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  projectTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
  },
  description: {
    fontSize: '0.9rem',
    lineHeight: '1.6',
    marginTop: '0.5rem',
  },
  tools: {
    fontSize: '0.8rem',
    color: '#cfcfcf',
    marginTop: '0.75rem',
  },
  buttons: {
    marginTop: '1rem',
    display: 'flex',
    gap: '0.5rem',
  },
  button: {
    backgroundColor: '#16f2b3',
    color: '#1a1b2e',
    padding: '0.4rem 0.8rem',
    fontSize: '0.8rem',
    borderRadius: '4px',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#13c29a',
    },
  },
};

export default Projects;

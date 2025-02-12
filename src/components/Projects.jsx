 import "../styles/projects.css";
 import project1 from "../assets/images/project1.jpg";
 import project2 from "../assets/images/project2.jpg";
 import project3 from "../assets/images/project3.jpg";

const projects = [
  { id: 1, image: project1, title: "Apartment in Beirut", location: "Lebanon, Floor 1" },
  { id: 2, image: project2, title: "Apartment in Beirut", location: "Lebanon, Floor 2" },
  { id: 3, image: project3, title: "Apartment in Beirut", location: "Lebanon, Floor 3" },
  { id: 4, image: project1, title: "Apartment in Beirut", location: "Lebanon, Floor 4" },
  { id: 5, image: project2, title: "Apartment in Beirut", location: "Lebanon, Floor 5" },
  { id: 6, image: project3, title: "Apartment in Beirut", location: "Lebanon, Floor 6" }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>
        Every project is <span className="highlight">special</span> for <span className="highlight">us</span>.
      </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

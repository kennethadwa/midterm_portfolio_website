import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import piskel from "../../Assets/Projects/piskel.gif";
import prenup from "../../Assets/Projects/prenup.png";
import poster from "../../Assets/Projects/poster.png";
import sketch from "../../Assets/Projects/sketch.png";
import animation from "../../Assets/Projects/animation.gif";
import vector from "../../Assets/Projects/vector.png";
import logo from "../../Assets/Projects/logo.png";
import img_enhance from "../../Assets/Projects/img_enchance.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vector}
              isBlog={false}
              title="Vector Graphic"
              description="I created a vector graphic of a potato cartoon using Krita and explored how vectors differ from raster graphics. Unlike rasters, vectors can be scaled without losing quality, which was interesting to learn during the process."
              ghLink="https://github.com/kennethadwa"
              demoLink="https://github.com/kennethadwa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img_enhance}
              isBlog={false}
              title="Image Enhancing"
              description="I enhanced an image using Krita by applying an oil paint effect. I adjusted the brush size to 3 and set the smoothness to 20, transforming the normal image into a vivid, textured artwork that mimics the look of traditional oil painting."
              ghLink="https://github.com/kennethadwa"
              demoLink="https://github.com/kennethadwa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poster}
              isBlog={false}
              title="Movie Poster"
              description="I created my own version of the Inside Out movie poster for our activity, where we had to alter the original poster of a film. I redesigned it with a fresh perspective, using new elements and colors to bring a unique twist."
              ghLink="https://github.com/kennethadwa"
              demoLink="https://github.com/kennethadwa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sketch}
              isBlog={false}
              title="Flip Book Sketch"
              description="I created a flipbook featuring two fish and coral reefs. The animation shows one fish biting a bait, leading to it getting caught. This sequence brings the underwater scene to life, adding a dynamic and engaging storyline to the simple drawings."
              ghLink="https://github.com/kennethadwa"
              demoLink="https://github.com/kennethadwa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={animation}
              isBlog={false}
              title="Flip Book Animation"
              description="I animated the flipbook into a smooth animation, bringing the story of the fish and coral reefs to life. The movement of the fish biting the bait and getting caught adds a fluid and captivating element, making the underwater scene more vivid and engaging."
              ghLink="https://github.com/kennethadwa"
              demoLink="https://github.com/kennethadwa"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={piskel}
              isBlog={false}
              title="GIF Animation"
              description="I created a GIF using Piskel.com where I drew Goku and used over 18 frames to animate it. The multiple frames added fluid motion to the character, capturing Goku's dynamic movements and bringing the animation to life in a captivating way."
              ghLink="https://github.com/kennethadwa"
              demoLink="https://github.com/kennethadwa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="Logo Making"
              description="I created a logo of Sagittarius from the zodiac sign and added a white circle background to resemble the moon. This design choice enhanced the logo's appearance, giving it a celestial and mystical vibe that represents the essence of the Sagittarius sign."
              ghLink="https://github.com/kennethadwa"
              demoLink="https://github.com/kennethadwa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prenup}
              isBlog={false}
              title="Prenup Photo shoot"
              description="We did a prenup photoshoot for one of our activities with a theme inspired by the 1900s style. The vintage theme added a classic and timeless feel to the photos, capturing the elegance and charm of that era in each shot."
              ghLink="https://github.com/kennethadwa"
              demoLink="https://github.com/kennethadwa"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

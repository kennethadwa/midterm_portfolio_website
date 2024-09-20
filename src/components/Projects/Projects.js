import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import piskel from "../../Assets/Projects/piskel.gif";
import prenup from "../../Assets/Projects/prenup.png";
import poster from "../../Assets/Projects/poster.png";
import raster from "../../Assets/Projects/raster.png";
import pixelized from "../../Assets/Projects/pixelized.png";
import blur from "../../Assets/Projects/BLUr.png";
import edge from "../../Assets/Projects/edge.png";
import draw from "../../Assets/Projects/draw.png";
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
              imgPath={raster}
              isBlog={false}
              title="Raster Graphic"
              description="I created a raster graphic of a potato cartoon using Krita and explored how rasters differ from vector graphics. Unlike vectors, rasters rely on pixels, which can lose quality when scaled, making it interesting to understand the limitations and strengths of this format."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vector}
              isBlog={false}
              title="Vector Graphic"
              description="I created a vector graphic of a potato cartoon using Krita and explored how vectors differ from raster graphics. Unlike rasters, vectors can be scaled without losing quality, which was interesting to learn during the process."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poster}
              isBlog={false}
              title="Movie Poster"
              description="I created my own version of the Inside Out movie poster for our activity, where we had to alter the original poster of a film. I redesigned it with a fresh perspective, using new elements and colors to bring a unique twist."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={draw}
              isBlog={false}
              title="Drawing inside NU Lipa"
              description="I drew a sketch of my school, NU Lipa, for an activity using a ballpen and colors on a sketchpad. I added details and colors to give it a fresh look, creating a unique and personal version of the school."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sketch}
              isBlog={false}
              title="Flip Book Sketch"
              description="I created a flipbook featuring two fish and coral reefs. The animation shows one fish biting a bait, leading to it getting caught. This sequence brings the underwater scene to life, adding a dynamic and engaging storyline to the simple drawings."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={animation}
              isBlog={false}
              title="Flip Book Animation"
              description="I animated the flipbook into a smooth animation, bringing the story of the fish and coral reefs to life. The movement of the fish biting the bait and getting caught adds a fluid and captivating element, making the underwater scene more vivid and engaging."            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={piskel}
              isBlog={false}
              title="GIF Animation"
              description="I created a GIF using Piskel.com where I drew Goku and used over 18 frames to animate it. The multiple frames added fluid motion to the character, capturing Goku's dynamic movements and bringing the animation to life in a captivating way."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="Logo Making"
              description="I created a logo of Sagittarius from the zodiac sign and added a white circle background to resemble the moon. This design choice enhanced the logo's appearance, giving it a celestial and mystical vibe that represents the essence of the Sagittarius sign."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prenup}
              isBlog={false}
              title="Prenup Photo shoot"
              description="We did a prenup photoshoot for one of our activities with a theme inspired by the 1900s style. The vintage theme added a classic and timeless feel to the photos, capturing the elegance and charm of that era in each shot."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img_enhance}
              isBlog={false}
              title="Oil Paint"
              description="I enhanced an image using Krita by applying an oil paint effect. I adjusted the brush size to 3 and set the smoothness to 20, transforming the normal image into a vivid, textured artwork that mimics the look of traditional oil painting."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blur}
              isBlog={false}
              title="Blur"
              description="I enhanced an image using Krita by applying a blur effect. I adjusted both the horizontal and vertical radius to 9, softening the image and transforming it into a smooth, diffused composition that adds a subtle, dreamlike quality to the original."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pixelized}
              isBlog={false}
              title="Pixelize"
              description="I enhanced an image using Krita by applying a pixelize effect. I set the width to 2 and the height to 17, transforming the image into a stylized, blocky composition that gives it a unique, retro pixelated appearance while maintaining some vertical detail."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edge}
              isBlog={false}
              title="Edge Detection"
              description="I enhanced an image using Krita by applying an edge detection effect. This process highlighted the outlines and transformed the original image into a striking composition, emphasizing sharp contrasts and giving it a bold, sketch-like appearance."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

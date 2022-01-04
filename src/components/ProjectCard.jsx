import { FiGithub } from "react-icons/fi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { CardContainer, CardContent, CardLink, Flex } from "../styles/ProjectCard.style";
const ProjectCard = ({
  item: { title, body, image, tech, linkgithub, linkdemo },
}) => {
  return (
    <>
      <CardContainer data-aos="zoom-in">
        <div>
          <img src={image} alt="" />
        </div>
        <CardContent>
          <Flex>
            <h3>{title}</h3>
            <CardLink>
              <a href={linkgithub} target={"_blank"} rel="noopener noreferrer">
                <FiGithub className="icon" />
              </a>
              <a href={linkdemo} target={"_blank"} rel="noopener noreferrer">
                <BsBoxArrowUpRight className="icon" />
              </a>
            </CardLink>
          </Flex>
          <p>{body}</p>
          <pre>{tech}</pre>
        </CardContent>
      </CardContainer>
    </>
  );
};

export default ProjectCard;

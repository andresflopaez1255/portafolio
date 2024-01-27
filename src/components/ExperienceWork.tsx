import  { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useWorkExperience from "../hooks/work-experience/useWorkInfo";
import experienceWork from "../assets/image-experience.png"
import { Element } from 'react-scroll';

export default function ExperienceWork() {
  const { workData } = useWorkExperience();

  const [showText, setshowText] = useState(false);

  const [textLink, settextLink] = useState("Ver mas");
  const onClickText = () => {
    if (!showText) {
      settextLink("Ver menos");
      setshowText(true);
      return;
    }

    settextLink("Ver mas");
    setshowText(false);
  };
  return (
    <Element name="work" className="work-container">
      <Row>
        <Col xs={12} md={12} lg={5}>
          <img
            className="banner-image-work"
            src={experienceWork}
            alt="Descripción de la imagen"
          />
        </Col>

        <Col xs={12} md={12} lg={7}>
          <p className="paragraph">
            {showText == false ? workData.substring(0, 406) : workData}
            <p onClick={() => onClickText()} className="link-experience">
              {textLink}
            </p>
          </p>
        </Col>
      </Row>
    </Element>
  );
}

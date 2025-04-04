import React, { forwardRef } from "react";
import { Col } from "react-grid-system";

// import skillsData from "../../data/skills.json";

import { MSkillsItem } from "../../components";

import { PageWrapper, PageHeader } from "../Pages.styles";
import { SkillsContainer, SkillsRow, RowHeader } from "./Skills.styles";

const colProps = {
  xxl: 1.2,
  xl: 1.5,
  lg: 1.8, //2
  md: 2.5,
  sm: 3.5,
  xs: 3.4,
  offset: {
    xl: 0.2, //0.5
    lg: 0.2,
    md: 0,
    sm: 0.4,
    xs: 0,
  },
};

const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

const skillCardsAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: !isSmallScreen ? 180 : 50,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
      duration: !isSmallScreen ? 0.8 : 0.7,
      delay: custom * 0.2,
      type: "spring",
    },
  }),
};

export const Skills = forwardRef(({ skillsData }, ref) => {
  return (
    <PageWrapper id="s-skills" ref={ref}>
      <PageHeader> My skills </PageHeader>

      <SkillsContainer>
        <SkillsRow>
          <RowHeader>Layout</RowHeader>
          {skillsData.layout.map((item, index) => (
            <Col key={item.name} {...colProps}>
              <MSkillsItem
                name={item.name}
                level={item.level}
                variants={skillCardsAnimation}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                custom={index}
              />
            </Col>
          ))}
        </SkillsRow>

        <SkillsRow>
          <RowHeader>Development</RowHeader>
          {skillsData.development.map((item, index) => (
            <Col key={item.name} {...colProps}>
              <MSkillsItem
                name={item.name}
                level={item.level}
                variants={skillCardsAnimation}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                custom={index + 0.3}
              />
            </Col>
          ))}
        </SkillsRow>

        <SkillsRow>
          <RowHeader>Tools</RowHeader>
          {skillsData.tools.map((item, index) => (
            <Col key={item.name} {...colProps}>
              <MSkillsItem
                name={item.name}
                level={item.level}
                variants={skillCardsAnimation}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                custom={index + 0.6}
              />
            </Col>
          ))}
        </SkillsRow>

        <SkillsRow>
          <RowHeader>Graphics</RowHeader>
          {skillsData.graphic.map((item, index) => (
            <Col key={item.name} {...colProps}>
              <MSkillsItem
                name={item.name}
                level={item.level}
                variants={skillCardsAnimation}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                custom={index + 0.9}
              />
            </Col>
          ))}
        </SkillsRow>
      </SkillsContainer>
    </PageWrapper>
  );
});

import React, {forwardRef} from 'react'
import { Container, Col } from 'react-grid-system'
import {motion} from 'framer-motion'

import skillsData from '../../data/skills.json'

import { MSkillsItem} from '../../components'

import { 
  PageWrapper,
  PageHeader
 } from '../Pages.styles'
import {
  SkillsRow,
  RowHeader
} from './Skills.styles'


const colProps = {
  xl: 1.5,
  lg: 2,
  md: 2.8,
  sm: 4,
  xs: 3.4,
  offset: {
    xl: 0.5,
    lg: 0.2,
    md: 0,
    sm: 0
  }
}

const skillCardsAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: 150
  },
  visible: custom => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
      duration: 0.5,
      delay: custom * 0.2,
      type: "spring"
    }
  })
}


export const Skills = forwardRef((props, ref) => {
  return (
    <PageWrapper
      id="s-skills"
      ref={ref}
    >
      <PageHeader> My skills </PageHeader>

      <Container 
        style={{paddingBottom: "250px"}}

      >
        <SkillsRow>
          <RowHeader>
            Layout
          </RowHeader>
          {
            skillsData.layout.map((item, index)=> (
              <Col 
                key = {item.name} 
                {...colProps}
              >
                <MSkillsItem
                  name={item.name}
                  level={item.level}
                  variants={skillCardsAnimation}
                  initial='hidden'
                  whileInView='visible'
                  whileHover='hover'
                  custom={index}
                />
              </Col>
            ))
          }
        </SkillsRow>

       <SkillsRow >
          <RowHeader>
            Programing
          </RowHeader>
          {
            skillsData.programing.map((item, index)=> (
              <Col key={item.name} {...colProps}>
                <MSkillsItem
                  name={item.name}
                  level={item.level}
                  variants={skillCardsAnimation}
                  initial='hidden'
                  whileInView='visible'
                  whileHover='hover'
                  custom={index + 0.3}
                />
              </Col>
            ))
          }
        </SkillsRow>

        <SkillsRow >
          <RowHeader>
            Tools
          </RowHeader>
          {
            skillsData.tools.map((item, index)=> (
              <Col key={item.name} {...colProps}>
                <MSkillsItem
                  name={item.name}
                  level={item.level}
                  variants={skillCardsAnimation}
                  initial='hidden'
                  whileInView='visible'
                  whileHover='hover'
                  custom={index + 0.6}
                />
              </Col>
            ))
          }
        </SkillsRow>

        <SkillsRow >
          <RowHeader>
            Graphics
          </RowHeader>
          {
            skillsData.graphic.map((item, index)=> (
              <Col 
                key={item.name}
                {...colProps}
              >
                <MSkillsItem
                  name={item.name}
                  level={item.level}
                  variants={skillCardsAnimation}
                  initial='hidden'
                  whileInView='visible'
                  whileHover='hover'
                  custom={index + 0.9}
                />
              </Col>
            ))
          }
        </SkillsRow>

      </Container >


    </PageWrapper>
  )
})



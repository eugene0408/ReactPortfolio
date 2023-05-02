import React, {forwardRef} from 'react'
import { Container, Col } from 'react-grid-system'

import skillsData from '../../data/skills.json'

import { SkillsItem } from '../../components'

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


export const Skills = forwardRef((props, ref) => {
  return (
    <PageWrapper
      id="s-skills"
      ref={ref}
    >
      <PageHeader> My skills </PageHeader>

      <Container style={{paddingBottom: "250px"}}>
        <SkillsRow>
          <RowHeader>
            Layout
          </RowHeader>
          {
            skillsData.layout.map((item)=> (
              <Col key = {item.name} {...colProps}>
                <SkillsItem 
                  name={item.name}
                  level={item.level}
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
            skillsData.programing.map((item)=> (
              <Col key={item.name} {...colProps}>
                <SkillsItem 
                  name={item.name}
                  level={item.level}
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
            skillsData.tools.map((item)=> (
              <Col key={item.name} {...colProps}>
                <SkillsItem 
                  name={item.name}
                  level={item.level}
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
            skillsData.graphic.map((item)=> (
              <Col 
                key={item.name}
                {...colProps}
              >
                <SkillsItem 
                  name={item.name}
                  level={item.level}
                />
              </Col>
            ))
          }
        </SkillsRow>

      </Container >


    </PageWrapper>
  )
})



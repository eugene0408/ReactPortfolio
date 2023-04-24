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
  RowHeader,
} from './Skills.styles'


const colProps = {
  md: 1.5,
  offset: {
    md: 0.5
  }
}


export const Skills = forwardRef((props, ref) => {
  return (
    <PageWrapper
      id="s-skills"
      ref={ref}
    >
      <PageHeader> My skills </PageHeader>

      <Container>
        <SkillsRow >
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

      </Container>


    </PageWrapper>
  )
})



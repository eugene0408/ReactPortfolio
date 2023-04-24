import React, { useContext } from 'react'
import { SkillsIcons } from '../SkillsIcons'

import { ThemeContext } from '../../App'

import { 
    Wrapper,
    IconWrapper,
    Title,
    Line
 } from './SkillsItem.styles'


export const SkillsItem = ({name, level}) => {
  const {finalTheme} = useContext(ThemeContext)

  return (
    <Wrapper theme={finalTheme}>
        <IconWrapper>
            <SkillsIcons name={name} />
        </IconWrapper>
        <Title>
            {name}
        </Title>
        <Line level={level}/>
    </Wrapper>
  )
}

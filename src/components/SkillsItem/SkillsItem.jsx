import React, { useContext, forwardRef } from 'react'
import {motion} from 'framer-motion'

import { ThemeContext } from '../../App'

import { SkillsIcons } from '../SkillsIcons'


import { 
    Wrapper,
    IconWrapper,
    Title,
    Line,
    LineWrapper,
    HoverLine
 } from './SkillsItem.styles'


const lineAnimation = {
  hidden: {
    width: 0
  },
  visible: custom => ({
    width: `${custom}%`,
    transition: {
      duration: 0.4
    }
  }),
  hover: {
    width: 0,
  }

}

const lineHoverAnimation = {
  hidden: {
    width: 0
  },
  visible: {
    width: 0
  },
  hover: custom => ({
    width: `${custom}%`,
    transition: {
      duration: 0.4,
      type: "spring"
    }
  })
}



const SkillsItem = forwardRef(({name, level}, ref) => {
  const {theme} = useContext(ThemeContext)

  return (
    <Wrapper 
      theme={theme}
      ref={ref}
    >
        <IconWrapper>
            <SkillsIcons name={name} />
        </IconWrapper>

        <Title>
            {name}
        </Title>

        <LineWrapper>
          <Line 
            level={level} 
            as={motion.div}
            variants={lineAnimation} 
            custom={level}
          />
          <HoverLine 
            level={level}
            as={motion.div}
            variants={lineHoverAnimation}
            custom={level}
          />
        </LineWrapper>

    </Wrapper>
  )
})

export const MSkillsItem = motion(SkillsItem)

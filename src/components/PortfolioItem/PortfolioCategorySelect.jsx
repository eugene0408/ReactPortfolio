import React from 'react'
import { SkillsIcons } from '../SkillsIcons'

import {
    Wrapper,
    Item
} from './PortfolioCategorySelect.styles'

export const PortfolioCategorySelect = ({
    curCategory,
    setCategory
}) => {

    const categories = ['react', 'js']
    const changeCategory = e => setCategory(e.currentTarget.value);

  return (
    <Wrapper>
        { 
            categories.map((category) => (
                <Item
                    key={`pc-${category}`}
                    value={category}
                    onClick={e => changeCategory(e)}
                    curCategory={curCategory}
                >
                    <SkillsIcons name={category}/>
                    {category}
                </Item>
            ))
        }
    </Wrapper>
  )
}

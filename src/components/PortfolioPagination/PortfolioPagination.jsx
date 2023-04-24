import React from 'react'

import {
    Wrapper,
    Item
} from './PortfolioPagination.styles'

export const PortfolioPagination = ({
    curScreen,
    setCurScreen,
    totalScreens
}) => {



  return (
    <Wrapper>
        {totalScreens.map(number => (
            <Item 
                key={`portpag${number + Math.floor(Math.random() * 100000)}`}
                onClick={() => setCurScreen(number)}
                isActive={number === curScreen ? true : false}
            />
        ))
        }
    </Wrapper>
  )
}

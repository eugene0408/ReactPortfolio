import React from 'react'
import {motion, cubicBezier} from 'framer-motion'

import {
    Wrapper,
    Container,
    Item
} from './Loading.styles'

export const Loading = () => {

  const loaderEasing = cubicBezier(0,0.8,0.8,0);

  const loaderTransition = {
    duration: 0.6,
    repeat: Infinity, 
    ease: loaderEasing
  }

  return (
    <Wrapper>
        <Container>
            <Item
              as={motion.div}
              initial={{scale: 0}}
              animate={{scale: 1}}
              transition={loaderTransition}
            />
            <Item
              as={motion.div}
              initial={{x: 0, y: 0}}
              animate={{x: 32, y: 0}}
              transition={loaderTransition}
            />
            <Item
              as={motion.div}
              initial={{x: 0, y: 0}}
              animate={{x: 32, y: 0}}
              transition={loaderTransition}
            />
            <Item
              as={motion.div}
              initial={{scale: 1}}
              animate={{scale: 0}}
              transition={loaderTransition}
            />
        </Container>
    </Wrapper>
  )
}

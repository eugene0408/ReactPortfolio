import React from 'react'
import {motion} from 'framer-motion'

import {ReactComponent as InternetIcon} from '../../assets/icons/internet.svg'
import {ReactComponent as GitHubIcon} from '../../assets/icons/skills/github.svg'

import {
    Wrapper,
    ScreensWrapper,
    ScreensContainer,
    DescrWrapper,
    DesctopScreen,
    Title,
    Description,
    MobileScreen,
    Tags,
    LinksWrapper,
    LinkItem
} from './PortfolioItem.styles' 

 const bigScreenAnimation = {
  hidden: {
    opacity: 0,
    x: -150
  },
  visible: {
    opacity: 1,
    x: 0,
    z: 1,
    transition: {
      type: "spring"
    }
  },
  hover: {
    z: 5,
    rotateY: -10,
    transition: {
      rotateY: {duration: .4, type: "ease-in-out"},
      z: { type: "ease-in-out"}
    }
  }
}

const smallScreenAnimation = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    z: 20,
    transition: {
      delay: 0.1,
      type: "spring",
      opacity: {duration: 0.1},
      x: {duration: 0.3}
    }
  },
  hover: {
    z: 100,
    rotateY: -10,
    transition: {
      rotateY: {duration: .4, type: "ease-in-out"},
      z: {duration: .3, type: "ease-in-out"}
    }
  }
}

const tagsWrapperAnimation = {
  hover: {
    z: 45,
    rotateY: -10,
    transition: {
      duration: .3
    }
  }
}

const tagAnimation = {
  hidden: {
    opacity: 0,
    y: 25
  },
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.1
    }
  }),
  hover: {
    color: 'var(--theme-accent)'
  }
}

const titleAnimation = {
  hidden: {
    opacity: 0,
    y: -50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring"
    }
  }
}

const textAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
}

const linksAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: {
      duration: custom*0.8,
      type: "spring"
    }
  })
}



export const PortfolioItem = ({
  desktop,
  mobile,
  descr,
  title,
  tags,
  website,
  repo
}) => {
  return (
    <Wrapper>
        <ScreensWrapper
          as={motion.div}
          initial='hidden'
          whileInView='visible'
          whileHover='hover'
        >
          <ScreensContainer
            as={motion.div}
            style={{
              perspective: '2000px',
              transformStyle: 'preserve-3d'
            }}
          >
            <DesctopScreen
              as={motion.div}
              variants={bigScreenAnimation}
            >
              <motion.img 
                src={desktop} 
                alt={`${title}-img`} 
              />
            </DesctopScreen>

            <Tags
              as={motion.div}
              variants={tagsWrapperAnimation}
              > 
                { tags.map((tag, index) => (
                  <motion.div
                    key={tag + Math.floor((Math.random()*1000)+1) }
                    variants={tagAnimation}
                    initial='hidden'
                    animate='visible'
                    whileHover='hover'
                    custom={index}    
                  >
                    {tag}
                  </motion.div>
                  )) 
                }
            </Tags>

            <MobileScreen
                as={motion.div}
                variants={smallScreenAnimation}

              >
                <img 
                  src={mobile} 
                  alt={`${title}-small-img`} 
                />
            </MobileScreen>
          </ScreensContainer>
        </ScreensWrapper>
        <DescrWrapper>

            <Title
              as={motion.h3}
              variants={titleAnimation}
              initial='hidden'
              whileInView='visible'
            >
              {title}
            </Title>

            <Description
              as={motion.p}
              variants={textAnimation}
              initial='hidden'
              whileInView='visible'
            >
              {descr}
            </Description>

            <LinksWrapper
              as={motion.div}
            >

              <LinkItem 
                href={website}
                as={motion.a}
                variants={linksAnimation}
                custom={2}
                initial="hidden"
                whileInView="visible"
              >
                website <InternetIcon />
              </LinkItem>
              
              <motion.span
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.3}}
              >
                ||
              </motion.span>

              <LinkItem 
                href={repo}
                as={motion.a}
                variants={linksAnimation}
                custom={3}
                initial="hidden"
                whileInView="visible"
              >
                <GitHubIcon /> repository
              </LinkItem>

            </LinksWrapper>
        </DescrWrapper>
    </Wrapper>
  )
}

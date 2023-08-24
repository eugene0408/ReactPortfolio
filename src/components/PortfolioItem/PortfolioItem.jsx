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
    transition: {
      type: "spring"
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
    transition: {
      delay: 0.1,
      type: "spring",
      opacity: {duration: 0.1},
      x: {duration: 0.3}
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
        <ScreensWrapper>
          <ScreensContainer>
            <DesctopScreen
              as={motion.div}
              variants={bigScreenAnimation}
              initial='hidden'
              whileInView='visible'
            >
              <motion.img 
                src={desktop} 
                alt={`${title}-img`} 
              />
            </DesctopScreen>

            <Tags
              >
                { tags.map((tag, index) => (
                  <motion.div
                    key={tag + Math.floor((Math.random()*1000)+1) }
                    variants={tagAnimation}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true}}
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
                initial='hidden'
                whileInView='visible'
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

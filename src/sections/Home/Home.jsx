import React, {useContext}from 'react'
import { ThemeContext } from '../../App'
import { motion } from 'framer-motion'

// Grid
import { Container, Row, Col } from 'react-grid-system'

// Images
import {ReactComponent as DownloadIcon} from '../../assets/icons/document.svg'
import ava from '../../assets/images/morda.png'
import sun from '../../assets/images/sun.png'
import moon from '../../assets/images/moon.png'

// Components
import { 
  AccentButton, 
  CVButton, 
  CVIcon 
} from '../../components'

// Styles
import { 
  PageWrapper 
} from '../Pages.styles'
import {
  HeaderWrapper,
  HeaderTitle,
  HeaderSkills,
  AvatarWrapper,
  AvatarBg,
  ThemeImageWrapper,
  ScrollDownWrapper,
  ScrollLink,
  DownArrow,
  AvatarBgWrapper
} from './Home.styles'


const sunMoonAnimation = {
  hidden: {
    x: -250,
    y: 100,
    opacity: 0
  },
  visible: {
    x: [-250, -220, -200, -150, -100, 0],
    y: [100, 80, 50, 20, 0],
    opacity: 1,
    transition: {
      delay: 0.2,
      duaration: 0.5,
      type: "tween",
      ease: "easeInOut"
    }
  },
  exit: {
    x: [50, 100, 150, 200, 250],
    y: [10, 20, 40, 75, 100],
  }

}

const imageAnimation = {
  hidden: {
    x: 250,
    opacity: 0
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.3
    }
  })
}

const imageBgAnimation = {
  ...imageAnimation,
  hover: {
    scale: 1.15,
    transition: {
      duration: 0.5,
      type: "spring"
    }
  }

}

const textAnimation = {
  hidden: {
    x: -250,
    opacity: 0
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.3,
      type: "spring"
    }
  })
}



export const Home = React.forwardRef(({
  scrollToSection
}, ref) => {

  const {theme, changeTheme} = useContext(ThemeContext)

  return (
    <PageWrapper  
      id="s-home"
      ref={ref}
    >

     <Container>
      <Row>
        {/* Title container*/}
        <Col 
          xxl={6} xl={7} lg={8} md={8} sm={10} xs={10}
          offset={{xxl:1, xl:1, lg:1, md:0, sm:1.5, xs:1.5}}
          order={{md: 1, sm: 2, xs: 2}}
        >
          <HeaderWrapper
            as={motion.div}
            initial="hidden"
            whileInView="visible"
          >
            <HeaderTitle>
              <motion.h2
                variants={textAnimation}
                custom={1}
              >
                Hi,
              </motion.h2>
              <motion.h2
                variants={textAnimation}
                custom={2}
              >
                I'm Eugene,
              </motion.h2>
              <motion.h2
                variants={textAnimation}
                custom={3}
              >
                Web developer
              </motion.h2>
            </HeaderTitle>
            <HeaderSkills
              as={motion.p}
              variants={textAnimation}
              custom={4}
            >
              HTML | CSS | JS | REACT
            </HeaderSkills>

            <AccentButton
              onClick={() => scrollToSection("s-contacts")}
              as={motion.button}
              variants={textAnimation}
              custom={5}
            >
              Contact me
            </AccentButton>

            <CVButton
              as={motion.button}
              variants={textAnimation}
              custom={6}
            >
              <CVIcon>
                <DownloadIcon />
              </CVIcon>
              Download CV
            </CVButton>

          </HeaderWrapper>
        </Col>

        <ThemeImageWrapper 
          as={motion.div}
          onClick={()=> {changeTheme(theme === 'dark' ? 'light' : 'dark')}}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          { theme === 'light' &&
            <motion.div
              variants={sunMoonAnimation}
            >
              <motion.img 
                src={sun} 
                alt="sun" 
                animate={{rotate: 360}}
                transition={{
                  repeat: Infinity, 
                  duration: 8,
                  ease: "linear"
                }}
                />
            </motion.div>  
          }
          { theme === 'dark' &&
              <motion.div
                variants={sunMoonAnimation}
              >
                <motion.img 
                  src={moon} 
                  alt="moon" 
                  animate={{rotate: 360}}
                  transition={{
                    repeat: Infinity, 
                    duration: 8,
                    ease: "linear"
                  }}  

                />
              </motion.div>
          }
        </ThemeImageWrapper>
        {/* Image container*/}
        <Col
          xxl={4} xl={3} lg={3} md={3} sm={3} xs={3}
          offset={{xxl:0, xl:0, lg:0, md:1, sm: 6, xs: 6}}
          order={{md: 2, sm: 1, xs: 1}}
        >

            <AvatarWrapper
              as={motion.div}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
            >
              <AvatarBgWrapper>
                <AvatarBg 
                  as={motion.div}
                  variants={imageBgAnimation}
                  custom={3}
                />
              </AvatarBgWrapper>
              <motion.img 
                src={ava} 
                alt='avatar'
                variants={imageAnimation}
                custom={1}
              />
            </AvatarWrapper>

        </Col>
      </Row>
     </Container>

      {/* Next section button */}
      <ScrollDownWrapper>
        <ScrollLink 
          onClick={() => scrollToSection("s-skills")}
        >
          <DownArrow 
            as={motion.div}
            initial={{
              rotate: -45,
              scale: 1
            }}
            animate={{
              rotate: -45,
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 1.5, 
              ease: "linear", 
              repeat: Infinity
            }}
          />
        </ScrollLink>
      </ScrollDownWrapper>

    </PageWrapper>
  )
})

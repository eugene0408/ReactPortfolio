import React, {useContext}from 'react'
import { ThemeContext } from '../../App'
// Grid
import { Container, Row, Col, Hidden } from 'react-grid-system'
// Images
import {ReactComponent as DownloadIcon} from '../../assets/icons/document.svg'
import {ReactComponent as MouseIcon} from '../../assets/icons/mouse.svg'
import {ReactComponent as DownArrowIcon} from '../../assets/icons/down-arrow.svg'
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
  ScrollIconsWrapper,
  ScrollLink
} from './Home.styles'



export const Home = React.forwardRef(({},ref) => {
  const {selectedTheme, changeTheme, finalTheme} = useContext(ThemeContext)

  const scrollNext = ()=> {
    document.getElementById('s-skills').scrollIntoView({behavior: 'smooth'})
  }

  return (
    <PageWrapper  
      id="s-home"
      ref={ref}
    >

     <Container>
      <Row>
        {/* Title container*/}
        <Col 
          xxl={6} xl={7} lg={8} md={8} sm={10} xs={9}
          offset={{xxl:1, xl:1, lg:1, md:0, sm:2, xs:3}}
        >
          <HeaderWrapper>
            <HeaderTitle>
              Hi,<br/>
              I'm Eugene,<br/>
              Web developer
            </HeaderTitle>
            <HeaderSkills>
              HTML | CSS | JS | REACT
            </HeaderSkills>

            <AccentButton>
              Contact me
            </AccentButton>

            <CVButton>
              <CVIcon>
                <DownloadIcon />
              </CVIcon>
              Download CV
            </CVButton>

          </HeaderWrapper>
        </Col>

        <ThemeImageWrapper>
          { finalTheme === 'light' &&
              <img src={sun} alt="sun" onClick={()=> {changeTheme('dark')}}/>
          }
          { finalTheme === 'dark' &&
              <img src={moon} alt="moon" onClick={()=> {changeTheme('light')}}/>
          }
        </ThemeImageWrapper>
        {/* Image container*/}
        <Col
          xxl={4} xl={3} lg={3} md={3} 
          offset={{xxl:0, xl:0, lg:0, md:1}}
        >
          <Hidden sm xs> {/* Hide on small devices */}

            <AvatarWrapper>
              <AvatarBg />
              <img src={ava} alt='avatar-image'/>
            </AvatarWrapper>

          </Hidden>
        </Col>
      </Row>
     </Container>

      {/* Next section button */}
      <ScrollIconsWrapper>
        <ScrollLink theme={finalTheme} onClick={scrollNext}>
          <MouseIcon id="mouse-icon"/>
          <DownArrowIcon id="arrow-icon"/>
        </ScrollLink>
      </ScrollIconsWrapper>

    </PageWrapper>
  )
})

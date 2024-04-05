import React, { useRef, useState, useEffect } from "react";
import useLocalStorage from "react-use-localstorage";
import { setConfiguration } from 'react-grid-system';

import { AnimatePresence } from "framer-motion";

// Components
import { Home, Skills, Portfolio, Contacts } from './sections'
import { SideMenu, Topline } from "./components";
import { SnapScrollContainer } from "./sections/Pages.styles";
import { Loading } from "./components";

// Context
export const ThemeContext = React.createContext();
export const SectionContext = React.createContext();

// Grid congig
setConfiguration({
  containerWidths: 	[
    440, // sm
    640, // md
    860, // lg
    1040, // xl
    1340, // xxl
    1710 //xxxl
  ]
})


function App() {

  // Theme change
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, 
    setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');


  const [currentSection,
    setCurrentSection] = useState('s-home')


  const [portfolioData, setPortfolioData] = useState([])
  const [skillsData, setSkillsData] = useState({})

  const [pageLoaded, setPageLoaded] = useState(false)

  // Portfolio scroll pages
  const [curPortfolioPage,
    setCurPortfolioPage] = useState(1);
  const [portfolioHovered,
    setPortfolioHovered] = useState(false)

  const getData = () => {
    fetch('data/portfolio.json', {headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }}).then((response) => {
      return response.json()
    }).then((portfolioJson) => {
      setPortfolioData(portfolioJson)
      // console.log('portfolio data loaded')
    }) 

    fetch('data/skills.json', {headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }}).then((response) => {
      return response.json()
    }).then((skillsJson) => {
      setSkillsData(skillsJson)
      // console.log('skills data loaded')
    }) 
  }


  useEffect(() => {
    getData();
    setPageLoaded(true)
  }, [])



  const scrollContainerRef = useRef(null)
  const sectionsRefs = useRef([])
  // sectionsRefs.current = []

  const addToRefs = (el) => {
    if(el && !sectionsRefs.current.includes(el)){
      sectionsRefs.current.push(el)
    }
  }

// Active section highlight
  const activeSectionCheck = () => {

      sectionsRefs.current.forEach( section => {
      const sectionTop = section.offsetTop - 50;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      if( scrollContainerRef.current.scrollTop >= sectionTop && scrollContainerRef.current.scrollTop < sectionBottom ) {
        if(currentSection !== section.id){
          setCurrentSection(section.id);
        }} 
      }) 
    
  }


  const scrollToSection = (sectionId) => {
 
      const container = scrollContainerRef.current
      const section = sectionsRefs.current.find((el) =>  el.id === sectionId)

      if(section) {
        const sectionTop = section.offsetTop
        container.scrollTop = sectionTop
      }
  }



    return (
    <div 
      className="App" 
      data-theme={theme}
    >
      { !pageLoaded ? <Loading/> :
        
        <ThemeContext.Provider 
          value={{
            theme: theme,
            changeTheme: setTheme
          }}
        >
          <SectionContext.Provider
            value={{
              active: currentSection,
            }}
          >
            <Topline />
            <SideMenu
              scrollToSection = {scrollToSection}
              portfolioHovered = {portfolioHovered}
              setPortfolioHovered = {setPortfolioHovered}
            />
            <AnimatePresence>
              <SnapScrollContainer 
                ref={scrollContainerRef}
                currentSection={currentSection}
                portfolioHovered = {portfolioHovered}
                onScroll = {() => activeSectionCheck()}
                onTouchEnd = {() => activeSectionCheck()}
              >
                <Home 
                  ref={addToRefs}
                  scrollToSection = {scrollToSection}
                />
                {
                  skillsData &&  Object.keys(skillsData).length > 0 &&
                  <Skills
                    ref={addToRefs}
                    skillsData={skillsData}
                  />             
                }
                {
                  portfolioData && portfolioData.length > 0 &&
                  <Portfolio
                    ref={addToRefs}
                    curScreen={curPortfolioPage}
                    setCurScreen={setCurPortfolioPage}
                    hovered={portfolioHovered}
                    setHovered={setPortfolioHovered}
                    scrollToSection = {scrollToSection}
                    portfolioData = {portfolioData}
                  />
                }
                <Contacts 
                  ref={addToRefs}
                />
              </SnapScrollContainer>
            </AnimatePresence>
          </SectionContext.Provider>
        </ThemeContext.Provider>
      }

    </div>
  );
}

export default App;
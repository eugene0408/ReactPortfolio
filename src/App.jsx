import React, { useEffect, useRef, useState } from "react";
import useLocalStorage from "react-use-localstorage";
import { setConfiguration } from 'react-grid-system';

// Components
import { Home, Skills, Portfolio, Contacts } from './sections'
import { SideMenu, Topline } from "./components";
import { SnapScrollContainer } from "./sections/Pages.styles";

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
  const [selectedTheme, 
    setSelectedTheme] = useLocalStorage('theme', 'auto');

  
  const themeHandler = () => {
    switch(true){
      case selectedTheme ==='auto' && defaultDark:
        return 'dark'
      case selectedTheme ==='auto':
        return 'light'
      default:
        return selectedTheme
    }
  }
  const theme = themeHandler()

  const [currentSection,
    setCurrentSection] = useState('#s-home')
  // Portfolio scroll pages
  const [curPortfolioPage,
    setCurPortfolioPage] = useState(1);
  const [portfolioHovered,
    setPortfolioHovered] = useState(false)


  const sectionsRefs = useRef([])
  sectionsRefs.current = []

  const addToRefs = (el) => {
    if(el && !sectionsRefs.current.includes(el)){
      sectionsRefs.current.push(el)
    }
  }

// Active section highlight
  const activeSection = (e) => {

    sectionsRefs.current.forEach(section => {
      const sectionTop = section.offsetTop - 50;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      if(e.currentTarget.scrollTop >= sectionTop && e.currentTarget.scrollTop < sectionBottom) {
        if(currentSection !== `#${section.id}`){
          setCurrentSection(`#${section.id}`);
        }    
      }
    })
    
  }


  console.log(`portfolio: ${portfolioHovered} active: ${currentSection} `)


  return (
    <div 
      className="App" 
      data-theme={theme}
    >
      <ThemeContext.Provider 
        value={{
          selectedTheme: selectedTheme, 
          changeTheme: setSelectedTheme, 
          finalTheme: theme
        }}
      >
        <SectionContext.Provider
          value={{
            active: currentSection,
          }}
        >
          <Topline />
          <SideMenu/>
          <SnapScrollContainer 
            portfolioHovered = {portfolioHovered}
            onScroll = {(e) => activeSection(e)}
          >
            <Home 
              ref={addToRefs}
            />
            <Skills
              ref={addToRefs}
            />
            <Portfolio
              ref={addToRefs}
              curScreen={curPortfolioPage}
              setCurScreen={setCurPortfolioPage}
              hovered={portfolioHovered}
              setHovered={setPortfolioHovered}
            />
            <Contacts 
              ref={addToRefs}
            />
          </SnapScrollContainer>
        </SectionContext.Provider>
      </ThemeContext.Provider>



    </div>
  );
}

export default App;

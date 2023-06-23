import React, { useRef, useState, useEffect } from "react";
import useLocalStorage from "react-use-localstorage";
import { setConfiguration } from 'react-grid-system';
import { Routes, Route, useLocation, useNavigate, UNSAFE_NavigationContext } from 'react-router-dom'

// Components
import { Layout } from "./layout";
import { Home, Skills, Portfolio, Contacts } from './sections'


// Context
export const ThemeContext = React.createContext();
// export const SectionContext = React.createContext();

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
  // Touch states
  const [touchStart, 
    setTouchStart] = useState(null)
  const [touchEnd, 
    setTouchEnd] = useState(null)


  // Portfolio scroll pages
  const [curPortfolioPage,
    setCurPortfolioPage] = useState(1);
  const [portfolioHovered,
    setPortfolioHovered] = useState(false)

  
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

  const navigate = useNavigate()
  // Current router location
  const currentSection = useLocation().pathname
  
  // Router locations list
  const sections = ['/', '/skills', '/portfolio', '/contacts']
 
  // Return object names of next and previous sections
  const neighborSections = () => {
    const curSectionIndex = sections.findIndex(el => el === currentSection);
    const isLastSection = curSectionIndex === (sections.length - 1);
    const isFirstSection = curSectionIndex === 0;

    const editName = (string) => {
      string = string.substring(1)  // delete / at start
      if(string === '') {
        return 'home'          // replace / to home
      } else {
        return string
      }
    }
    // Next and prev sections names
    let next = !isLastSection ? editName(sections[curSectionIndex + 1]) : null;
    let prev = !isFirstSection ? editName(sections[curSectionIndex - 1]) : null;
    
    return {
      next: next,
      prev: prev
    }
  }

  const prevSection = neighborSections().prev
  const nextSection = neighborSections().next

  const checkPortfolioHover = () => {
    if(currentSection !== '/portfolio') setPortfolioHovered(false)
  }


  const scrolledToBottom = () =>  (window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight ? true : false;
  const scrolledToTop = () => window.scrollY <= 0 ? true : false;

  const wheelHandler = (e) => {
    checkPortfolioHover()
    if(portfolioHovered) return;

    const isScrollingUp = e.deltaY < 0;
    const isScrollingDown = e.deltaY > 0;


    if(scrolledToBottom() && isScrollingDown) navigate(nextSection)
    if(scrolledToTop() && isScrollingUp) navigate(prevSection === 'home' ? '/' : prevSection)
  }

  // Scroll sections on touchscreen

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50 

  const onTouchStartHandler = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientY)
  }

  const onTouchMoveHandler = (e) => setTouchEnd(e.targetTouches[0].clientY)

  const onTouchEndHandler = () => {
    if(!touchStart || !touchEnd || portfolioHovered) return
    const distance = touchStart - touchEnd
    const isUpSwipe = distance > minSwipeDistance
    const isDownSwipe = distance < -minSwipeDistance 

    if(isUpSwipe && scrolledToBottom()) navigate(nextSection);
    if(isDownSwipe && scrolledToTop()) navigate(prevSection === 'home' ? '/' : prevSection);

  }

  return (
    <div 
      className="App" 
      data-theme={theme}
      onWheel={(e) => wheelHandler(e)}
      onTouchStart={(e) => onTouchStartHandler(e)}
      onTouchMove={(e) => onTouchMoveHandler(e)}
      onTouchEnd={(e) => onTouchEndHandler(e)}
    >
      <ThemeContext.Provider 
        value={{
          selectedTheme: selectedTheme, 
          changeTheme: setSelectedTheme, 
          finalTheme: theme
        }}
      >

        <Routes>
          <Route
            path="/"
            element={<Layout 
              prevSection={prevSection}
              nextSection={nextSection}
            />}
          >

            <Route 
              index
              element={<Home />}
            />
            <Route 
              path="skills"
              element={<Skills />}
            />
            <Route 
              path="portfolio"
              element={<Portfolio 
                curScreen={curPortfolioPage}
                setCurScreen={setCurPortfolioPage}
                hovered={portfolioHovered}
                setHovered={setPortfolioHovered}
                touchStart={touchStart}
                setTouchStart={setTouchStart}
                touchEnd={touchEnd}
                setTouchEnd={setTouchEnd}
              />}
            />
            <Route 
              path="contacts"
              element={<Contacts />}
            />

          </Route>
        </Routes>
  
      </ThemeContext.Provider>

    </div>
  );
}

export default App;
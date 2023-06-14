import React, {useState, useEffect, forwardRef} from 'react'
import { Container, Row } from 'react-grid-system'

import portfolioData from '../../data/portfolio.json'

import { 
  PortfolioCategorySelect,
  PortfolioItem,
  PortfolioPagination
} from '../../components'

import { 
  PageWrapper,
  PageHeader
 } from '../Pages.styles'

import { PortfolioWrapper } from './Portfolio.styles'




export const Portfolio = forwardRef((
  { hovered,
    setHovered,
    scrollToSection
  }, ref) => {
// Category filter
  const categoriesList = ['react', 'js']

  const [portfolioCategory, 
    setPortfolioCategory] = useState(categoriesList[0]);
  const [curPortfolioPage,
    setCurPortfolioPage] = useState(1);
  const [categoryScrolledBack,
    setCategoryScrolledBack] = useState(false);
  // Touch states
  const [touchStart, 
    setTouchStart] = useState(null)
  const [touchEnd, 
    setTouchEnd] = useState(null)


  const filterPortfolio = () => (
      portfolioData.filter((item) => (item.category == portfolioCategory))
    );


  /**  Pagination
   ----------------------------------------------*/
  const screenIsSmall = window.matchMedia("(max-width: 1200px)").matches
  const itemsPerScreen = () => screenIsSmall ? 1 : 2;
  const indexOfLastItem = curPortfolioPage * itemsPerScreen();
  const indexOfFirstItem = indexOfLastItem - itemsPerScreen();
  const itemsToDisplay = filterPortfolio().slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = filterPortfolio().length
  // Array of numbers from 1 to screens amount
  const totalScreens = Array.from({length: Math.ceil(totalItems/itemsPerScreen())}, (_, i) => i + 1);

    
  // Reset current page when category changed
  const resetCurScreen = () => { 
    if(categoryScrolledBack){
      // Start from last page if scrolled back
      setCurPortfolioPage(totalScreens.length);
      setCategoryScrolledBack(false)
    }else{
      // Start from first page if scrolled forward
      setCurPortfolioPage(1)
    }
  }

  useEffect(() => {
    filterPortfolio();
    resetCurScreen();
  }, [portfolioCategory]);


  const onHoverHandler = () => {
      setHovered(true)
    }
  const onLeaveHandler = () => {
      setHovered(false)
    }


  // Detect touch device
  const isTouchDevice = () => {
    try {
      document.createEvent("TouchEvent")
      return true
    } catch (error) {
      return false
    }
  }

  //** ------       Portfolio Navigation          ----------------------*/

  const numberOfScreens = totalScreens.length;
  const curCategoryIndex = categoriesList.findIndex((category) => category === portfolioCategory);
  const isLastCategory = portfolioCategory === categoriesList[categoriesList.length - 1];
  const isFirstCategory = portfolioCategory === categoriesList[0]

  // Switch portfolio pages
  const nextPage = () => {
    switch(true) {
      case curPortfolioPage < numberOfScreens:
        setCurPortfolioPage(curPortfolioPage + 1)
        break;
      case curPortfolioPage === numberOfScreens && !isLastCategory:  //switch to next category if scrolled to an end
        setPortfolioCategory(categoriesList[curCategoryIndex + 1])
        setCurPortfolioPage(numberOfScreens)
        break;
      default:
        setHovered(false);
        scrollToSection('s-contacts')   // go to next section if scrolled to last item
    }
  };

  const prevPage = () => {
    switch(true) {
      case curPortfolioPage > 1:
        setCurPortfolioPage(curPortfolioPage - 1);
        break;
      case curPortfolioPage === 1 && !isFirstCategory:   //switch to prewious category if scrolled to an end
        setPortfolioCategory(categoriesList[curCategoryIndex - 1])
        setCategoryScrolledBack(true)
        break;
      default:
        setHovered(false)
        scrollToSection('s-skills')  // go to prew section if scrolled to last item
    }
  };

  // Switch portfolio pages by mouse wheel
  const onWheelHandler = (e) => {

    const isScrollingUp = e.deltaY < 0;
    const isScrollingDown = e.deltaY > 0;

    if(isScrollingDown && !isTouchDevice()) nextPage();  
    if(isScrollingUp && !isTouchDevice()) prevPage();

  }

  // Switch portfolio page on touchscreen

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50 

  const onTouchStartHandler = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientY)
    setHovered(true) //stop page scroll
  }

  const onTouchMoveHandler = (e) => setTouchEnd(e.targetTouches[0].clientY)

  const onTouchEndHandler = () => {
    if(!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isUpSwipe = distance > minSwipeDistance
    const isDownSwipe = distance < -minSwipeDistance 

    if(isUpSwipe) nextPage();
    if(isDownSwipe) prevPage();

  }
  


  return (
    <PageWrapper
      id="s-portfolio"
      ref={ref}
    >
      <PageHeader> My works </PageHeader>

      <Container>
        <Row justify='center' align='center' direction='column'>
          <PortfolioCategorySelect
            curCategory = {portfolioCategory}
            setCategory = {setPortfolioCategory}
            categoriesList = {categoriesList}
          />
          <PortfolioWrapper
            onMouseEnter={() => onHoverHandler()}
            onMouseLeave={() => onLeaveHandler()}
            onWheel={(e) => {onWheelHandler(e)}}
            onTouchStart={(e) => onTouchStartHandler(e)}
            onTouchMove={(e) => onTouchMoveHandler(e)}
            onTouchEnd={(e) => onTouchEndHandler(e)}
          >
            {/* Portfolio items  */}
            {
              itemsToDisplay.map((item) => (
                <PortfolioItem 
                  key={item.title}
                  title={item.title}
                  desktop={item.desktop}
                  mobile={item.mobile}
                  descr={item.descr}
                  tags={item.tags}
                  website={item.website}
                  repo={item.repo}
                />
              ))
            }
            
            {/* Pagination */}
            <PortfolioPagination 
              curScreen={curPortfolioPage}
              setCurScreen={setCurPortfolioPage}
              totalScreens={totalScreens}
            />

          </PortfolioWrapper>
        
        </Row>
      </Container>

    </PageWrapper>
  )
})

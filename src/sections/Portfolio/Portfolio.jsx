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
  {hovered,
  setHovered}, 
  ref) => {
// Category filter
  const [portfolioCategory, 
    setPortfolioCategory] = useState('react');
  const [curPortfolioPage,
    setCurPortfolioPage] = useState(1);


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

  const resetCurScreen = () => setCurPortfolioPage(1)

  useEffect(() => {
    filterPortfolio();
    resetCurScreen();
  }, [portfolioCategory])

const onHoverHandler = () => {
  setHovered(true)
}
const onLeaveHandler = () => {
  setHovered(false)
}

// Switch portfolio pages by mouse wheel
const wheelHandler = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const numberOfScreens = totalScreens.length

  const nextPage = () => {
    curPortfolioPage < numberOfScreens ?  setCurPortfolioPage(curPortfolioPage + 1) : setHovered(false)
  };
  const prevPage = () => {
    curPortfolioPage > 1 ? setCurPortfolioPage(curPortfolioPage - 1) : setHovered(false)
  };

  if(e.deltaY > 0){
    nextPage()
  }
  if(e.deltaY < 0){
    prevPage()
  }
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
          />
          <PortfolioWrapper
            onMouseEnter={() => onHoverHandler()}
            onMouseLeave={() => onLeaveHandler()}
            onWheel={(e) => {wheelHandler(e)}}
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

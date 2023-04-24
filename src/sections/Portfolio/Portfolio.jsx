import React, {useState, useEffect, forwardRef} from 'react'
import { Container } from 'react-grid-system'

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
  const itemsPerScreen = 2;
  const indexOfLastItem = curPortfolioPage * itemsPerScreen;
  const indexOfFirstItem = indexOfLastItem - itemsPerScreen;
  const itemsToDisplay = filterPortfolio().slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = filterPortfolio().length
  // Array of numbers from 1 to screens amount
  const totalScreens = Array.from({length: Math.ceil(totalItems/itemsPerScreen)}, (_, i) => i + 1);

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
  const switchDelay = 200

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

      <PortfolioCategorySelect
        curCategory = {portfolioCategory}
        setCategory = {setPortfolioCategory}
        />

      <Container 
        style={{height: "80vh"}}
        onMouseEnter={() => onHoverHandler()}
        onMouseLeave={() => onLeaveHandler()}
        onWheel={(e) => {wheelHandler(e)}}
      >
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
        <PortfolioPagination 
          curScreen={curPortfolioPage}
          setCurScreen={setCurPortfolioPage}
          totalScreens={totalScreens}
        />
      </Container>

    </PageWrapper>
  )
})

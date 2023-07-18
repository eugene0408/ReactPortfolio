import styled from 'styled-components'

export const PageWrapper = styled.section`
    position: relative;
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    display: inline-block;
    z-index: 2;
    scroll-snap-align: start;
`
export const PageHeader = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin-top: 4rem;
  color: var(--text-col);
  width: 100%;
  text-align: center;
  opacity: .3;
  @media (max-width: 1600px) {
    margin-top: 2rem;
  }
  @media (max-width: 992px) {
    margin-top: 3rem;
  }
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`

export const SnapScrollContainer = styled.div`
  scroll-snap-type: y mandatory;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: ${props => props.portfolioHovered && props.currentSection === 's-portfolio' ? 'hidden' : 'scroll'};
  scrollbar-width: none;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`
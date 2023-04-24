import React from 'react'
import styled from 'styled-components'

export const PageWrapper = styled.div`
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
  font-weight: 500;
  margin-top: 5rem;
  color: var(--text-col);
  width: 100%;
  text-align: center;
`

export const SnapScrollContainer = styled.div`
  scroll-snap-type: y mandatory;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: ${props => props.portfolioHovered ? 'hidden' : 'scroll'};
  scrollbar-width: none;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
`
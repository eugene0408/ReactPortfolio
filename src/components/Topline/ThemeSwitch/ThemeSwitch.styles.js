import styled from "styled-components";


const wrapperHeight = 36,  //px
      wrapperWidth = 64,
      indicatorSize = 34,
      iconSize = 25



export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: ${wrapperHeight}px;
    height: ${wrapperHeight}px;
    width: ${wrapperWidth}px;
    background: var(--glassBg);
    border: 1px solid var(--glassBorder);
    backdrop-filter: blur(4px);
    cursor: pointer;
    z-index: 99;
`

export const ThemeIndicator = styled.div`
    position: absolute;
    height: ${indicatorSize}px;
    width: ${indicatorSize}px;
    border-radius: 50%;
    background: ${props => props.theme === "light" ? "rgba(0,0,0, 0.4)" : "rgba(255,255,255, 0.3)"};
    backdrop-filter: blur(4px);
    transition: .3s ease-in-out;
    z-index: 10;
`

export const Item = styled.div`
    position: relative;
    background: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    height: ${iconSize}px;
    width: ${iconSize}px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    padding: 0;
    & svg {              
        height: 100%;  
        z-index: 15;
    }
    & svg path, ellipse {
        fill: ${props => props.theme === props.value ? 'var(--accent)' : 'var(--text-col)'};
    }

`
import styled from "styled-components";

const wrapperHeight = 36,  //px
      wrapperWidth = 100,
      sidePadding = 4,
      indicatorSize = 30,
      iconSize = 25,
      sunScale = 85,
      moonScale = 95,
      indicatorPadding = (indicatorSize - iconSize) / 2

const darkGlass = 'rgba( 0,0,0, 0.07)',
      darkBorder = 'rgba( 0,0,0, 0.02)',
      lightGlass = 'rgba( 255,255,255, 0.07)',
      lightBorder = 'rgba( 255,255,255, 0.02)';


const switchIndicator = (selectedTheme) => {
    switch(selectedTheme){
        case 'dark':
            return `left: ${sidePadding - indicatorPadding}px`
        case 'light':
            return `left: ${wrapperWidth - sidePadding - iconSize * (sunScale/100) + indicatorPadding}px`
        default:
            return 'left: 50% ; transform: translateX(-50%)'
    }
}

const switchTextColor = (selectedTheme, theme) => {
    switch(true){
        case selectedTheme === 'auto' && theme === 'light':
            return '#ffffff'
        case selectedTheme === 'auto' && theme === 'dark':
            return '#000000'
        default: 
            return 'var(--text-col)'
    }
}

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 36px;
    height: ${wrapperHeight}px;
    width: ${wrapperWidth}px;
    padding: 0 ${sidePadding}px;
    background: ${props => props.theme === "light" ? darkGlass : lightGlass};
    border: 1px solid ${props => props.theme === "light" ? darkBorder : lightBorder };
    backdrop-filter: blur(4px);
    z-index: 99;
`

export const ThemeIndicator = styled.div`
    position: absolute;
    top: ${(wrapperHeight - indicatorSize)/2};
    ${props => switchIndicator(props.selectedTheme)};
    height: ${indicatorSize}px;
    width: ${indicatorSize}px;
    border-radius: 50%;
    background: ${props => props.theme === "light" ? "rgba(0,0,0, 0.4)" : "rgba(255,255,255, 0.3)"};
    backdrop-filter: blur(4px);
    transition: .3s ease-in-out;
    z-index: 100;
`

export const Item = styled.button`
    background: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    height: ${iconSize}px;
    width: ${iconSize}px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 101;
    padding: 0;
    & span {
        font-weight: 600;
        color: ${props => switchTextColor(props.selectedTheme, props.theme)};
        transition: .2s ease;
    }
    & svg {              
        height: ${moonScale}%;  
    }
    & svg path {
        fill: ${props => props.selectedTheme === props.value ? 'var(--accent)' : 'var(--text-col)'};
    }
    &:nth-of-type(3) svg {
        height: ${sunScale}%;
    }
`
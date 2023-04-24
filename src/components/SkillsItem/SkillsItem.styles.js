import styled, {keyframes} from "styled-components";

const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`
const iconSize = 45;

const darkGlass = 'rgba( 0,0,0, 0.07)',
      darkBorder = 'rgba( 0,0,0, 0.02)',
      lightGlass = 'rgba( 255,255,255, 0.07)',
      lightBorder = 'rgba( 255,255,255, 0.02)';


const levelColor = (level) => {
  switch(true){
    case level >= 70:
        return 'var(--green)';
    case level >= 50:
        return 'var(--greensea)';
    case level >= 30:
        return 'var(--orange)';
  }
}

const levelAnimate = (val) => keyframes`
    0% {
        width: 0;
    }
    100%{
        width: ${val};
    }
`

export const Wrapper = styled.div`
    ${flexCenter}
    flex-direction: column;
    margin-top: 2.5rem;
    position: relative;
    cursor: pointer;
    &::before {
        content: '';
        position: absolute;
        top: -10%;
        left: 5%;
        height: 120%;
        width: 90%;
        border-radius: 10px;
        background: ${props => props.theme === 'dark' ? lightGlass : darkGlass};
        border: 1px solid ${props => props.theme === 'dark' ? lightBorder : darkBorder};
        backdrop-filter: blur(4px);
        z-index: 1;
    }

`
export const IconWrapper = styled.div`
    ${flexCenter}
    width: 100%;
    z-index: 2;
    & svg {
        height: ${iconSize}px;
        transition: all .3s ease;
        & path {
            fill: var(--text-col)
        }
    }
    @media (hover: hover) {
        ${Wrapper}:hover & svg{
            transform: scale(1.2);
            & path {
                fill: var(--accent)
            }
        }
    }
`
export const Title = styled.h3`
    text-transform: uppercase;
    color: var(--text-col);
    font-size: 18px;
    font-weight: 500;
    z-index: 2;
`

export const Line = styled.div`
    position: relative;
    height: 7px;
    width: 50%;
    background: var(--menu-bg);
    border-radius: 10px;
    z-index: 2;
    overflow: hidden;
    transition: all .3s ease;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: ${props => levelColor(props.level)};
        height: 100%;
        width: ${props => props.level}%;
    }
    @media (hover: hover) {
        ${Wrapper}:hover &::before{
            animation: ${props => levelAnimate(props.level)} ${props => props.level / 150}s linear;
        }
    }
`
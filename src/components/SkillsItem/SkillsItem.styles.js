import styled from "styled-components";


const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`

const levelColor = (level) => {
  switch(true){
    case level >= 70:
        return 'var(--green)';
    case level >= 50:
        return 'var(--greensea)';
    default:
        return 'var(--orange)';
  }
}


export const Wrapper = styled.div`
    ${flexCenter}
    flex-direction: column;
    margin-top: 3.5rem;
    position: relative;
    cursor: pointer;
    &::before {
        content: '';
        position: absolute;
        top: -15%;
        left: 0;
        height: 130%;
        width: 100%;
        border-radius: 10px;
        background-color: var(--glassBg);
        border: 1px solid var(--glassBorder);
        backdrop-filter: blur(4px);
        z-index: 1;
    }
`


export const IconWrapper = styled.div`
    ${flexCenter}
    --icon-size: 40px;
    width: 100%;
    z-index: 2;
    & svg {
        height: var(--icon-size);
        & path {
            fill: var(--text-col)
        }
    }
    @media (max-width: 576px) {
        --icon-size: 25px;
        margin-top: .5em;
    }
    @media (hover: hover) {
        ${Wrapper}:hover & svg path {
            fill: var(--theme-accent);
            transition: all .3s ease-in-out;
        }      
    }
`
export const Title = styled.h3`
    text-transform: uppercase;
    color: var(--text-col);
    font-size: 16px;
    font-weight: 500;
    z-index: 2;
    @media (max-width: 576px) {
        font-size: 14px;
        margin: .7em 0
    }
`

export const LineWrapper = styled.div`
    position: relative;
    height: 7px;
    width: 50%;
    background-color: var(--menu-bg);
    border-radius: 10px;
    z-index: 2;
    overflow: hidden;
`

export const Line = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: ${props => levelColor(props.level)};
    height: 100%;
`
export const HoverLine = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => levelColor(props.level)};
    height: 100%;
`
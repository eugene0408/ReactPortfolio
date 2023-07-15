import styled from 'styled-components'


export const MenuWrapper = styled.div`
    position: fixed;
    left: 15px;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 99;
    @media (max-width: 1200px) {
        left: 10px;
    }
    @media (max-width: 576px) {
        left: 0;
    }
`

export const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--glassBg);
    border: 1px solid var(--glassBorder);
    backdrop-filter: blur(4px);
    border-radius: 10px;
    padding: 1em;
    @media (max-width: 576px) {
        border-radius: 0 10px 10px 0;
        padding: 1.5em .6em;
    }
`
export const MenuLink = styled.button`
    border: none;
    background: transparent;
    height: 28px;
    cursor: pointer;
    margin-top: .5em;
    margin-bottom: .5em;
    transition: all .2s ease-out;
    & svg {
        width: 28px;
        transform: scale(${props => props.to === props.active ? '1.2' : '1'})
    }
    & svg path{
        fill: ${props => props.to === props.active ? 'var(--theme-accent)' : 'var(--text-col)'}
    }

    @media (hover: hover){
        &:hover {
            transform: scale(${props => props.to === props.active ? '1' : '1.2'});
            & svg path {
                fill: var(--theme-accent);
            }
        }
    } 
    @media (max-width: 1200px) {
        height: 24px;
        & svg {
            height: 24px;
            width: 24px;
        }
    }
    @media (max-width: 576px) {
        margin-top: .5em;
        margin-bottom: .5em;
        height: 20px;
        & svg {
            height: 20px;
            width: 20px;
        }
    }
`



const arrowLinkStyles = `
    position: absolute;
    justify-content: center;
    align-items: center;
    color: var(--text-col);
    text-transform: uppercase;
    cursor: pointer;
    opacity: .6;
    transition: .3s ease;
    --svg-offset: .1em;
    --wrapper-offset: 7em;
    & svg path {
        fill: var(--text-col);
    }
`

export const ArrowLinkPrev = styled.div`
    display: ${props => props.prevSection ? 'flex' : 'none' };
    ${arrowLinkStyles}
    top: 0;
    writing-mode: vertical-lr;
    margin-top: var(--wrapper-offset);
    & svg {
        width: 1em;
        margin-bottom: var(--svg-offset);
    }
`

export const ArrowLinkNext = styled.div`
    display: ${props => props.nextSection ? 'flex' : 'none' };
    ${arrowLinkStyles}
    bottom: 0;
    writing-mode: vertical-lr;
    margin-bottom: var(--wrapper-offset);
    & svg {
        width: 1em;
        margin-top: var(--svg-offset);
    }
`

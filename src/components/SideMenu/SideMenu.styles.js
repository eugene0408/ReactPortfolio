import styled from 'styled-components'

const setLinkColor = (to, active, theme) => {
  switch(true){
    case to === active && theme === 'dark':
        return 'var(--accent);'

    case to === active && theme === 'light':
        return 'var(--light-red); '

    default: return 'var(--text-col)'
  }
}

export const MenuWrapper = styled.div`
    position: fixed;
    left: 25px;
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
`

export const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--menu-bg);
    border-radius: 10px;
    padding: 1em;
`
export const MenuLink = styled.button`
    border: none;
    background: transparent;
    height: 28px;
    cursor: pointer;
    margin-top: 1em;
    transition: all .2s ease-out;
    & svg {
        width: 28px;
        transform: scale(${props => props.to === props.active ? '1.2' : '1'})
    }
    & svg path{
        fill: ${props => setLinkColor(props.to, props.active, props.theme)}
    }

    /* &.active {
        transform: scale(1.25);
        svg path{
            fill: ${props => props.theme === 'dark' ? 'var(--accent)' : 'var(--light-red)'};
            }
    } */
    @media (hover: hover){
        &:hover {
            transform: scale(${props => props.to === props.active ? '1' : '1.2'});
            & svg path {
                fill: ${props => props.theme === 'dark' ? 'var(--accent)' : 'var(--light-red)'};
            }
        }
    } 
    @media (max-width: 1200px) {
        height: 24px;
        & svg {
            width: 24px;
        }
    }
`
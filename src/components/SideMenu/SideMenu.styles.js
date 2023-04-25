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
    background: var(--menu-bg);
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
        fill: ${props => setLinkColor(props.to, props.active, props.theme)}
    }

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
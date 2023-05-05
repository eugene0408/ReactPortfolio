import styled, {keyframes} from "styled-components";


export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
`

export const HeaderTitle = styled.h1`
    font-family: var(--main-font);
    font-weight: 700;
    font-size: 64px;
    color: var(--text-col); 
    line-height: 1.3;
    margin-bottom: .5rem;
    @media (max-width: 1200px) {
        font-size: 48px;
    }
    @media (max-width: 768px) {
        font-size: 36px;
    }
`

export const HeaderSkills = styled.p`
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--text-col);
    @media (max-width: 1200px) {
        font-size: 14px;
    }
`

export const AvatarWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    & img {
        height: 500px;
        z-index: 2;
    }
    @media (max-width: 1200px) {
        & img {
            height: 340px;
        }      
    }
`
export const AvatarBgWrapper = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AvatarBg = styled.div`
    --size: 320px;
    border-radius: 50%;
    height: var(--size);
    width: var(--size);
    background: #D9D9D9;
    margin-top: 3em;
    z-index: 1;
    transition: .3s ease;
    ${AvatarWrapper}:hover & {
        --hov-size: 375px;
        height: var(--hov-size);
        width: var(--hov-size);
    }
    @media (max-width: 1200px) {
        --size: 220px;
        ${AvatarWrapper}:hover & {
            --hov-size: 250px;
        }
    }
`
const spinAnimation = keyframes`
    100% {transform: rotateZ(360deg)};
`

export const ThemeImageWrapper = styled.div`
    --size: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--size);
    width: var(--size);
    position: absolute;
    top: 15%;
    left: 45%;
    z-index: 2;
    animation: ${spinAnimation} 7s infinite linear;
    cursor: pointer;
    & img {
        height: 100%;
        width: 100%;
    }
    @media (max-width: 1200px) {
        --size: 120px;
    }
`
const scrollAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-150%);
    }
    50% {
        opacity: 1;
        transform: translateY(-75%);
    }
    100% {
        opacity: 0;
        transform: translateY(0);
    }
`

export const ScrollIconsWrapper = styled.div`
    position: absolute;
    width: 100%;
    bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        bottom: 2rem;
    }
`

export const ScrollLink = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;    
    & svg path {
        fill: var(--text-col);
        transition: .3s ease;
    }
    &:hover {
        svg path {
            fill: ${props => props.theme === "dark" ? 'var(--accent)' : 'var(--light-red)'};
        }
    }
    & #mouse-icon {
        height: 42px;
        padding-bottom: 1.5rem;
    }
    & #arrow-icon {
        height: 10px;
        animation: ${scrollAnimation} 1.2s linear infinite;
    }
    @media (max-width: 1200px) {
        & #mouse-icon {
            height: 36px;
        }
        & #arrow-icon {
            height: 7px;
        }
    }
    @media (max-width: 768px) {
        & #mouse-icon {
            display: none;
        }
        & #arrow-icon {
            height: 15px;
            animation: ${scrollAnimation} 1.5s linear infinite;
        }
    }
`   
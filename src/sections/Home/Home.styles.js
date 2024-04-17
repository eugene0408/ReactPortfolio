import styled from "styled-components";


export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
`

export const HeaderTitle = styled.div`
    & h2 {
        position: relative;
        width: fit-content;
        font-family: var(--main-font);
        /* background: var(--glassBg); */
        font-weight: 700;
        font-size: 64px;
        color: var(--text-col); 
        line-height: 1.3;
        margin-top: 0;
        margin-bottom: 0;
        z-index: 15;
    }

    @media (max-width: 1200px) {
        & h2 {
            font-size: 48px;
        }
    }
    @media (max-width: 768px)  {
        & h2 {
            font-size: 36px;
        }
    }
    @media (max-width: 768px)  {
        & h2 {
            font-size: 28px;
        }
    }
    @media (max-width: 768px)  {
        margin-top: 15rem;
        & h2::before {
            content: '';
            position: absolute;
            display: inline-block;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: var(--glassBg);
            border: 1px solid var(--glassBorder);
            border-bottom: none;
            border-top: none;
            backdrop-filter: blur(4px);
            border-radius: 5px;
            padding: 0 5px 0 0;
            z-index: -1;
        }
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
    @media (max-width: 768px) {
        font-size: 12px;
        margin: .6em 0
    }
`

export const AvatarWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    & img {
        height: 450px;
        z-index: 2;
    }
    @media (max-width: 1200px) {
        & img {
            height: 340px;
        }      
    }
    @media (max-width: 768px) {
        position: absolute;
        top: 0;
        height: 92vh;
        & img {
            height: 250px;
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
    & svg {
        height: 420px;
    }
    & svg path {
        fill: var(--ava-bg);
    }
    @media (max-width: 1200px) {
        & svg {
            height: 320px;
        }
    }
    @media (max-width: 768px) {
        & svg {
            height: 235px;
        }
    }

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
    cursor: pointer;
    & img {
        height: 100%;
        width: 100%;
    }
    @media (max-width: 1200px) {
        --size: 120px;
    }
    @media (max-width: 768px) {
        --size: 70px;
        left: 30%;
    }
`


export const ScrollDownWrapper = styled.div`
    position: absolute;
    width: 100%;
    bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        bottom: 2rem;
    }
`

export const ScrollLink = styled.a`
    --size: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;    
    height: var(--size);
    width: var(--size);
    &:hover {
        & div {
            border-left: 2px solid var(--theme-accent);
            border-bottom: 2px solid var(--theme-accent);
        }
    }
`   

export const DownArrow = styled.div`
    height: 100%;
    width: 100%;
    border-left: 1px solid var(--text-col);
    border-bottom: 1px solid var(--text-col);
`
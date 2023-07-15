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
        font-family: var(--main-font);
        /* background: var(--main-bg); */
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
        margin-top: 12rem;
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
        height: 80vh;
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
`

export const AvatarBg = styled.div`
    --size: 300px;
    border-radius: 50%;
    height: var(--size);
    width: var(--size);
    background: #D9D9D9;
    margin-top: 3em;
    z-index: 1;
    @media (max-width: 1200px) {
        --size: 220px;
    }
    @media (max-width: 768px) {
        --size: 150px;
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
        --size: 80px;
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
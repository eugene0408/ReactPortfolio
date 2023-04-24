import styled from "styled-components";

const flexCenter = `
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    ${flexCenter}
    flex-direction: row;
    position: relative;
    margin-top: 1rem;
    height: 320px;
    width: 100%;
    color: var(--text-col);
    &:nth-of-type(2n + 2) {
        flex-direction: row-reverse;
    }
    &:nth-of-type(2n + 2) > div:nth-child(1){
        justify-content: flex-end;
    }
`

export const ScreensWrapper = styled.div`
    ${flexCenter}
    position: relative;
    width: 50%;
    height: 100%;
`


export const DesctopScreen = styled.div`
    --size: 70%;
    height: var(--size);
    width: var(--size);
    border-radius: 10px;
    box-shadow: var(--portfolio-shadow);
    transform-style: preserve-3d;
    transition: .3s ease;
    & img {
        height: 100%;
        width: 100%;
        border-radius: 10px;
    }
    &:hover {
        transform: perspective(1000px) rotateY(10deg) translateZ(10px);
    }
`
export const Tags = styled.div`
    position: absolute;
    bottom: -12%;
    left: 0;
    padding-left: .5em;
    & span {
        margin-right: 1em;
        cursor: pointer;
        opacity: 0.8;
        &:hover {
            color: var(--light-red);
            opacity: 1;
        }
    }
`

export const MobileScreen = styled.div`
    height: 95%;
    width: 26%;
    position: absolute;
    right: -10%;
    bottom: -10%;
    border-radius: 10px;
    box-shadow:  var(--portfolio-shadow);
    transform: translateZ(20px);
    transition: .3s ease;
    & img {
        height: 100%;
        width: 100%;
        border-radius: 10px;
    }
    ${DesctopScreen}:hover & {
        transform: translateZ(40px);
    }
`

export const DescrWrapper = styled.div`
    ${flexCenter}
    flex-direction: column;
    width: 40%;
    color: var(--text-col)
`

export const Title = styled.h3`
    font-size: 24px;
    font-weight: 500;
`
export const Description = styled.p`
    width: 75%;
`

export const LinksWrapper = styled.div`
    ${flexCenter}
    flex-direction: row;
    margin-top: 1rem;
    & span {
        margin: 0 .5em;
        font-size: 20px;
        color: var(--light-red);
    }
`

export const LinkItem = styled.a.attrs({
    'target': '_blank'
})`
    ${flexCenter}
    color: var(--text-col);
    font-weight: 500;
    & svg {
        --size: 20px;
        height: var(--size);
        width: var(--size);
        margin: 0 .5em;
        & path {
            fill: var(--text-col);
            transition: .3s ease;
        }
    }
    &:hover svg path {
        fill: var(--accent)
    }

`
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
    height: 320px;
    width: 100%;
    color: var(--text-col);
    &:nth-of-type(2n + 2) {
        flex-direction: row-reverse;
    }
    &:nth-of-type(2n + 1) > div:nth-child(1){
        justify-content: flex-start;
    }
    &:nth-of-type(2n + 1) h3, &:nth-of-type(2n + 1) p {
        text-align: right;
    }
    &:nth-of-type(2n + 2) > div:nth-child(1){
        justify-content: flex-end;
    }
    &:nth-of-type(2n + 2) h3, &:nth-of-type(2n + 2) p {
        text-align: left;
    }
    @media (max-width: 1600px) {
        height: 280px;
    }
    @media (max-width: 1200px) {
        height: 100%;
        min-height: 540px;
    }
    @media (max-width: 992px) {
        flex-direction: column;
        min-height: 480px;
        &:nth-of-type(2n + 1) h3, &:nth-of-type(2n + 1) p {
            text-align: center;
        }
        &:nth-of-type(2n + 1) > div:nth-child(1), &:nth-of-type(2n + 2) > div:nth-child(1){
            justify-content: center;
        }
    }
    @media (max-width: 576px) {
        min-height: 240px;
    }
`

export const ScreensWrapper = styled.div`
    ${flexCenter}
    position: relative;
    width: 50%;
    height: 100%;
    @media (max-width: 992px) {
        width: 100%;
        height: 30%;
    }
    @media (max-width: 768px) {
        height: 30%;
    }
    @media (max-width: 576px) {
        height: 50%;
    }
`


export const DesctopScreen = styled.div`
    height: 70%;
    width: 80%;
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
    @media (max-width: 1600px) {
        width: 75%;
    }
    @media (max-width: 1200px) {
        width: 85%;
        height: 35%;
    }
    @media (max-width: 992px) {
        width: 80%;
        height: 90%;
    }
    @media (max-width: 768px) {
        width: 90%;
        height: 100%;
    }
    @media (max-width: 576px) {
        width: 90%;
        height: 60%;
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
    @media (max-width: 576px) {
        display: none;
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
    color: var(--text-col);
    @media (max-width: 992px) {
        width: 100%;
        height: 40%;
    }
`

export const Title = styled.h3`
    font-size: 24px;
    font-weight: 400;
    margin: .5em 0 .5em 0;
    width: 100%;
    @media (max-width: 1600px){
        margin: .1em 0 .1em 0%;
    }

`
export const Description = styled.p`
    width: 100%;
    font-size: 16px;
    font-weight: 300;
    /* text-align: left; */
    @media (max-width: 1600px) {
        margin: .3em 0 .8em 0;
    }

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
    @media (max-width: 1600px) {
        margin-top: .3em;
    }
`

export const LinkItem = styled.a.attrs({
    'target': '_blank'
})`
    ${flexCenter}
    color: var(--text-col);
    font-weight: 400;
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
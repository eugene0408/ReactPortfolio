import styled from "styled-components";
import { AccentButton } from "../../components";


export const ContactContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 992px){
        margin-bottom: 5rem;
        margin-top: 5rem;
    }
`

export const ContactItem = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1em 5em 1em 0;
    font-size: 18px;
    margin: .5em 0;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: var(--glassBg);
        border: 1px solid var(--glassBorder);
        backdrop-filter: blur(4px);
        z-index: 1;
    }
    & * {
        z-index: 2;
    }
    & span {
        color: var(--text-col);
    } 
    @media (max-width: 768px) {
        font-size: 16px;
    }
    @media (max-width: 576px) {
        font-size: 14px;
    }
`
export const ContactText = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`

export const IconWrapper = styled.div`
    --size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--size);
    width: var(--size);
    border-radius: 50%;
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
    margin-left: 1em;
    margin-right: .8em;
    background-color: #fff;
    transition: all .3s ease;
    & svg {
        height: 60%;
        fill: #000;
    }
    ${ContactItem}:hover & {
        background-color: var(--accent);
    }
    @media (max-width: 768px) {
        --size: 28px;
    }
`

export const ContactHeader = styled.h3`
    color: var(--text-col);
    font-size: 38px;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 32px;
    }
    @media (max-width: 576px) {
        font-size: 28px;
    }
`
 
export const ContactButton = styled.a`
    position: absolute;
    right: 0;
    background: var(--accent);
    height: 100%;
    width: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--accent);
    border-radius: 0 10px 10px 0;
    cursor: pointer;
    & svg {
        --size: 20px;
        width: var(--size);
        height: var(--size);
    }
    & svg path {
        fill: #000;
    }
    &:hover svg {
        transform: scale(1.2);
        transition: all .3s ease;
    }
    @media (max-width: 576px) {
        width: 4em;
        & svg {
            --size: 14px;
        }
    }
`


export const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
    @media (max-width: 992px) {
        justify-content: center;
    }
`

export const SocialItem = styled.a.attrs({
    'target': '_blank'
})`
    --size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: var(--size);
    width: var(--size);
    background-color: white;
    margin: 0 .5em;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
    transition: all .3s ease;
    &:hover {
        background-color: var(--accent);
    }
    &:hover svg {
        transform: scale(1.1);
        transition: .2s ease-in-out;
    }
    & svg {
        height: calc(var(--size) / 1.8);
        width: calc(var(--size) / 1.8);
    }
    & svg path {
        fill: #000;
    }
    @media (max-width: 768px) {
        --size: 36px;
    }
`
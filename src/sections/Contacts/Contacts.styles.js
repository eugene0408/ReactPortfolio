import styled from "styled-components";
import { AccentButton } from "../../components";

const darkGlass = 'rgba( 0,0,0, 0.07)',
      darkBorder = 'rgba( 0,0,0, 0.02)',
      lightGlass = 'rgba( 255,255,255, 0.07)',
      lightBorder = 'rgba( 255,255,255, 0.02)';



export const ContactContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 992px){
        align-items: center;
        margin-bottom: 5rem;
        margin-top: 5rem;
    }
`

export const ContactItem = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 1.2em;
    font-size: 18px;
    width: fit-content;
    margin: .5em 0;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: ${props => props.theme === 'dark' ? lightGlass : darkGlass};
        border: 1px solid ${props => props.theme === 'dark' ? lightBorder : darkBorder};
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
        padding: 1em;
    }
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
 
export const SocialContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
    @media (max-width: 992px) {
        justify-content: center;
    }
`
export const ColDot = styled.span`
    &::before{
        content: '•';
        color: var(--light-red);
        font-size: 1em;
    }
`

export const SocialItem = styled.div`
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
        background-color: var(--accent)
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
export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 992px) {
        justify-content: center;
        margin-top: 4rem;
    }
`
export const Form = styled.form `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3em 0;
    width: 65%;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: ${props => props.theme === 'dark' ? lightGlass : darkGlass};
        border: 1px solid ${props => props.theme === 'dark' ? lightBorder : darkBorder};
        backdrop-filter: blur(4px);
        z-index: 1;
    }
    & * {
        z-index: 2;
    }
    @media (max-width: 1200px) {
        width: 80%;
    }
    @media (max-width: 992px) {
        width: 60%;
    }
    @media (max-width: 768px) {
        width: 80%;
    }

`

export const Label = styled.label`
    font-size: 16px;
    text-align: left;
    width: 90%;
    color: var(--text-col);
`

export const InputWrapper = styled.div`
   width: 90%;
   position: relative;
   margin-top: .3em;
   margin-bottom: .8em;
   & svg {
        --size: 22px;
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        height: var(--size);
        width: var(--size);
        opacity: .4;
    }
    @media (max-width: 576px) {
        & svg {
            --size: 18px;
            left: 8px;
        }
    }
`

const inputStyles = `
    width: 100%;
    background: #fff;
    border: none;
    font-size: 18px;
    padding: .7em 1em .7em 2.5em;
    box-sizing: border-box;
    border-radius: 10px;
`

export const Input = styled.input` 
    ${inputStyles}
    @media (max-width: 576px) {
        padding: .5em .8em .5em 2.2em;
    }
`

export const TextWrapper = styled.div`
    width: 90%;
    position: relative;
    margin-top: .3em;
    & svg {
        --size: 22px;
        height: var(--size);
        width: var(--size);
        position: absolute;
        left: 10px;
        top: .7em;
        opacity: .4;
    }
    @media (max-width: 576px) {
        & svg {
            --size: 18px;
            left: 8px;
        }
    }
`

export const TextArea = styled.textarea`
    ${inputStyles}
    resize: none;
`
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 90%;
    margin-top: 1em;
`
export const SubmitButton = styled(AccentButton)`
    height: 40px;
    width: 200px;
    border-radius: 10px;
    font-weight: 600;
`
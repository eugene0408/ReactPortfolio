import styled from "styled-components";
import { AccentButton } from "../../components";

const darkGlass = 'rgba( 0,0,0, 0.07)',
      darkBorder = 'rgba( 0,0,0, 0.02)',
      lightGlass = 'rgba( 255,255,255, 0.07)',
      lightBorder = 'rgba( 255,255,255, 0.02)';


export const ContactContainer = styled.div`
    height: 100%;
    width: 60%;
`

export const ContactItem = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em .5em;
    font-size: 18px;
    width: 100%;
    margin: 1.4em 0;
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
    & svg {
        height: 1.8em;
        width: 1.8em;
        position: absolute;
        left: 1em;
    }
    &:nth-of-type(1) svg path {
        fill: var(--light-red)
    }
    &:nth-of-type(2) svg path {
        fill: var(--green);
    }
    &:nth-of-type(3) svg path {
        fill: var(--accent);
    }
    & span {
        color: var(--text-col);
    }
     
`

export const ContactHeader = styled.h3`
    color: var(--text-col);
    font-size: 38px;
    font-weight: 700;
`

export const ColDash = styled.span`
    &::before{
        content: '-';
        font-size: 1em;
        font-weight: 500;
        color: var(--accent);
    }
`

export const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 4rem;
`

export const SocialItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background-color: white;
    margin: 0 .5em;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
    transition: all .3s ease;
    &:hover {
        background-color: var(--accent)
    }
    & svg {
        height: 24px;
        width: 24px;
    }
    & svg path {
        fill: #000;
    }
`
export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
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
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        height: 22px;
        width: 22px;
        opacity: .4;
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
`

export const TextWrapper = styled.div`
    width: 90%;
    position: relative;
    margin-top: .3em;
    & svg {
        height: 22px;
        width: 22px;
        position: absolute;
        left: 10px;
        top: .7em;
        opacity: .4;
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
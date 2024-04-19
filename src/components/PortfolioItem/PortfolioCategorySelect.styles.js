import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Item = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    background: ${props => props.curCategory === props.value ? 'var(--accent)' : 'var(--ava-bg)'};
    font-size: 16px;
    color: ${props => props.curCategory === props.value ? '#000' : 'var(--text-col)'};
    padding: .5rem 1rem;
    margin: 0 .8rem;
    cursor: pointer;
    text-transform: uppercase;
    transition: all .3s ease;
    & svg {
        height: 20px;
        margin-right: .5rem;
    }
    & svg path {
        fill: ${props => props.curCategory === props.value ? '#000' : 'var(--text-col)'};
    }
    /* @media (max-width: 1600px) {
        & svg {
            height: 20px;
        }
        font-size: 16px;
    } */
`
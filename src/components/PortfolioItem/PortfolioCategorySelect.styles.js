import styled from "styled-components";

const iconSize = 22;

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
    background: ${props => props.curCategory === props.value ? 'var(--accent)' : 'var(--menu-bg)'};
    font-size: ${iconSize - 4}px;
    color: ${props => props.curCategory === props.value ? '#000' : 'var(--text-col)'};
    padding: .5rem 1rem;
    margin: 0 .8rem;
    cursor: pointer;
    text-transform: uppercase;
    transition: all .3s ease;
    & svg {
        height: ${iconSize}px;
        margin-right: .5rem;
    }
    & svg path {
        fill: ${props => props.curCategory === props.value ? '#000' : 'var(--text-col)'};
    }
`
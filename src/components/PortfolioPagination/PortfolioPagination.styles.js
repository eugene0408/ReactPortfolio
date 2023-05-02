import styled from "styled-components";

const size = 10

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: -50px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    @media (max-width: 768px) {
        right: -80px;
    }
    @media (max-width: 576px) {
        right: -50px;
    }
`

export const Item = styled.div`
    height: ${size}px;
    width: ${size}px;
    border-radius: 50%;
    cursor: pointer;
    margin: .5em 0;
    transition: .3s ease;
    background: ${props => props.isActive ? 'var(--accent)': 'var(--text-col)'};
    opacity: ${props => props.isActive ? '1': '0.3'};
    ${props => props.isActive ? 'transform: scale(1.4)': ''};
`
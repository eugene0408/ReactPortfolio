import styled from "styled-components"

const Button = styled.button`
    border-radius: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: center;
`

export const AccentButton = styled(Button)`
    background: var(--accent);
    color: black;
    font-size: 18px;
    font-weight: 600;
    justify-content: center;
    height: 50px;
    width: 230px;
    border: none;
    text-transform: uppercase;
    @media (max-width: 992px) {
        height: 45px;
        width: 200px;
        font-size: 16px;
    }
`

export const CVButton = styled(Button)`
    position: relative;
    background: transparent;
    border: 1px solid var(--text-col);
    justify-content: center;
    font-size: 16px;
    color: var(--text-col);
    height: 40px;
    width: 180px;
    margin-top: .5rem;
    font-family: var(--bg-font);
    @media (max-width: 992px) {
        height: 36px;
        width: 160px;
        font-size: 14px;
    }
`

export const CVIcon = styled.div`
    position: absolute;
    top: 0;
    left: .5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg {
        height: 25px;
    }
    & svg path {
        fill: var(--text-col);
        transition: .2s ease;
        ${CVButton}:hover & {
            fill: var(--light-red);
        }
    }
    @media (max-width: 992px) {
        & svg {
            height: 22px;
        }
    }
`
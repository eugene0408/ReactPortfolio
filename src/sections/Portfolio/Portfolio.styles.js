import styled from "styled-components";

export const PortfolioWrapper = styled.div`
    position: relative;
    height: 80vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    @media (max-width: 1600px) {
        width: 100%;
    }
    @media (max-width: 992px) {
        width: 80%;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
    @media (max-width: 576px) {
        width: 70%;
        height: 500px;
    }
`
import styled from "styled-components"
import { Container } from "react-grid-system"


export const ToplineWrapper = styled.div`
    position: fixed;
    top: 1rem;
    width: 100%;
    z-index: 99;
`
export const ToplineContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 768px) {
        justify-content: space-between;
    }
`
export const LinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
`
export const ToplineLink = styled.a.attrs({
    target: '_blank'
})`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: .5rem;
`
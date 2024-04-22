import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    background: var(--loading-bg);
    display: flex;
	justify-content: center;
	align-items: center;
`

export const Container = styled.div`
    display: inline-block;
    position: relative;
    height: 80px;
    width: 120px;
`

export const Item = styled.div`
    position: absolute;
    display: inline-block;
    top: 33.33333px;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background: var(--accent);
    &:nth-child(1){
        left: 8px;
    }
    &:nth-child(2){
        left: 16px;
    }
    &:nth-child(3){
        left: 48px;
    }
    &:nth-child(4){
        left: 88px;
    }

`

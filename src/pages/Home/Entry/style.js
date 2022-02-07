import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    

    span {
        display: flex;
        gap: 5px;
    }
`

export const Date = styled.p`
    color: #C6C6C6;
`

export const Value = styled.div`
    color: ${props => props.type === 'in' ? '#03AC00' : '#C70000'}
`
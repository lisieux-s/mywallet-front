import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    div {
        display: flex;
        gap: 5px;

        p {
            width: 100px;
            margin: 0;
            padding: 0;
            text-align: left;
        }
    }
`

export const Date = styled.p`
    color: #C6C6C6;
`

export const Value = styled.div`
    color: ${props => props.type === 'in' ? '#03AC00' : '#C70000'};
    text-align: right;
`
import styled from "styled-components";

export const Entries = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.entriesFound ? 'flex-start' : 'center'};
    text-align: ${props => props.entriesFound ? 'left' : 'center'};
    
    width: 100%;

    height: 446px;

    background: white;
    color: #868686;

    border-radius: 5px;

    padding: 12px;
    margin-bottom: 114px;

    span {
        width: 180px;
    }
`

export const Buttons = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 15px;
    margin-top: 15px;
    padding: 25px;


    button {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;

        width: 100%;
        height: 114px;
        padding: 10px;

        font-weight: 700;
        img {
            width: 22px;
        }
        p {
            width: 50%;
            line-height: 100%;
        }
    }
`
import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 1px grey;
    border-radius: 10px;
    margin: 20px;
    width: 250px;
    padding: 10px;
    text-align: left;

    div{
        text-align: center;
    }
    .usuario{
        font-size: 20px;
    }
    .closeSesion{
        border-style: none;
        margin: auto;
        color: white;
        padding: 5px;
        border: solid 1px;
        border-radius: 5px;
        background-color: #03a900;
        width: 150px;
    }
    /* align-items: center; */
`
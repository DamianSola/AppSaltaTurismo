import styled from "styled-components";

export const LandingContain = styled.div `
    border-top: solid 25px #7B0000;
    display: flex;
    height: 90px;
    padding: none;
    width: 100%;
    margin: auto;
    margin-bottom: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    justify-content: space-between;

    ul{
        display: flex;
        width: 80%;
        justify-content: space-between;
        align-items: center;
        margin: auto 0;

    }


    .item {
        text-decoration: none;
        color: #1a1a1a;
        font-size: 20px;
        transition: 1s;
        /* padding: 10px; */
    }

    .item:hover{
        text-decoration-line: underline;
    }

    .dropdown{
        border-style: none;
        font-size: 20px;
        color: #1a1a1a;
        background-color: #FFFF;
    }
    .dropdown:hover{
        text-decoration-line: underline;
    }

    @media (max-width: 420px){
        .service{
            font-size: 10px;
            padding: 3px;
        }
        ul{
            width: 90%;
            margin: 2px;
            padding: 0;
        }
        .dropdown{
            font-size: 10px;
        }
        .item{
            font-size: 10px;
            
        }
        
    }

`


export const WeathermapContain = styled.div`
    display: flex;
    width: 130px;
    color: black;
    height: 50px;
    margin: auto 0;
    /* background-color: #dfdfdf; */
    border-radius: 10px;

    .image{
        display: flex;
        align-items: center;
        /* margin: auto 0; */
    }
    p{
        font-size: 20px;
        align-items: center;
        margin: 0;
        width: 50%;

    }
    .iconoClima{
        width: 50%;
        height: auto;
    }
`
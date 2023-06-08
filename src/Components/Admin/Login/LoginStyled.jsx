import styled from "styled-components";

export const LoginContainer = styled.div`
    display: block;
    width: 350px;
    margin: 10px auto;
    padding: 20px;
    border: solid 1px black;
    border-radius: 10px;
    background-color: #e4e4e4;
    transition: 100ms;

    .login{
        font-size: 25px;
        padding: none;
    }
    .form{
        text-align: left;
    }
    .message{
        font-size: 12px;
    }
    .input{
        margin: 20px 0;
    }
    .button{
        margin: 10px auto;
        border-style: none;
        background-color: #03a900;
        border-radius: 5px;
        padding: 5px;
        color: white;
    }
    .error{
        color: white;
        /* color: red; */
        background-color: #ff00003d;
        border-radius: 10px;
        padding: 10px;
    }
`
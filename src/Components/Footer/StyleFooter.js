import styled from "styled-components";

export const FooterContain = styled.div`
display: flex;
justify-content: space-around;
margin-top: 20px;
width: 100%;
border-top: solid 0.5px grey;
background-color: #930000;
color: #E2E2E2;

    @media (max-width: 420px){
        flex-wrap: wrap;
    }
`

export const Parts = styled.div`
display: flex;
flex-direction: column;
padding: 3rem;
text-align: left;
font-size: 15px;

    @media (max-width: 420px){
        font-size: 8px;
        padding: 0px;
       
    }

p{
    padding: none;
    margin: 0;
}
`
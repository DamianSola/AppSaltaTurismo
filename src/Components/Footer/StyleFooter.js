import styled from "styled-components";

export const FooterContain = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin-top: 20px;
padding: 20px;
width: 100%;
min-height: 250px;
border-top: solid 0.5px grey;
background-color: #930000;
color: #E2E2E2;
/* align-items: center; */

    /* @media (max-width: 420px){
       
    } */
`

export const Parts = styled.div`
display: flex;
flex-direction: column;
margin: 10px 0;
text-align: left;
font-size: 15px;

    .item{
        text-decoration: none;
        color: white;
        font-size: larger;
        transition: 1s;
    }

    @media (max-width: 420px){
        font-size: 12px;
        padding: 0px;
       
    }

p{
    padding: none;
    margin: 0;
}
`
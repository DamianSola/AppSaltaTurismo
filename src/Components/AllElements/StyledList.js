import styled from "styled-components";
import {Link} from "react-router-dom"

export const ContainerList = styled.div`
display: block;
justify-content: center;
width: 90%;
margin: auto ;
`
export const ContainElement = styled.div`
display: flex;
/* border: solid 1px ; */
box-shadow: 10px 10px 10px ;
background-color: white;
margin: 20px;

`

export const Image = styled.img`
width: 22rem;
/* border-radius: 5px 5px 0 0 ; */
`


export const ContainTwo = styled.div`
display: block;
width: 100%;
/* padding: 5%; */
`

export const Containtree = styled.div`
display: flex;
justify-content: space-around;
/* text-align: left; */
/* position: absolute; */

`

export const Title = styled.p`
font-size: 1.5rem;
position: absolute;
margin: auto;
text-align: left;
background-color: #7B0000;
color: white;
`
export const Description = styled.p`
font-size: 1rem;
text-align: left;
padding: 10px;
`

export const Likes = styled.p`
text-align: left;
font-size: 20px;
`


export const SubCategory = styled.p`
font-size: 20px;
background-color: #85C1E9 ;
`

export const LikeButton = styled.button`
background-color: #D98880 ;
font-size: 1.5rem;
border-radius: 3px;

    :hover{
        background-color: #85C1E9 ;

    }
`
export const SeeMore = styled(Link)`
    font-size: 1.5rem;
    text-decoration: none;
    color: black;
    text-align: right;
    /* :hover{ */
    
    /* } */
`
import styled from "styled-components";

export const ContainerList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;
height: 100%;
background-color: #F5F5F5;
padding-top: 2rem;

`
export const ContainElement = styled.div`
display: block;
width: 280px;
border-radius: 5px;
border: solid 1px;
background-color: white;
margin: 10px;
font-family: Lucida Console;
`

export const Image = styled.img`
width: 17.5rem;
border-radius: 5px 5px 0 0 ;
`


export const ContainTwo = styled.div`
display: block;
/* width: 100%; */
padding: 5%;
`

export const Containtree = styled.div`
display: block;
justify-content: space-between;
width: 30%;
`

export const Title = styled.p`
font-size: 1.5rem;
`
export const Description = styled.p`
font-size: 1rem;
`

export const Likes = styled.p`

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
export const SeeMore = styled.a`
    font-size: 1.5rem;
    text-decoration: none;
    color: black;
    /* :hover{ */
    
    /* } */
`
import styled from "styled-components";

export const ContainerList = styled.div`
display: block;
width: 100%;
margin: auto;

    .body{
        display: flex;
        flex-wrap: wrap;
    }

    .subCategoryName{
        font-size: 60px;
        color: #414141;
        margin: auto;
        left: 0%;
    }
`
export const ContainElement = styled.div`
display: block;
background-color: white;
width: 30%;
margin: 10px;
border-radius: 10px;
border: solid 0.5px #ECF0F1;
padding: 10px;

:hover{
    background-color: #ECF0F1 ;

}
`

export const Image = styled.img`
width: 100%;
/* border-radius: 5px 5px 0 0 ; */
`


export const ContainTwo = styled.div`
display: block;
width: 100%;
text-align: left;
/* padding: 5%; */
`

export const Containtree = styled.div`
display: flex;
justify-content: space-around;


`

export const Title = styled.p`
font-size: 1.5rem;
margin: auto;
`
export const Description = styled.p`
font-size: 1rem;
padding: 5px;
color: grey;
`

export const Likes = styled.div`
/* text-align: left; */
background-color: black;
color: white;
padding: 5px;
position: absolute;
border-radius: 0 0 10px 0;
/* right: 0%; */
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
export const SeeMore = styled.div`
    font-size: 20px;
   
    .Link{
        text-decoration: none;
        color: white;
        background-color: black;
        padding: 5px ;
        border-radius: 10px;

    }

`
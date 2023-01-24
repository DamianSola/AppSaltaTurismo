import styled from "styled-components";

export const ContainerList = styled.div`
display: block;
width: 100%;
height: 100%;
background-color: #F5F5F5;
padding-top: 2rem;

`
export const ContainElement = styled.div`
display: flex;
/* padding: 5px; */
border-radius: 5px;
border: solid 1px;
background-color: white;
margin: 10px;
font-family: Lucida Console;
/* font-family: Verdana;	 */

`
export const Image = styled.img`
width: 16rem;
/* margin: 5px; */
border-radius: 5px 0 0 5px;

`


export const ContainTwo = styled.div`
display: block;
width: 40%;
/* justify-content: space-around; */
/* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
text-align: left;
`

export const Containtree = styled.div`
display: block;
justify-content: space-between;
width: 30%;
`

export const Title = styled.p`
/* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
font-size: 1.5rem;
margin: 10px;
`
export const Description = styled.p`
/* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
font-size: 1rem;
margin: 15px;
`

export const Likes = styled.p`
/* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
/* background-color: #ff1493; */
font-size: 20px;
/* padding: 10px; */
/* height: 20px; */
/* border-radius: 5px; */
/* border: solid 1px; */
`

export const SubCategory = styled.p`
font-size: 20px;
background-color: #85C1E9 ;
`

export const LikeButton = styled.button`
background-color: #D98880 ;
font-size: 1.5rem;
/* border: none; */
border-radius: 3px;

:hover{
    background-color: #85C1E9 ;

}
`
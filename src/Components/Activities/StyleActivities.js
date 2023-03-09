import styled from "styled-components";

export const ActivitiesContainer = styled.div`
  /* display: block; */
  /* height: 25rem; */
  width: 95%;
  height: 100%;
  display: flex;
  margin: auto;
  background-color: blanchedalmond;
  /* padding: 10%; */
  @media screen and (max-width: 750px){
    flex-direction: column;
  } 

`
export const OnlyActivities = styled.div`
  display: flex; 
  justify-content: left;
  /* flex-wrap: wrap; */
`
export const Body = styled.section`
  display: block;
  width: 50%;
  @media screen and (max-width: 750px){
  width: 100%;
  } 

`
export const Photo = styled.img`
width: 100%;
`
export const Title = styled.h3`
font-size: 35px;
position: absolute;
margin: auto;
background-color: #7B0000;
`

export const Header = styled.div`
display: flex;
width: 100%;
`

export const Description = styled.p`
text-align: left;
margin-left:10px;
width: 100%;
`
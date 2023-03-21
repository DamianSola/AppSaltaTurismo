import styled from "styled-components";

export const ActivitiesContainer = styled.div`
  text-align: left;
  width: 95%;
  height: 100%;
  display: block;
  margin: 40px auto;
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
  background-color: black;
  /* align-items: center; */
  padding: 0 20%;

  @media screen and (max-width: 750px){
  width: 100%;
  } 

`
export const Photo = styled.img`
width: 60%;
`
export const Title = styled.h3`
font-size: 35px;
margin: auto;
`

export const Header = styled.div`
display: flex;
width: 100%;
`

export const Description = styled.p`
width: 100%;
margin: 40px auto;
font-size: 20px;
`
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
  width: 75%;
  margin: auto 20px;
  padding: 0 4%;

  @media screen and (max-width: 750px){
  width: 100%;
  } 

`
export const Photo = styled.img`

`
export const Title = styled.h3`
font-size: 35px;
margin: 40px 20px;
`

export const Header = styled.div`
display: flex;
width: 100%;
`

export const Description = styled.p`
width: 75%;
margin: 40px 20px;

/* margin: 40px auto; */
font-size: 20px;
`
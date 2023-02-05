import React from "react";
import styled from "styled-components";


const Card = styled.div`
display: block;
width: 18rem;
height: 20rem;
background-repeat: no-repeat;
background-size: cover;
margin: 1rem;
/* border: solid grey; */
/* border-radius: 2%; */
color: rgba( 253, 254, 254, 0);

:hover{
    width: 18.5rem;
    opacity: 0.6;
    color: black;
}
`

const NameCategory = styled.h2`
margin-top: 50%;
font-size: 30px;
`

const CategoriesCard = ({image, name, id}) =>{

    let backImage = {        
        backgroundImage: 'url(' + image + ')'
    }


    return(
        <Card style={backImage}>
            <NameCategory>{name}</NameCategory>
        </Card>
    )
}

export default CategoriesCard;

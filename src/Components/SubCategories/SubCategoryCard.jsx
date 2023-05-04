import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {Card} from "reactstrap";


const CardConainer = styled.div`
    display: flex;
    margin: 10px;
    width: 450px;
    background-color: #fcfcfc;
    border-radius: 5px;
    border: solid 1px grey;

    .photo{
        width: 40%;
        margin: 5px;
    }
    img{
        width: 100%;
        border-radius: 5px;
    }
    .name{
        /* margin: 0; */
        font-size: 20px;
        font-family: Verdana, Geneva, Tahoma, sans-serif; 
    }
    .body{
        margin: auto;
        text-align: center;
    }
    
`
// const Photo = styled.img`
//     width: 360px;
//     /* border-radius: 5px 5px 0 0; */
//     border-radius: 5px;
// `
// const Name = styled.p`
//     text-align: center;
//     font-size: 20px;
//     font-family: Verdana, Geneva, Tahoma, sans-serif;
//     margin: auto;

// `
const SeeMore = styled(Link)`
text-decoration: none;
margin: auto;
color: black;
font-size: 20px;
padding: 5px;
border-radius: 5px;
transition: 0.2s;

:hover{
    color: white;
    background-color: black;

}
`
// const SeeText = styled.p`
//    display: block;
// `
// const BodyCard = styled.div`
//     padding: none;
//     margin: auto;
// `
const SubCategoryCard = ({name, id, image, showButton, category}) => {

    return(
        <CardConainer>
            <div className="photo">
            <img src={image} alt="image_subCategory"/>
            </div>
            <div className="body">
                <p className="name">{name}</p>
                {category && <p>{category}</p>}
                {showButton && <SeeMore exact to={`/sub-categories/${id}`}>Ver mas </SeeMore>}
            </div>
        </CardConainer>
    )
}

export default SubCategoryCard;

{/* <Photo src={image}/>
<BodyCard>
<Name>{name}</Name>
{/* <SeeText> */}
    // {
    //     showButton && <SeeMore exact to={`/sub-categories/${id}`}>Ver mas </SeeMore>
    // }{
    //     category && <p>{category}</p>
    // }

{/* </SeeText> */}
// </BodyCard> */}
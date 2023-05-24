import styled from "styled-components";

export const ContainerSubCategories = styled.div`
display: flex;
margin: auto 20px;
text-align: left;

    .categories{
        display: flex;
        flex-direction: column;
        width: 200rem;
        margin-right: 25px;
        background-color: #ffff;
        border-right: solid 0.5px grey;
    }
    .category-details{
        width: 800rem;
    }

    .link{
        text-decoration: none;
        color: black;
    }

`

export const ContainerTwo = styled.div`
display: flex ;
flex-wrap: wrap;
margin: auto;
`
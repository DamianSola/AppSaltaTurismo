import styled from "styled-components";

export const ContainerSubCategories = styled.div`
display: flex;
margin: auto 20px;
text-align: left;

    .categories{
        display: flex;
        flex-direction: column;
        width: 200px;
        margin-right: 25px;
        background-color: #ffff;
        border-right: solid 0.5px grey;
    }
    .category-details{
        width: 950px;
    }

    .link{
        text-decoration: none;
        /* color: black; */
        color: #000796;
    }


    @media (max-width: 420px){
        flex-direction: column;

        h4{
            display: none;
        }
        .categories{
            flex-direction: row;
            flex-wrap: wrap;
            border-right:none;
            width: 100%;
        }
        .link{
            font-size: 10px;
        }

        .category-details{
            width: 100%;
        }
    }
`

export const ContainerTwo = styled.div`
display: flex ;
flex-wrap: wrap;
margin: auto;
`
import styled from "styled-components";

export const LandingContain = styled.div `
    border-top: solid 25px #7B0000;
    display: flex;
    height: 90px;
    padding: none;
    width: 100%;
    margin: auto;
    margin-bottom: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    justify-content: space-between;

    ul{
        display: flex;
        width: 80%;
        justify-content: space-between;
        align-items: center;
    }


    .item {
        text-decoration: none;
        color: #1a1a1a;
        font-size: 20px;
        transition: 1s;
        padding: 10px;
    }

    .item:hover{
        text-decoration-line: underline;
    }

    .dropdown{
        border-style: none;
        font-size: 20px;
        color: #1a1a1a;
        background-color: #FFFF;
    }
    .dropdown:hover{
        text-decoration-line: underline;
    }

    @media (max-width: 420px){
        .service{
            font-size: 10px;
            padding: 3px;
        }
        ul{
            width: 90%;
            margin: 2px;
            padding: 0;
        }
        .dropdown{
            font-size: 10px;
        }
        .item{
            font-size: 10px;
        }
        
    }

`

// export const BgDiv = styled.div`
//   background-color: #ede9f1;
//   position: absolute;
//   top: -700px;
//   transition: all 0.6s ease;
//   &.active {
//     z-index: -1;
//     margin-top: 58px;
//     width: 100%;
//     height: 60vh;
//     left: 0;
//     top: 0;
//     border-radius: 0 0 60% 0;
//   }
// `;

// export const Responsive = styled.div`
//       ul{
//         display: flex;
//         width: 80%;
//         justify-content: space-between;
//         align-items: center;
//     }


//     .item {
//         text-decoration: none;
//         color: #1a1a1a;
//         font-size: 20px;
//         transition: 1s;
//         padding: 10px;
//     }

//     .item:hover{
//         text-decoration-line: underline;
//     }

//     .dropdown{
//         border-style: none;
//         font-size: 20px;
//         color: #1a1a1a;
//         background-color: #FFFF;
//     }
//     .dropdown:hover{
//         text-decoration-line: underline;
//     }
// `
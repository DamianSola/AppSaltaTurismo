import styled from "styled-components";

export const LandingContain = styled.div `
    border-top: solid 25px #7B0000;
    height: 90px;
    padding: none;
    /* background-color: #87CEFA; */
    width: 100%;
    margin: auto;
    margin-bottom: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    /* align-items: center; */

    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .home{
        /* font-size: 30px; */
        text-decoration: none;
        color: #7B0000;
        padding: none;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    .item {
        text-decoration: none;
        color: #1a1a1a;
        /* font-size: 20px; */
        font-size: larger;
        transition: 1s;
        /* padding: 6px; */
    }

    .item:hover{
        text-decoration-line: underline;
    }
    .service{
        text-decoration: none;
        color: #1a1a1a;
        font-size: 20px;
        padding: 6px;
    }

    .dropdown{
        border-style: none;
        font-size: 20px;
        color: #1a1a1a;
        background-color: #FFFF;
    }

    @media (max-width: 420px){
        .service{
            font-size: 10px;
            padding: 3px;
        }
        .dropdown{
            font-size: 10px;
        }
        .item{
            font-size: 10px;
        }
        
    }

`

// export const Logo = styled.div`
//     display: flex;
//     align-items: center;

//     .ese{
//         font-size: 45px;
//     }
//     .a{
//         font-size: 35px;
//         color: black;
//     }
//     .aa{
//         font-size: 40px;
//     }
//     .ele{
//         font-size: 50px;
//     }
//     .te{
//         font-size: 40px;
//         color: black;
//     }

// `
export const BgDiv = styled.div`
  background-color: #ede9f1;
  position: absolute;
  top: -700px;
  transition: all 0.6s ease;
  &.active {
    z-index: -1;
    margin-top: 58px;
    width: 100%;
    height: 60vh;
    left: 0;
    top: 0;
    border-radius: 0 0 60% 0;
  }
`;
import styled from "styled-components";

export const LandingContain = styled.nav `
    border-top: solid 25px #7B0000;
    display: flex;
    height: 90px;
    padding: none;
    width: 100%;
    margin: auto;
    margin-bottom: 15px;
    /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
    justify-content: space-between;

    
    .desactive{
        display: flex;
        flex-direction: row;
        width: 70%;
        justify-content: space-between;
        align-items: center;
        margin: auto ;
        /* background-color: white; */
    }
  
    @media (max-width: 768px) {
    .active {
      /* position: relative; */
      z-index: 1;
      position: absolute;
      background-color: white;
      width: 100%;
      /* height: 100%; */
      left: 0%;
      top:100px;

      .item{
        /* background-color: white; */

      }
      
      a {
        /* font-size: 2rem; */
        text-decoration: none;
        display: block;
        margin-right: auto;
        margin-left: auto;
        width: 100%;
        height: 100%;
        text-align: center;
        left: 0;
        right: 0;
        margin-top: 3rem;
        transition: all 0.5s ease;


        &:hover {
          color: #1a1a1a;
        }
      }
    }
    .desactive {
      position: absolute;
      /* position: relative; */
      z-index: 1;
      top: -700px;
      left: -2000px;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      a {
        color: black;
      }
    }
  }

    .item {
        text-decoration: none;
        color: #1a1a1a;
        font-size: 17px;
        transition: 1s;
       
    }

    .item:hover{
        text-decoration-line: underline;
    }

    .dropdown{
        border-style: none;
        font-size: 17px;
        color: #1a1a1a;
        background-color: #FFFF;
    }
    .dropdown:hover{
        text-decoration-line: underline;
    }

    .burger {
       position: relative;
       right: 3%;

            @media (min-width: 810px) {
            display: none;
        }
    }

`


export const WeathermapContain = styled.div`
    display: flex;
    width: 130px;
    color: black;
    height: 50px;
    margin: auto 0;
    /* background-color: #dfdfdf; */
    border-radius: 10px;

    .image{
        display: flex;
        align-items: center;
        /* margin: auto 0; */
    }
    p{
        font-size: 20px;
        align-items: center;
        margin: 0;
        width: 50%;

    }
    .iconoClima{
        width: 50%;
        height: auto;
    }

    @media (max-width: 768px){
    display: none;

    }
`
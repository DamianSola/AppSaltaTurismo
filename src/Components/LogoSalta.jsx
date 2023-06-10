import React from "react";
import styled from "styled-components";

export const Logo = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    color: ${props => props.color};
    text-shadow: 2px 1px 2px black;
    width: 100px;
    /* margin:0 ; */
    padding: 0 10px;

    .ese{
        font-size: 45px;
       
    }
    .a{
        font-size: 35px;
        color: black;
    }
    .aa{
        font-size: 40px;
    }
    .ele{
        font-size: 50px;
    }
    .te{
        font-size: 40px;
        color: black;
    }

    /* @media (max-width: 420px){
        .aa{
            font-size: 20px;
        }
        .te{
            font-size: 20px;
        }
        .ele{
        font-size: 25px;
        }
        .ese{
        font-size: 22px;
        }
        .a{
        font-size: 17px;
        color: black;
        }
    } */

`
export default function LogoSalta({color}) {
    return(
        <Logo color={color}>
        <p className="ese">S</p>
        <p className="a">a</p>
        <p className="ele">l</p>
        <p className="te">t</p>
        <p className="aa">a</p>
        </Logo>
    )
}
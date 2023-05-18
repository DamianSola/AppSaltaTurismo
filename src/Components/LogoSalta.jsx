import React from "react";
import styled from "styled-components";

export const Logo = styled.div`
    display: flex;
    align-items: center;

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

`
export default function LogoSalta() {
    return(
        <Logo>
        <p className="ese">S</p>
        <p className="a">a</p>
        <p className="ele">l</p>
        <p className="te">t</p>
        <p className="aa">a</p>
        </Logo>
    )
}
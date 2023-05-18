import React from "react";
import styled from "styled-components"
import {Spin } from 'hamburger-react'

const Burger = styled.div`
color: black;
text-align: center;
`

export default function HamburgerButton (props){
    return (
        <Burger onClick={props.handleClick}>
            <Spin />
        </Burger>
    )
}
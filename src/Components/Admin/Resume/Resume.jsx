import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {CountainResume, Bock, NameTable, Amount, Container, LinkDetail} from "./StyledResume";
import { AllActionDates } from "../../../Redux/Actions/Admin";
import Login from "../Login/Login";
import Register from "../Register/Register";

export default function Resume(){
    const dispacth = useDispatch()

    let {allDates,user} = useSelector(s => s)
    // console.log(user)

    useEffect(() => {
        document.title = "admin";
       dispacth(AllActionDates())
    },[dispacth,user])

    return(
        <Container>
            {user ? 
        <CountainResume>
            {allDates && allDates.map((e,i) => {
                return(
                    <LinkDetail  to={`${e.title}`}>
                    <Bock Key={i}>
                        <NameTable>{e.title}</NameTable>
                        <Amount>{e.count}</Amount>
                    </Bock>
                    </LinkDetail>
                )
            })}
        </CountainResume>:
        <div className="sesions">
            <Login/>
            <Register/>
        </div>
        }
        </Container>
    )
} 
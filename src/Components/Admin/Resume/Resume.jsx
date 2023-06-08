import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {CountainResume, Bock, NameTable, Amount, Container, LinkDetail, Admin} from "./StyledResume";
import { AllActionDates,getUsers } from "../../../Redux/Actions/Admin";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import { useState } from "react";

export default function Resume(){

    // const [open, setOpen] = useState()

    const dispacth = useDispatch()

    let {allDates,users, userLogin} = useSelector(s => s)
    const userDate = (JSON.parse(userLogin))

    // console.log(login)
    

    useEffect(() => {
        document.title = "admin";
       dispacth(AllActionDates())
       dispacth(getUsers())
   
    },[dispacth,userLogin])

    return(
        <div>
            <Admin>Administracion de datos</Admin>
        <Container>
            {userDate !== null && <Profile name={userDate.name} last_name={userDate.last_name} email={userDate.email}/>}
            {userDate !== null ? 
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
            {/* <Register/> */}
        </div>
        }
        </Container>
        </div>
    )
} 
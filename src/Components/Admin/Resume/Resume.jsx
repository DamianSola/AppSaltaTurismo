import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {CountainResume, Bock, NameTable, Amount, Container, LinkDetail} from "./StyledResume";
import { AllActionDates } from "../../../Redux/Actions/Admin";

export default function Resume(){
    const dispacth = useDispatch()

    let {allDates} = useSelector(s => s)
    console.log(allDates)

    useEffect(() => {
        document.title = "admin";
       dispacth(AllActionDates())
    },[dispacth])

    return(
        <Container>

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
            {/* <Activities>
            <NameTable>Activities</NameTable>
            <Amount>{allActivities.length}</Amount>
        </Activities> */}
        </CountainResume>
        {/* {icon && <ResumenTable data={data}/>} */}
        </Container>
    )
} 
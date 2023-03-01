import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {CountainResume, Bock, NameTable, Amount, Container, LinkDetail} from "./StyledResume";
// import {getAllActivities,getAllTours,getAllCategories,
//     getAllService,getAllSubCategories,getAllTowns} from "../../../Redux/Actions/Index"
import { useState } from "react";
import { AllActionDates } from "../../../Redux/Actions/Admin";
// import ResumenTable from "../Details/ResumenTable";

export default function Resume(){
    const dispacth = useDispatch()
    let [icon, setIcon] = useState(false)
    let [data, setData] = useState('')

    // const [resume , setResume] = useState([])

    let {allDates} = useSelector(s => s)
    console.log(allDates)

    const handleButton = (data) => {
        setData(data)
        setIcon(true)
    }

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
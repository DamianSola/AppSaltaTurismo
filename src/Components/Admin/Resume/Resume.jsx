import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {CountainResume, Activities, NameTable, Amount} from "./StyledResume";
// import {getAllActivities,getAllTours,getAllCategories,
//     getAllService,getAllSubCategories,getAllTowns} from "../../../Redux/Actions/Index"
import { useState } from "react";
import { AllActionDates } from "../../../Redux/Actions/Admin";

export default function Resume(){
    const dispacth = useDispatch()

    const [resume , setResume] = useState([
    ])

    let {allDates} = useSelector(s => s)
    console.log(allDates)

    useEffect(() => {
        document.title = "admin";
       dispacth(AllActionDates())
    },[])

    return(
        <CountainResume>
            {allDates && allDates.map(e => {
                return(
                    <Activities Key={e.id}>
                        <NameTable>{e.title}</NameTable>
                        <Amount>{e.count}</Amount>
                    </Activities>
                )
            })}
            {/* <Activities>
            <NameTable>Activities</NameTable>
            <Amount>{allActivities.length}</Amount>
            </Activities> */}
            
        </CountainResume>
    )
} 
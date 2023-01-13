import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {CountainResume, Activities, NameTable, Amount} from "./StyledResume";
import {getAllActivities,getAllTours,getAllCategories,
    getAllService,getAllSubCategories,getAllTowns} from "../../../Redux/Actions/Index"
import { useState } from "react";

export default function Resume(){
    const dispacth = useDispatch()
    const {allActivities} = useSelector(s => s)

    const [resume , setResume] = useState([{name:"activities", cant:2564},
    {name: 'tours', cant: 64},{name: "services", cant:591},{name: "towns", cant:27}])

    useEffect(() => {
        dispacth(
            getAllActivities(),
            getAllTours(),
            getAllService(),
            getAllCategories(),
            getAllSubCategories(),
            getAllTowns()
            )
    },[])

    return(
        <CountainResume>
            {resume && resume.map(e => {
                return(
                    <Activities>
                        <NameTable>{e.name}</NameTable>
                        <Amount>{e.cant}</Amount>
                    </Activities>
                )
            })}

        </CountainResume>
    )
} 
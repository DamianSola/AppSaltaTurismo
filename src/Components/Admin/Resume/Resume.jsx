import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Resume(){
    const dispacth = useDispatch()
    const {allActivities} = useSelector(s => s)

    useEffect(() => {

    },[])

    return(
        <div>my code</div>
    )
} 
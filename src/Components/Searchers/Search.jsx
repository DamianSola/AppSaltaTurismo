import React,{useState} from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getActivityByName, getTownByName } from "../../Redux/Actions/Index";



const ContainerSearch = styled.div`
    
    input{
        border: solid 0.5px;
        border-radius: 5px;
        background-color: #ffff;
        color: black;
        margin: 0 10px;
    }

    button{
        border: solid 0.5px;
        border-radius: 5px;
        background-color: #ffff;
        color: black;
        margin: 0 10px;
    }

`

export const SearchActivity = () => {

    let [input, setInput ] = useState("")
    let dispatch = useDispatch()

    const handleOnChange = (e) => {
        setInput(e.target.value)
    }
    const handleOnClick = (e) => {
        e.preventDefault()
        dispatch(getActivityByName(input))
        // setInput("")
    }

    return(
        <ContainerSearch>
        <input type="search" placeholder="buscar actividad..." value={input}  onChange={handleOnChange}/>
        <button type="submit" onClick={handleOnClick}>buscar</button>
        </ContainerSearch>
    )

}

export const SearchTown = () => {
    let [input, setInput ] = useState("")
    let dispatch = useDispatch()

    const handleOnChange = (e) => {
        setInput(e.target.value)
    }
    const handleOnClick = (e) => {
        e.preventDefault()
        dispatch(getTownByName(input))
        setInput("")
    }

    return(
        <ContainerSearch>
        <input type="search" placeholder="buscar pueblo..." value={input}  onChange={handleOnChange}/>
        <button type="submit" onClick={handleOnClick}>buscar</button>
        </ContainerSearch>
    )
}

export const SearchService = () => {
    let [input, setInput ] = useState("")
    let dispatch = useDispatch()

    const handleOnChange = (e) => {
        setInput(e.target.value)
    }
    const handleOnClick = (e) => {
        e.preventDefault()
        // dispatch(getTownByName(input))
        setInput("")
    }

    return(
        <ContainerSearch>
        <input type="search" placeholder="buscar servicio..." value={input}  onChange={handleOnChange}/>
        <button type="submit" onClick={handleOnClick}>buscar</button>
        </ContainerSearch>
    )
}
import React,{useState} from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getActivityByName, getTownByName } from "../../Redux/Actions/Index";
import { Button, Input } from "reactstrap";


const InputForm = styled(Input)`
    /* width: 30%; */
    border: none ;
`

const ContainerSearch = styled.div`
    display: flex;
    
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
    }

    return(
        <ContainerSearch>
        <input type="search" placeholder="buscar actividad..." value={input}  onChange={handleOnChange}/>
        <Button type="submit" onClick={handleOnClick}>buscar</Button>
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
        <InputForm type="search" placeholder="buscar pueblo..." value={input}  onChange={handleOnChange}/>
        <Button type="submit" onClick={handleOnClick}>buscar</Button>

        {/* <Input type="submit" onClick={handleOnClick} value="buscar"/> */}
        </ContainerSearch>
    )
}

export const SearchService = () => {
    let [input, setInput ] = useState("")
    // let dispatch = useDispatch()

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

export const SearchTours = () => {
    let [input, setInput] = useState()

    const handleOnClick = () => {}
    const handleOnChange = () => {}

    return(
        <ContainerSearch>
            <InputForm type="search" placeholder="buscar tour..." value={input}  onChange={handleOnChange}/>
            <Button type="submit" onClick={handleOnClick}>buscar</Button>
        </ContainerSearch>
    )
}
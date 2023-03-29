import React,{useState} from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getActivityByName } from "../../Redux/Actions/Index";



const ContainerSearch = styled.div`
    
    input{
        margin-left: 5px;
        padding: 5px;
    }

    button{
        margin-left: 5px;
        padding: 5px;
        transition: 0.2s;
    }

    button:hover{
        background-color: #D0D3D4;
    }

`

const SearchActivity = () => {

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
export default SearchActivity
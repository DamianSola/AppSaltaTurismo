import React from "react";
import { Modal } from "reactstrap";
import styled from "styled-components";

const Container = styled.div`
    display:block;
    padding: 5px;

    .close{
        font-size: 30px;
        position: relative;
        margin: auto;
        right: 0%;
        left: 95%;
        border-style: none;
        background-color: #ffff;
        color: black;
    }

    .body{
        display: block;
        width: 100%;
        padding: 10px;
    }

    form{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    input{
        width: 90%;
    }

    textarea{
        width: 90%;
    }

    .inputSubmit{
        width: 30%;

    }
`


const PutActivity = ({open, close}) => {


    return(
        <Modal isOpen={open}>
           <Container>
            <button className="close" onClick={close}>x</button>
            <p>holaa</p>
            <div className="body">
                <form onSubmit='submit'>
                    <input type="text" placeholder="cambiar nombre..."/>
                    <label>descripcion</label>
                    <textarea type= "text" placeholder="cambiar descripcion..." minlength="200"/>
                    <input type="submit" value="actualizar" className="inputSubmit" onClick={() => alert("este formulario todavia no funciona")}/>
                </form>
            </div>
           </Container>
        </Modal>
    )
}

export default PutActivity;
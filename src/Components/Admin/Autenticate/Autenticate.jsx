import React from "react";
import { useSelector } from "react-redux";
import { redirect, Link } from "react-router-dom";
import { Button } from "reactstrap";
import styled from "styled-components";

export const AutenticateRoutes = () => {
    const {userInfo} = useSelector(s => s)

    if(userInfo === null) return true 
    else return false
}

const Page = styled.div`
    margin: 30px auto;
    display: block;
    border: solid 1px grey;
    border-radius: 20px;
    width: 70%;
    padding: 80px;
`

export const PageAuth = () => {

    // const RedirectRoute = () => {
    //     redirect("/admmin/login")
    // }
    return(
        <Page>
            <div>
                <h4>Lo sentimos, no puedes acceder a esta direccion</h4>
                <p>
                    Para poder acceder a esta direccion debes estar registrado y autorizado por el dueño de la pagina
                </p>
                {/* <Button onClick={RedirectRoute}>Acceder o ingresar</Button> */}
                <Link to="/admin">Acceder o ingresar</Link>
            </div>
        </Page>
    )
}
import React,{useEffect, useState} from "react";
import { Modal, CloseButton, Form, Input, Label, Spinner } from "reactstrap";
import {LoginContainer} from "./LoginStyled";
import { useDispatch, useSelector } from "react-redux";
import { getUsers,signin } from "../../../Redux/Actions/Admin";


const Login = () => {
    
    const [login, setLogin] = useState({email:"", password:""});
   
    const dispatch = useDispatch()
    const {msg} = useSelector(s => s)
  
    const handleLoginChange = (e) => {
        let {name, value} = e.target;
        setLogin({
            ...login,
            [name]: value
        })
       
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        setLogin({email:"", password:""})
        dispatch(signin(login))
        
    };

    useEffect(()=> {
        
    }, [login])


    return(
        <LoginContainer>
            <div>
                <p className="login">Iniciar Sesion</p>
                <p className="message">Debes tener permiso para acceder en administracion</p>
            </div>
            <Form onSubmit={handleSubmit} className="form">

                {/* <Label>Usuario</Label> */}
                <Input 
                    type="email" 
                    name="email" 
                    placeholder="e-mail" 
                    className="input" 
                    onChange={handleLoginChange}/>
                
                {/* <Label>Contraseña</Label> */}
                <Input 
                    type="password"
                    name="password"
                    placeholder="Contraseña" 
                    className="input"
                    onChange={handleLoginChange}
                    />
                <input className="button" type="submit" value="Iniciar sesión" />
                {msg && <p className="error">{msg}</p>}
            </Form>
        </LoginContainer>
)
}

export default Login;

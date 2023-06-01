import React,{useState} from "react";
import { Modal, CloseButton, Form, Input, Label, Spinner } from "reactstrap";
import {LoginContainer} from "./LoginStyled";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../Redux/Actions/Admin";


const Login = () => {
    
    const [login, setLogin] = useState({});
   
    const dispatch = useDispatch()
  
    const handleLoginChange = (e) => {
        let {name, value} = e.target;
        setLogin({
            ...login,
            [name]: value
        })
       
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(login,"holaa")
        dispatch(loginUser(login))

        setLogin({})
        // Aquí puedes realizar la lógica de inicio de sesión, como enviar los datos al servidor
        // o validar las credenciales ingresadas.
        // Puedes agregar tu lógica personalizada aquí.
  
      // Restablecer el formulario
    };


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
                <button type="submit">Iniciar sesión</button>
            </Form>
        </LoginContainer>
)
}

export default Login;

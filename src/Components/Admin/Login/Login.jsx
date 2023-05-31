import React,{useState} from "react";
import { Modal, CloseButton, Form, Input, Label, Spinner } from "reactstrap";
import {LoginContainer} from "./LoginStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
   
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes realizar la lógica de inicio de sesión, como enviar los datos al servidor
      // o validar las credenciales ingresadas.
      // Puedes agregar tu lógica personalizada aquí.
  
      // Restablecer el formulario
      setUsername('');
      setPassword('');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return(
        <LoginContainer>
            <div>
                <p className="login">Iniciar Sesion</p>
                <p className="message">Debes tener permiso para acceder en administracion</p>
            </div>
            <Form onSubmit={handleSubmit}>

                <Label>Usuario</Label>
                <Input type="text" name="user" id="user" placeholder="usuario"  onChange={handleUsernameChange}/>
                
                <Label>Contraseña</Label>
                <Input type={showPassword ? "text" : "password"}
                    name="password" id="password" placeholder="Password" 
                    onChange={handlePasswordChange}
                />
                <div className="toggle-password" onClick={togglePasswordVisibility}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </div>

                <button type="submit">Iniciar sesión</button>
            </Form>
        </LoginContainer>
    )
}

export default Login;

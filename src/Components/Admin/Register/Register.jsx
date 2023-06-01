import React,{useState} from "react";
import { RegisterContainer } from "./RegisterStyled";
import { Form, Input, Label } from "reactstrap";


const Register = () => {


    return(
        <RegisterContainer>
            <div>
                <p className="register">Registrarse</p>
                <p className="message">Debes registrarte y esperar a que tu cuenta se autorizada. Se te envira un mail para notificarte</p>
            </div>
            <Form onSubmit={""} className="form">
                {/* <Label>Nombre</Label> */}
                <Input 
                    type="text" 
                    placeholder="nombre"
                    className="input"
                    />

                {/* <Label>Apellido</Label> */}
                <Input 
                    type="text" 
                    placeholder="apellido"
                    className="input"
                    />

                {/* <Label>E-mail</Label> */}
                <Input 
                    type="email" 
                    placeholder="e-mail"
                    className="input"
                    />

                {/* <Label>Contraseña</Label> */}
                <Input 
                    type="password" 
                    placeholder="contraseña"
                    className="input"
                    />

                {/* <Label>Confirmar contraseña</Label> */}
                <Input 
                    type="password" 
                    placeholder="confirmar contraseña"
                    className="input"
                    />

                <button>Registrarse</button>
            </Form>
        </RegisterContainer>
    )
}

export default Register;
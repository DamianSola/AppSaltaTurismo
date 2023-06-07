import React from "react";
import { ProfileContainer } from "./ProfileStyled";
import { useDispatch } from "react-redux";
import { signout,AllActionDates } from "../../../Redux/Actions/Admin";


const Profile = ({name, last_name, email}) => {
    // console.log(name, last_name, email)
    const dispatch = useDispatch()

    const HandleLogout = () => {
        dispatch(signout()) 
    }
    return (
        <ProfileContainer>
            <div>
            <p className="usuario">USUARIO</p>
            </div>
            <p>nombre: {name}</p>
            <p>apellido: {last_name}</p>
            <p>mail: {email}</p>
            <button onClick={HandleLogout} className="closeSesion">Cerrar sesion</button>
        </ProfileContainer>
    )
}

export default Profile;
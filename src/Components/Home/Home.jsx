import React, {useEffect} from "react";
import Footer from "../Footer/Footer";
import { HomeContainer, StyleLink } from "./StyleHome";
import Tours from "../Tours/Tours";
import Intro from "./Intro";
import Towns from "../Towns/Towns";
import CategoriesHome from "../Categories/Categories";
import "react-multi-carousel/lib/styles.css";


export default function Home(){

    // const dispatch = useDispatch()
    useEffect(() => {
        document.title = "Home";
    }, [])

    return(
        <HomeContainer>
            <Intro/>
            <h1>DESTACADOS</h1>
            <CategoriesHome/>
            <h1><StyleLink to='/tours' text-decoration="none">TOURS</StyleLink></h1>
            <Tours/>
            <h1>PUEBLOS DE SALTA</h1>
            <Towns/>
            <Footer/>
        </HomeContainer>
        
    )
}
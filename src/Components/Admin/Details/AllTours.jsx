import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllTours } from "../../../Redux/Actions/Index";
import { Button, Spinner, ButtonGroup } from "reactstrap";
import { SearchTours } from "../../Searchers/Search";
import { deleteTour } from "../../../Redux/Actions/Admin";
import { Link } from "react-router-dom";
import AddTour from "../Forms/Create/AddTour";
import { AutenticateRoutes, PageAuth } from "../Autenticate/Autenticate";


const Container = styled.div`
    display: block;
    min-height: 24rem;

    .controls{
        display: flex;
        margin: 20px auto;
    }
    .spinner{
        text-align: center;
        margin: 50px;
    }
    .allTours{
        display: flex;
        flex-wrap: wrap;
        margin: 20px auto;
    }
`

const CardTour = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin:15px;
    border: solid 1px grey;
    border-radius: 10px;

    .name{
        font-size: 20px;
        margin: auto;
    }
    .description{

    }
    .image{
        width: 100%;
    }
    .button_group{
        border: none;
    }
    .link{
        text-decoration: none;
        color: grey
    }
`



const AllTours = () => {

    const [open, setOpen] = useState(false)

    const Close = () => {
        setOpen(false)
    }

    const {allTours} = useSelector(s => s)
    console.log(allTours)

    const dispatch = useDispatch()

    const destroyTour = (id) => {
        dispatch(deleteTour(id)).then(res => alert(res))
    }

    useEffect(() => {
        dispatch(getAllTours())
    },[dispatch])
    const ValidateRoute = AutenticateRoutes()

    if(!ValidateRoute){
        return <PageAuth/>
    }
   
    return(
        <Container>
            <div className="controls">
                <SearchTours/>
                <Button onClick={() => setOpen(true)}>agregar tour</Button>
            </div>
            <AddTour open={open} close={Close}/>
            {!allTours && <div className="spinner"><Spinner/></div>}
            {allTours && allTours.length === 0 && <div className="spinner"><p>No hay resultados</p></div>}
            <div className="allTours">
                {allTours && allTours.map(e => {
                    return <CardTour>
                        <p className="name">{e.name}</p>
                        <img className="image" src={e.image[0]}/>
                        <p className="description">{e.description.slice(0,100)+" ver mas..."}</p>
                        <ButtonGroup  className="button_group">
                            <Button outline>
                            cambios
                            </Button>
                            <Button outline onClick={() => destroyTour(e.id)}>
                            borrar
                            </Button>
                            <Button outline>
                           <Link className="link" exact to={`/tours/${e.id}`}>ver detalles</Link>
                            </Button>
                        </ButtonGroup>
                    </CardTour>
                })}
            </div>
            
        </Container>
    )
}

export default AllTours; 
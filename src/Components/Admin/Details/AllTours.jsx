import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllTours } from "../../../Redux/Actions/Index";
import { Button, Spinner, ButtonGroup } from "reactstrap";
import { SearchTours } from "../../Searchers/Search";
import { deleteTour } from "../../../Redux/Actions/Admin";


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

`



const AllTours = () => {

    const [loading, setLoading] = useState(false)
    
    const {allTours} = useSelector(s => s)
    console.log(allTours)

    const dispatch = useDispatch()

    const destroyTour = (id) => {
        dispatch(deleteTour(id)).then(res => alert(res))
        // dispatch(getAllTours())

    }

    useEffect(() => {
        dispatch(getAllTours())
    },[dispatch])
   
    return(
        <Container>
            <div className="controls">
                <SearchTours/>
                <Button>agregar tour</Button>
            </div>
            {!allTours && <div className="spinner"><Spinner/></div>}
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
                            Right
                            </Button>
                        </ButtonGroup>
                    </CardTour>
                })}
            </div>
            
        </Container>
    )
}

export default AllTours; 
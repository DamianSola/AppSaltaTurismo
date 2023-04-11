import React from "react"
import { Modal, Button } from "reactstrap"


const ActivityDelete = (close,open, destroy) => {
    console.log(open)
    return(
        <Modal isOpen={open.open}>
            <p>Seguro que quieres eliminar esta actividad?</p>
            <Button onClick={() => destroy(open.id)}>Si, borrar</Button>
            <Button onClick={close(false)}>Cancelar</Button>
        </Modal>
    )
}

export default ActivityDelete;
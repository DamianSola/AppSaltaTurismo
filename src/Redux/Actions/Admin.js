import axios from "axios";

export const POST_ACTIVITY = 'POST_ACTIVITY'
export const PUT_ACTIVITY = 'PUT_ACTIVITY'
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const DELETE_SUBCATEGORY = 'DELETE_SUBCATEGORY'
export const POST_CATEGORY = 'POST_CATEGORY'
export const POSTSUBCATEGORY = 'POSTSUBCATEGORY'

const url =  'http://localhost:3001/'

//POST
export const postActivity = (data) => {
    return function (){
        return(
            axios.post(`${url}activities`, data)
        )
    }
}

export const postTour = () => {

}

export const postService = () => {

}

export const postCategory = () => {

}

export const postSubCategory = () => {

}
export const postTown = () => {
    
}



//put

export const putActivity = () => {

}

export const putService = () => {
    
}

export const putTour = () => {

}

export const putTown = () => {
    
}

//DELETE

export const deleteActivity = () => {
    
}

export const deleteCategory = () => {
    
}

export const deleteSubCategory = () => {
    
}

export const deleteService = () => {
    
}

export const deleteTour = () => {

}

export const deleteTown = () => {

} 






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
   return () => {
    axios.post(`${url}/activities`, data) 
   }
}

export const postTour = (data) => {
    return () => {
        axios.post(`${url}/tours`, data)
       }
}

export const postService = (data) => {
    return () => {
        axios.post(`${url}/services`,data)
       }
}

export const postCategory = (data) => {
    return () => {
        axios.post(`${url}/categories`,data)
    }

}

export const postSubCategory = (data) => {
    return () => {
        axios.post(`${url}/subCategories`,data)
    }
}
export const postTown = (data) => {
    return () => {
        axios.post(`${url}/towns`,data)
    }
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






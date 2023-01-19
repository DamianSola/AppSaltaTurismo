import axios from 'axios'

export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES'
export const GET_ONE_ACTIVITY  = 'GET_ONE_ACTIVITY'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_SUBCATEGORIES = 'GET_ALL_SUBCATEGORIES'
export const GET_ALL_TOURS = 'GET_ALL_TOURS'
export const GET_ALL_SERVICES = 'GET_ALL_SERVICES'
export const GET_ALL_TOWNS = 'GET_ALL_TOWNS'
export const ELEMENT = 'ELEMENT'


const URL = 'http://localhost:3001/'

export const getAllActivities = () => {
    return (dispatch) => {
        return axios(`${URL}activities/`)
        .then((res) => {
            dispatch({
                type: GET_ALL_ACTIVITIES ,
                payload: res.data
            })
        })
    }
}

export const getAllTours = () => {
    return (dispatch) => {
        return axios(`${URL}tours`)
        .then((res) => {
            dispatch({
                type: GET_ALL_TOURS,
                payload: res.data
            })
        })
    }
}

export const getAllService = () => {
    return (dispatch) => {
        return axios(`${URL}service`)
        .then((res) => {
            dispatch({
                type: GET_ALL_SERVICES,
                payload: res.data
            })
        })
    }
}

export const getAllCategories = () => {
    return(dispatch) => {
        return axios(`${URL}subcategories`)
        .then((res) => {
            dispatch({
                type: GET_ALL_CATEGORIES,
                payload: res.data
            })
        })
    }
}

export const getAllSubCategories = () => {
    return(dispatch) => {
        return axios(`${URL}subcategories`)
        .then((res) => {
            dispatch({
                type: GET_ALL_SUBCATEGORIES,
                payload: res.data
            })
        })
    }
}

export const getAllTowns = () => {
    return(dispatch) => {
        return axios(`${URL}towns`)
        .then((res) => {
            dispatch({
                type: GET_ALL_TOWNS,
                payload: res.data
            })
        })
    }
}

export const likeActivity = (activity) => {
    return () => {
        axios.put(`${URL}activities/likes/${activity}`,null)
    }     
}

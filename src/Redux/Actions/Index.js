import axios from 'axios'

export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES'
export const GET_ONE_ACTIVITY  = 'GET_ONE_ACTIVITY'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_SUBCATEGORIES = 'GET_ALL_SUBCATEGORIES'
export const GET_ALL_TOURS = 'GET_ALL_TOURS'

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
    }
}


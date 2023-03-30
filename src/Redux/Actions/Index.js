import axios from 'axios'

export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES'
export const GET_ONE_ACTIVITY  = 'GET_ONE_ACTIVITY'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_SUBCATEGORIES = 'GET_ALL_SUBCATEGORIES'
export const GET_ONE_SUBCATEGORY = 'GET_ONE_SUBCATEGORY'
export const GET_ALL_TOURS = 'GET_ALL_TOURS'
export const GET_ALL_SERVICES = 'GET_ALL_SERVICES'
export const GET_ALL_SERVICES_TYPES = 'GET_ALL_SERVICES_TYPES'
export const GET_ONE_SERVICES_TYPES = 'GET_ONE_SERVICES_TYPES'
export const GET_ALL_TOWNS = 'GET_ALL_TOWNS'
export const ELEMENT = 'ELEMENT'
export const GET_ONE_CATEGORY = "GET_ONE_CATEGORY"
export const GET_ONE_TOWN = 'GET_ONE_TOWN'
export const GET_ONE_TOUR = 'GET_ALL_TOUR'
export const ACTIVITY_NAME = "ACTIVITY_NAME"
export const TOWN_NAME = "TOWN_NAME"


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

export const getOneActivity = (id) => {
    return (dispatch) => {
        return axios(`${URL}activities/${id}`)
        .then((res) => {
            dispatch({
                type: GET_ONE_ACTIVITY ,
                payload: res.data
            })
        })
    }
}

export const getActivityByName = (name) => {
    return(dispatch) => {
        return axios(`${URL}activities?name=${name}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: ACTIVITY_NAME,
                payload: res.data
            })
        }).catch(res => {
            console.log(res.response.status)
            dispatch({
                type: ACTIVITY_NAME,
                payload: res.response.status
            })}
        )
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

export const getOneTour = (id) => {
    return (dispatch) => {
        return axios(`${URL}tours/${id}`)
        .then((res) => {
            dispatch({
                type: GET_ONE_TOUR,
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

export const deleteServiceType = () => {
return {type: "DELETE_TYPES"}
}
export const AllServiceType = () => {
    return (dispatch) => {
        return axios(`${URL}serviceTypes`)
        .then((res) => {
            dispatch({
                type: GET_ALL_SERVICES_TYPES,
                payload: res.data
            })
        })
    }
}

export const getOneServiceType = (id) => {
    return (dispatch) => {
        return axios.get(`${URL}serviceTypes/${id}`)
        .then((res) => {
            dispatch({
                type: GET_ONE_SERVICES_TYPES,
                payload: res.data
            })
        })
    }
}

export const getAllCategories = () => {
    return(dispatch) => {
        return axios(`${URL}categories`)
        .then((res) => {
            dispatch({
                type: GET_ALL_CATEGORIES,
                payload: res.data
            })
        })
    }
}

export const getOneCategory = (id) => {
    return(dispatch) => {
        return axios.get(`${URL}categories/${id}`)
        .then((res) => {
            dispatch({
                type: GET_ONE_CATEGORY,
                payload: res.data
            })
        })
    }
}

export const getAllSubCategories = () => {
    return(dispatch) => {
        return axios.get(`${URL}subcategories`)
        .then((res) => {
            dispatch({
                type: GET_ALL_SUBCATEGORIES,
                payload: res.data
            })
        })
    }
}
export const getOneSubCategories = (id) => {
    return(dispatch) => {
        return axios.get(`${URL}subcategories/${id}`)
        .then((res) => {
            dispatch({
                type: GET_ONE_SUBCATEGORY,
                payload: res.data
            })
        })
    }
}

// TOWNS

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

export const getTownByName = (name) => {
    return(dispatch) => {
        return axios(`${URL}towns?name=${name}`)
        .then(res => {
            dispatch({
                type: TOWN_NAME,
                payload: res.data
            })
        }).catch(res => {
            console.log(res.response.status)
            dispatch({
                type: TOWN_NAME,
                payload: res.response.status
            })}
        )
    }
}

export const getOneTown = (id) => {
    return(dispatch) => {
        return axios(`${URL}towns/${id}`)
        .then((res) => {
            dispatch({
                type: GET_ONE_TOWN,
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

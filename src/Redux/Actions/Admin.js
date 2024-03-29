import axios from "axios";
// import { getAllActivities,
//     getAllTours,
//     getAllService,
//     getAllCategories,
//     getAllSubCategories,
//     getAllTowns } from './Index'

export const POST_ACTIVITY = 'POST_ACTIVITY'
export const PUT_ACTIVITY = 'PUT_ACTIVITY'
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const DELETE_SUBCATEGORY = 'DELETE_SUBCATEGORY'
export const POST_CATEGORY = 'POST_CATEGORY'
export const POSTSUBCATEGORY = 'POSTSUBCATEGORY'
export const ALL_DATE = "ALL_DATE"
export const All_USERS = "All_USERS"
export const LOGIN_USER = "LOGIN_USER"
export const USER_SIGNOUT = "USER_SIGNOUT"

// const url =  'http://localhost:3001'
const url = "https://saltatourapi.onrender.com"
// console.log(url)
// export const SomeThingDate = (date) => {
    
// }

//POST
export const postActivity = (data) => {
   return () => {
    axios.post(`${url}/activities`, data)
    .then(res => {
        return res.data
    }) 
   }
}

export const postTour = (data) => {
    return () => {
        axios.post(`${url}/tours`, data)
        .then(res => {
            return res.data
        }) 
    }
}

// export const postService = (data) => {
//     return () => {
//         axios.post(`${url}/services`,data)
//        }
// }
export const postService = (data) => {
    return () => {
        axios.post(`${url}/services`,data)
        .then(res => {
            return res.data
        }) 
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
        .then(res => {
            return res.data
        }) 
    }
}

export const AllActionDates = () => {
    return (dispatch) => {
        return axios(`${url}/admin`)
        .then(res => {
            dispatch({
                type: ALL_DATE,
                payload: res.data
            })
        })
    }
}

export const postServiType = (data) => {
    return () => {
        axios.post(`${url}/serviceTypes`,data)
        .then(res => {
            return res.data
        }) 
    }
}

export const postWhatever = (data, route) => {
    return () => {
        axios.post(`${url}/${route}`,data)
        .then(res => {
            return res.data
        }) 
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

export const deleteActivity = (data) => async () => {
    // console.log(data)
    return (
        await axios.delete(`${url}/activities/`+data)
        .then(res => {
            if(res.status === 200){
                return res.data.msg
            }else return "error" + res.status;
        })
        )
       
}

export const deleteCategory = (data) => () => {
    return (
        axios.delete(`${url}/categories/`+data)
       .then(res => {
           if(res.status === 200){
               return  res.data.msg;
           }else return "error" + res.status;
       })
   )
}

export const deleteSubCategory = () => {
    
}

export const deleteService = () => {
    
}

export const delteServiceType = (data) => () => {
    return (
        axios.delete(`${url}/serviceTypes/`+data)
       .then(res => {
           if(res.status === 200){
               return  res.data.msg;
           }else return "error" + res.status;
       })
   )
}

export const deleteTour =  (data) => () => {
    return (
         axios.delete(`${url}/tours/`+data)
        .then(res => {
            if(res.status === 200){
                return res.data.msg
            }else return "error" + res.status;
        })
    )
}

export const deleteWhatever =  (data, route) => () => {
    // console.log(data,route)
    return (
         axios.delete(`${url}/${route}/`+data)
        .then(res => {
            if(res.status === 200){
                return res.data.msg
            }else return "error" + res.status;
        })
    )
}

export const deleteTown = () => {
    
} 


export const getUsers = () => {
    return (dispatch) => {
        return axios(`${url}/users/`)
        .then((res) => {
            dispatch({
                type: All_USERS ,
                payload: res.data
            })
        })
    }
}
export const signin = (data) => {
    return (dispatch) => {
        return axios.post(`${url}/users/login`,data)
        .then(res => {
            dispatch({
                type: LOGIN_USER, 
                payload: res.data
            })}
        )
    }
}

export const signout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({type: USER_SIGNOUT});
}
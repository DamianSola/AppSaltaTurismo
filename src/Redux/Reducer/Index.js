
import { GET_ALL_ACTIVITIES, 
    GET_ALL_TOURS, 
    GET_ALL_TOWNS, 
    GET_ALL_SERVICES, 
    GET_ALL_SUBCATEGORIES, 
    GET_ALL_CATEGORIES,
    GET_ONE_ACTIVITY,
    ELEMENT
} from "../Actions/Index";

import {ALL_DATE} from "../Actions/Admin"

const initialState = {
    
}

export default function RootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload.rows,
            }
        case GET_ALL_TOURS:
            return{
                ...state,
                allTours: action.payload.rows,
            }
        case GET_ALL_SUBCATEGORIES:
            return{
                ...state,
                allSubCategories: action.payload
            }
        case GET_ALL_CATEGORIES:
            return{
                ...state,
                allCategories: action.payload.rows
            }
        case GET_ALL_TOWNS:
            return{
                ...state,
                allTowns: action.payload.rows
            }
        case GET_ALL_SERVICES:
            return{
                ...state,
                allServices: action.payload
            }
        case ALL_DATE:
            return{
                ...state,
                allDates: action.payload
            }
        case ELEMENT:
            return{
                ...state,
                element: action.payload
            }
        default: return state;
    }
}

import { GET_ALL_ACTIVITIES, 
    GET_ALL_TOURS, GET_ALL_TOWNS, GET_ALL_SERVICES, GET_ALL_SUBCATEGORIES, GET_ALL_CATEGORIES,
    GET_ONE_ACTIVITY, GET_ONE_CATEGORY, GET_ONE_SUBCATEGORY, ELEMENT, GET_ONE_TOWN, GET_ONE_TOUR, 
    GET_ALL_SERVICES_TYPES, GET_ONE_SERVICES_TYPES} from "../Actions/Index";

import {ALL_DATE} from "../Actions/Admin"

const initialState = {
    oneCategry:{},
    oneActivity: {},
    oneSubCategory:{},
    OneTown:{},
    oneTour:{},
    oneServiceType:{}
}

export default function RootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload.rows,
            }
        case GET_ONE_ACTIVITY:
            return {
                ...state,
                oneActivity: action.payload
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
        case GET_ONE_TOWN:
            return{
                ...state,
                OneTown: action.payload
            }
        case GET_ALL_SERVICES:
            return{
                ...state,
                allServices: action.payload.rows
            }
        case GET_ALL_SERVICES_TYPES:
            return{
                ...state,
                allServiceTypes: action.payload.rows
            }
        case "DELETE_TYPES":
            return{
                ...state,
                oneServiceType: {}
            }
        case GET_ONE_SERVICES_TYPES:
            return{
                ...state,
                oneServiceType: action.payload
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
        case GET_ONE_CATEGORY: 
            return {
                ...state,
                oneCategry: action.payload
            }
        case GET_ONE_SUBCATEGORY:
            return {
                ...state,
                oneSubCategory: action.payload
            }
        case GET_ONE_TOUR: 
            return{
                ...state,
                oneTour: action.payload
            }
        default: return state;
    }
}
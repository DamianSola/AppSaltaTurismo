
import { GET_ALL_ACTIVITIES, 
    GET_ALL_TOURS, 
    GET_ALL_TOWNS, 
    GET_ALL_SERVICES, 
    GET_ALL_SUBCATEGORIES, 
    GET_ALL_CATEGORIES,
    GET_ONE_ACTIVITY } from "../Actions/Index";

const initialState = {
    allActivities: []
}

export default function RootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload
            }
        case GET_ALL_TOURS:
            return{
                ...state,
                allTours: action.payload
            }
        case GET_ALL_SUBCATEGORIES:
            return{
                ...state,
                allSubCategories: action.payload
            }
        case GET_ALL_CATEGORIES:
            return{
                ...state,
                allCategories: action.payload
            }
        case GET_ALL_TOWNS:
            return{
                ...state,
                allTowns: action.payload
            }
        default: return state;
    }
}
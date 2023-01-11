
import { GET_ALL_ACTIVITIES, GET_ALL_TOURS } from "../Actions/Index";

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
        default: return state;
    }
}
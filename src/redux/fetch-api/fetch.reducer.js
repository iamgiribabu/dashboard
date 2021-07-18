import { FETCH_RESULTS , FETCH_FAILURE, FETCH_DAILY_RESULT, FETCH_COUNTRIES } from './fetch.types';

const IntialState = {
    data : [],
    dailyData : [],
    countries : [],
    status : null
    
}

const fetchReducer = (state = IntialState, action) => {
    switch(action.type) {
        case FETCH_RESULTS :
            return {
                ...state,
                data : action.payload
            }
        case FETCH_FAILURE :
            return {
                status : action.payload
            }
        case FETCH_DAILY_RESULT : 
            return {
                ...state,
                dailyData : action.payload
            }
        case FETCH_COUNTRIES :
            return {
                ...state,
                countries : action.payload
            }
        default :
            return state;

    }
}


export default fetchReducer
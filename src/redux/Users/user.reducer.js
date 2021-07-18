import { GET_USER } from "./user.types";

const IntialState = {
    users : [],
    
}

const userReducer = (state = IntialState, action) => {
    switch(action.type){
        case GET_USER : 
            return {
                ...state,
                users : action.payload,
                
            }
        default :
            return {
                ...state,
            }
    }
}

export default userReducer;
import { GET_USER } from "./user.types";
import{ firestore }from '../../firebase/firebase'

export const getuser = () => {
    const ref = firestore.collection('registeredUser');
    return dispatch => {
        ref.get().then(item => {
                const usersData = item.docs.map(doc => doc.data())
                dispatch({
                    type : GET_USER,
                    payload :usersData 
                })
            }
            
        )
    }
    
}

import { toast } from 'react-toastify';
import axios from 'axios';
import { SIGN_IN } from '../Constants';



// export const SIGN_IN = 'SIGN_IN';
// export const SIGN_UP = 'SIGN_UP';





export function signin(data) {
    return (dispatch) => {
        axios.post(window.baseURL + "/user/login", data)
            .then(() => {

                toast.success("Successfully Login");
                dispatch({
                    type: SIGN_IN,
                    payload: data
                });
            }).catch(() => {
                toast.error("Error Occored! Please Try Again Later");
            })
    }
}


export function SignUP(data) {
    return (dispatch) => {
        axios.post(window.baseURL + "/user/signup", data)
            .then(() => {

                toast.success("Your account is created Successfully ");
                dispatch({
                    type: SIGN_IN,
                    payload: data
                });
            }).catch(() => {
                toast.error("Error Occored! Please Try Again Later");
            })
    }
}

import { SIGN_IN } from '../actions';


const INITIAL_STATE = {
    LoginDetail: [],
    UserInfo: [],
};

function AllReducers(state = INITIAL_STATE, action) {
    switch (action.type) {

        case SIGN_IN:
            {
                const data = {
                    id: action.payload.id,
                    username: action.payload.username,
                    password: action.payload.password
                }

                return {
                    ...state,
                    LoginDetail: data
                }
            }


        default:
            return state;
    }
}

export default AllReducers;
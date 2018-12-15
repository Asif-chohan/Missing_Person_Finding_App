import { SIGN_IN, CONTACT_US } from '../Constants';


const INITIAL_STATE = {
    LoginDetail: [],
    UserInfo: [],
    ContactUs: [],
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

        case CONTACT_US:
            {
                const data = {
                    username: action.payload.username,
                    email: action.payload.email,
                    blogTitle: action.payload.blogTitle,
                    fileUpload: action.payload.fileUpload,
                    imagePreviewURL: action.payload.imagePreviewURL,

                }
                return {
                    ...state,
                    ContactUs: data
                }

            }






        default:
            return state;
    }
}

export default AllReducers;
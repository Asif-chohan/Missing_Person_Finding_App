import { SIGN_IN, CONTACT_US, ADD_PERSON } from '../Constants';


const INITIAL_STATE = {
    LoginDetail: {},
    AddPerson: [],
    ContactUs: {},
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

        case ADD_PERSON:
            {
                var list = state.AddPerson;
                var newPersons = list.concat([action.payload]);
                return {
                    ...state,
                    AddPerson: newPersons
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
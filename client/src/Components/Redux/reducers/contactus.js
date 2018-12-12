const CONTACT_US = 'CONTACT_US';


const contactUs = (state = { response: '' }, action) => {
    
    let { type, payload } = action;
    switch (type) {
        case CONTACT_US:
           
            return { response: payload }
        default:
            return { response: state.response }
    }
}

export default contactUs;

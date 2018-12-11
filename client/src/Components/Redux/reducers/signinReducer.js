

let init = {
    isSignedIn:false
}
const singin = (state = init, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'SIGN_IN':
            return { isSignedIn: payload }
            
        default:
            return { isSignedIn: state.isSignedIn }
    }
}


export default singin;
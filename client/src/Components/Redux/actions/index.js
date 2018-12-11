import axios from 'axios';

const siginAction = (data) => dispatch => {
    axios
        .post( '/signin',data)
        .then((res) => {
            dispatch(
                () => {
                    return {
                        type: 'SING_IN',
                        payload: res
                    }
                }
            ) 
        })
        .catch(err=>{
            console.log(err)
        })
}


export { siginAction }
export const UPDATE_TODO = 'UPDATE_TODO';

export function updateFunction(data) {
    // alert("alert from UPDATE action");
    // console.log('Update actiton data: ', data)
    return {
        type: UPDATE_TODO,
        payload: data
    }
}
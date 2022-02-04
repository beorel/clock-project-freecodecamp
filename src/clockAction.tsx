export const updatedirectionAction = (payloadvalue: string) => {
    return {
        type: 'UPDATE_LENGTH',
        payload: payloadvalue
    }
}
export const reduceCountdownAction = (payloadvalue: string) => {
    return {
        type: 'COUNTDOWN_VALUE',
        payload: payloadvalue
    } 
}

export const playOrPuaseAction = (payloadvalue: string) => {
    return {
        type: 'PLAYORPAUSE_VALUE',
        payload: payloadvalue
    } 
}
//export default updatedirectionAction;
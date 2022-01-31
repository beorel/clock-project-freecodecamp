import { Reducer } from "redux"

const initialState: appState = {
    breakLengthValue: 5,
    sessionLengthValue: 25,
    timerValue: '' + 25 + 0 ,
};

const clockReducer: Reducer<appState, updatedirectionAction> = (state = initialState, action: updatedirectionAction) => {
    switch (action.type) {
        case 'UPDATE_LENGTH':
            console.log(action.payload)
            console.log(state.breakLengthValue)
            console.log(state.sessionLengthValue)
            //console.log(state.breakLengthValue++)
            if (action.payload == "Break-up") {
                return {
                    ...state,
                    breakLengthValue: state.breakLengthValue + 1,
                }
            } 
            
            if (action.payload == "Break-down")  {
                return {
                    ...state,
                    breakLengthValue: state.breakLengthValue - 1,
                }
            }
            if (action.payload == "Session-up") {
                return {
                    ...state,
                    sessionLengthValue: state.sessionLengthValue + 1,
                    timerValue: state.sessionLengthValue,
                }
            } 
            
            if (action.payload == "Session-down")  {
                return {
                    ...state,
                    sessionLengthValue: state.sessionLengthValue - 1,
                    timerValue: state.sessionLengthValue,
                }
            }
            if (action.payload == "play")  {
                let timer = state.timerValue - 0.1
                //timer.play()
                return {
                    ...state,
                }
            }
            return {
                ...state,
               // breakLengthValue: state.breakLengthValue,
            }
        default:
            return state;
    }
};
export default clockReducer;    
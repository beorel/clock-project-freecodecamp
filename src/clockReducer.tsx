import { Reducer } from "redux"


const initialState: appState = {
    breakLengthValue: "5",
    sessionLengthValue: "25",
    timerValue: "25" + ":" + "00",
    booleanTimeState: ""
};

const clockReducer: Reducer<appState, updatedirectionAction> = (state = initialState, action: updatedirectionAction) => {
    switch (action.type) {
        case 'UPDATE_LENGTH':
            console.log(action.payload)
            console.log(state.breakLengthValue)
            console.log(state.sessionLengthValue)
            if (action.payload == "Break-up") {
                return {
                    ...state,
                    breakLengthValue: (parseInt(state.breakLengthValue) + 1).toString(),
                }
            }
            if (action.payload == "Break-down") {
                return {
                    ...state,
                    breakLengthValue: (parseInt(state.breakLengthValue) - 1).toString() // - 1,
                }
            }
            if (action.payload == "Session-up") {
                return {
                    ...state,
                    sessionLengthValue: (parseInt(state.sessionLengthValue) + 1).toString(),
                    timerValue: state.sessionLengthValue,
                }
            }
            if (action.payload == "Session-down") {
                return {
                    ...state,
                    sessionLengthValue: (parseInt(state.sessionLengthValue) - 1).toString(), //- 1,
                    timerValue: state.sessionLengthValue,
                }
            }
            return {
                ...state,
            }
        case 'COUNTDOWN_VALUE':
            console.log(action.payload)
            return {
                ...state,
                timerValue: action.payload,
                // booleanTimeState : action.payload
            }
        case 'PLAYORPAUSE_VALUE':
            console.log(action.payload)
            return {
                ...state,
                booleanTimeState: action.payload
            }

        // var counter = 0;
        // var timeleft = parseInt(state.timerValue) * 60;
        // console.log(timeleft)
        // const convertSeconds = (s: number) => {
        //     var min = Math.floor(s / 60);
        //     var sec = s % 60;
        //     return (min.toString()).padStart(2, "0") + ':' + (sec.toString()).padStart(2, "0");
        // }
        // //var interval = setInterval(timeIt, 1000);
        // const timeIt = () => {
        //     counter++;
        //     console.log(counter)
        //     console.log(timeleft)
        //     // if (counter == timeleft) {
        //     //     console.log("hi")
        //     //     clearInterval(interval)
        //     //     //counter = 0;
        //     // }

        //     return {
        //         ...state,
        //         timerValue: (convertSeconds(timeleft - counter)).toString(),
        //     }
        // }
        // setInterval(timeIt, 1000)
        // console.log(state.timerValue)



        // if (action.payload == "play") {
        //     // let timer = state.timerValue - 0.1
        //     //timer.play()
        //     //setInterval(showTimer, 1000)
        //     //setup()

        // }
        // return {
        //     ...state,
        //    timerValue: state.timerValue,
        // }
        default:
            return state;
    }
};


export default clockReducer;    
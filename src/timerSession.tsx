import { useSelector } from 'react-redux'
import { RootState } from './index'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { reduceCountdownAction } from './clockAction';
//{dispatchTime}: ITimerSessionType
const TimerSession = () => {
    const textareaSelector = useSelector((state: RootState) => state.timerValue)
    const dispatch = useDispatch();


    // this.setState(state => ({
    //     seconds: state.seconds + 1
    // }));
    //const dispatch = useDispatch(reduceCountdownAction(dispatchTime))
    //let dispatchTime = (convertSeconds(timeleft - counter)).toString()
   
    

   
    //let dispatchTime = (convertSeconds(timeleft - counter)).toString()

    return (
        <div>
            {/* <textarea value={textareaSelector}> //onChange={() => dispatch(reduceCountdownAction({textareaSelector}))} */}
            <label>
                {textareaSelector}
                
            </label>
        </div>
    )
}
export default TimerSession;
import { useDispatch } from 'react-redux';
import { reduceCountdownAction, playOrPuaseAction } from './clockAction';
import { useSelector } from 'react-redux'
import { RootState } from './index'
import React, { useState, useEffect } from 'react'

const PausePlay = ({ pauseOrPlay }: IPauseOrPlayLengthType) => {
    const dispatch = useDispatch();

    const stateTime = useSelector((state: RootState) => state.sessionLengthValue)
    const isPlaying = useSelector((state: RootState) => state.booleanTimeState)

    var counter = 0;
    var timeleft = parseInt(stateTime) * 60;
    const convertSeconds = (s: number) => {
        var min = Math.floor(s / 60);
        var sec = s % 60;
        return (min.toString()).padStart(2, "0") + ':' + (sec.toString()).padStart(2, "0");
    }
  
    const tick = (playArgumentFromState: string) => {
        playArgumentFromState = isPlaying;
        //console.log("If/isplaying =" + isPlaying)
        console.log("playArgu =" + playArgumentFromState)
        if (playArgumentFromState == "play") {
            counter++;
            let dispatchTime = (convertSeconds(timeleft - counter)).toString()
            dispatch(reduceCountdownAction(dispatchTime))
        }
    }
    const actionAndSetInterval = () => {
        let dis = dispatch(playOrPuaseAction(pauseOrPlay))
        console.log(dis)
        let interval: any = null;
        if (isPlaying == "play"){
            interval = setInterval((isPlaying) => tick(isPlaying), 3000)
            console.log("isplayingOutsideIf =" + isPlaying)
            console.log("now playing")
        }
        else {
            clearInterval(interval)
            console.log("pause is activated")
        }
    }
    return (
        <div>
            {/* onClick={() => dispatch(reduceCountdownAction(pauseOrPlay))} */}
            {/* <button onClick={() =>setInterval(() => tick(), 1000) }> */}
            <button onClick={() => actionAndSetInterval()}>
                {pauseOrPlay}
            </button>
        </div>
    )
}

export default PausePlay;
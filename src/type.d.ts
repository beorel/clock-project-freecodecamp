interface IBreakLengthType {
    direction: string;
}

interface ISessionLengthType {
    direction: string;
}
interface IPauseOrPlayLengthType {
    pauseOrPlay: string;
}

interface ITimerSessionType {
    dispatchTime: string;
}

interface IsPlayingType {
    playArgumentFromState: string;
}
type updatedirectionAction = {
    type: string,
    payload: string,
}
type reduceCountdownAction = {
    type: string,
    payload: string,
}
type playOrPuaseAction = {
    type: string,
    payload: string,
}
type appState = {
    breakLengthValue: string,
    sessionLengthValue: string,
    timerValue: string,
    booleanTimeState : string
}
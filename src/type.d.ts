interface IBreakLengthType {
    direction: string;
}

interface ISessionLengthType {
    direction: string;
}
interface IPauseOrPlayLengthType {
    pauseOrPlay: string;
}


type updatedirectionAction = {
    type: string,
    payload: string,
}

type appState = {
    breakLengthValue: number,
    sessionLengthValue: number,
    timerValue: number,
  
}
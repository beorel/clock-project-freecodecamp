import { useSelector } from 'react-redux'
import { RootState } from './index'

const TimerSession = () => {
    const textareaSelector = useSelector((state: RootState) => state.timerValue)

    return (
      <div>
          <textarea value={textareaSelector}>
          </textarea> 
      </div>
      )
}

export default TimerSession;
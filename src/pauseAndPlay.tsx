import { useDispatch } from 'react-redux';
import updatedirectionAction from './clockAction';

const PausePlay = ({ pauseOrPlay }: IPauseOrPlayLengthType) => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(updatedirectionAction(pauseOrPlay))}>
                {pauseOrPlay} 
            </button>
        </div>
    )
}

export default PausePlay;
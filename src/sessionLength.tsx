import { useDispatch } from 'react-redux';
import updatedirectionAction from './clockAction';

const SessionLength = ({ direction }: ISessionLengthType) => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(updatedirectionAction(direction))}>
                {direction} 
            </button>
        </div>
    )
}

export default SessionLength;
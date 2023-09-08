import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {todosActions} from '../store/todos/todos.slice';

const AllActions = {
    ...todosActions
}

const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(AllActions, dispatch)
}

export default useActions

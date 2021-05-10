import { createStore, combineReducers } from 'redux';
import employeeReducer from './reducers/employeeReducer';

const rootReducer = combineReducers({
    employee: employeeReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
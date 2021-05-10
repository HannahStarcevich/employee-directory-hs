const initialState = {
    employee: []
};

const employeeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_EMPLOYEE':
            return {
                ...action.payload
            }
        default: 
        return state
    }
};

export default employeeReducer;
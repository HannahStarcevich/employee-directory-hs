const initialState = {
    title: '',
    firstName: '',
    lastName: '', 
    city: '', 
    state: '', 
    coutnry: '', 
    lat: '', 
    lng: '', 
    email: '', 
    phone: '', 
    age: '', 
    tenure: '', 
    picture: '', 

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
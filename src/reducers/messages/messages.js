const INIT_STATE = [];

const messages = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
                return [
                    ...state,
                    action.message
                ];
        default:
            return state;
    }
};

export default messages;
const INIT_STATE = {
    playerReady: false,
    url: null,
}

const videoState = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_URL':
            return{
                ...state,
                url: action.url
            };
        case 'CHANGE_PROFILEIMAGE':
            return {
                ...state,
                profileImage: action.profileImage
            };
        default:
            return state;
    }
};

export default videoState;
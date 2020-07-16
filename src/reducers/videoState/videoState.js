const INIT_STATE = {
    playerReady: false,
    playing: true,
    url: null,
    played: 0,
    playedSeconds: 0,
    seekTo: false,
    iRequestedState: false,
    pausedByViewer: false
}

const videoState = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_STATE':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default videoState;
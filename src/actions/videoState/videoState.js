import { updateGroupVideoState } from '../../utils/signalR';

export const updateVideoState = (newState) => ({
    type: 'UPDATE_STATE',
    payload: newState
});

export const updateVideoStateAsync = (newState) => {
    return async (dispatch) => {
        await updateGroupVideoState(newState);
        dispatch(updateVideoState(newState));
    }
}
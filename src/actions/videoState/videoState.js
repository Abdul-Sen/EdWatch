import { updateGroupVideoState } from '../../utils/signalR';

export const updateState = (newState) => ({
    type: 'UPDATE_STATE',
    payload: newState
});

export const updateStateAsync = (newState) => {
    return async (dispatch) => {
        await updateGroupVideoState(newState);
        dispatch(updateState(newState));
    }
}
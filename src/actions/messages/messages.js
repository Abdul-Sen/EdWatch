import {SendNewGroupMessage} from '../../api/signalR';

export const addMessage = (message) => ({
    type: 'ADD_MESSAGE',
    message
});

export const addMessageAsync = (message)=>{
    
    return async (dispatch) => {
        //do async stuff
        SendNewGroupMessage(message);
        
        //finish it up by calling a normal/sync method
        dispatch(addMessage(message));
    };
}
// import {HubConnectionBuilder} from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../actions/messages';
import globalStore from '../../store/store';
const connect = new signalR.HubConnectionBuilder().withUrl("http://localhost:8080/messagehub").build();

connect.on('NewMessage', (message) => {
    console.log(`New message function called from server`);
    console.log(message);
    globalStore.dispatch(addMessage(message));
});

/**
 * Starts connecting to the signlar hub
 */
export const startConnection = async () => {
    try {
        await connect.start();
        console.log(`connected`);
        console.log(`---------IMPORTANT---------`);
        console.log(connect);
        console.log(connect.connectionId);
    }
    catch (err) {
        console.log(`Failed to connect to the backend...`);
        console.log(err);
    }
}

/**
 * Gets called by server to deliver new message payload.
 * Function stores state to the global store
 */
connect.on('ReciveNewMessage', (message)=>{
    console.log(JSON.parse(message));
    globalStore.dispatch(addMessage(JSON.parse(message)));
})

/**
 * 
 * @param {JSON} payload message object that needs to be sent to the server to be emitted to rest of the users
 */
export const sendNewMessageAsync = async (payload) =>{

   let result = await connect.invoke('NewMessageToAll', JSON.stringify(payload));
   console.log(result);
}

connect.on("RecieveMessage", (message) => {
    console.log(`NEW MESSAGGE FROM SERVER`);
    console.log(message);
});
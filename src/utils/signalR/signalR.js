// import {HubConnectionBuilder} from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';
import { addMessage } from '../../actions/messages';
import {updateVideoState} from '../../actions/videoState';
import globalStore from '../../store/store';
import { v4 as uuidv4 } from 'uuid';

console.log(`||${process.env.REACT_APP_API_URL}||`);
const connect = new signalR.HubConnectionBuilder().withUrl(process.env.REACT_APP_API_URL).build();
var groupID = uuidv4();

let host = true;

/**
 * 
 * @param {boolean} val sets value for host and returns the host
 */
export const setIsHost = (val)=>{
    host = val;
}

export const getIsHost =()=>{
    return host;
}
export const getGroupId = ()=> {
    return groupID;
}

export const setNewGroupID = (id)=>{
    groupID = id;
}

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
        await connect.invoke("CreateGroup", groupID);
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

export const joinGroup = async (groupName)=>{
    const state = globalStore.getState();
    try{
        await connect.invoke("AddCurrentUserToGroup",groupName ,state.userProfile.name);
        console.log(`You have now joined someone elses group`);
        setIsHost(false);
        setNewGroupID(groupName);
    }
    catch(Err)
    {
        console.log(`Failed to join someone elses group`);
        console.log(Err);
    }
}

export const SendNewGroupMessage = async (message)=>{
    try{
        let id = getGroupId();
        await connect.invoke("NewGroupMessage", JSON.stringify(message), id);
       console.log(`message sent to the group`);
    }
    catch(err)
    {
        console.log(`failed to send message to group`);
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
 * @param {JSON} payload message object that needs to be sent to the server to be emitted to ALL of the users
 */
export const sendNewMessageAsync = async (payload) =>{

   let result = await connect.invoke('NewMessageToAll', JSON.stringify(payload));
   console.log(result);
}

/**
 * Alerts other users in group when a new user joins the group
 */
connect.on("GroupAlert", (alert)=>{
    let message ={
       image: process.env.PUBLIC_URL + '/avatars/bot.png',
       message: alert,
       name: 'Bot'
    }
    globalStore.dispatch(addMessage(message));
});

export const sendAlert = async (message)=>{
    let id =getGroupId();
    try{
       await connect.invoke("NewGroupAlert",id, message);
    }
    catch(err)
    {
        console.log(err);
    }
}

// ------------------- VIDEO METHODS -------------------
/**
 * Called by server when new user joins to get the host video from client
 */
connect.on("GetHostVideo",async ()=>{

    let state = globalStore.getState();
    let url = state.videoState.url;
    if(getIsHost() == true)
    {
        try{
            let id = getGroupId();
           await connect.invoke("UpdateGroupVideoState",JSON.stringify({...state.videoState, seekTo: true}), id);
        }
        catch(err)
        {
            console.log(`failed to set group video for all people`);
        }
    }
});

/**
 * Sets new video for users who do not have it set currently
 */
connect.on("LoadGroupVideo", (url)=>{
    let state = globalStore.getState();
    if(state.videoState.url != url)
    {
        globalStore.dispatch(updateVideoState({
            ...state,
            url: url
        }));
    }
});

export const updateGroupVideoState = async (state)=>{
    if(getIsHost())
    {
        let id = getGroupId();
        try{
            connect.invoke("UpdateGroupVideoState", JSON.stringify(state), id);
        }
        catch(err) {
            console.log(err);
        }
    }
}
connect.on("NewVideoState", (vidState)=>{
    globalStore.dispatch(updateVideoState(JSON.parse(vidState)));
});
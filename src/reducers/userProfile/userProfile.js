
import { v4 as uuidv4 } from 'uuid';

const adjectives = [
"Rational",
"Reliable",
"Reserved",
"Philosophical",
"Placid",
"Plucky",
"Polite",
"Powerful",
"Communicative",
"Compassionate",
"Conscientious",
"Considerate"
];

const firstNames = [
"Dorisa",
"Jamima",
"Ruggiero",
"Ferdie",
"Antonio",
"Thom",
"Lincoln",
"Wynny",
"Evin",
"Johann",
"Roley"
]

const INIT_STATE = {
    id: uuidv4(),
    profileImage:  (process.env.PUBLIC_URL + `/avatars/Artboards_Diversity_Avatars_by_Netguru-${(Math.floor(Math.random() * 58)+1)}.png`),
    name: `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${firstNames[Math.floor(Math.random()* firstNames.length)]}`
};

const userProfile = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return{
                ...state,
                name: action.name
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

export default userProfile;
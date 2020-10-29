export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished developping
    token: "BQBXR_DCIqg-h3Ga42uh_9tocSDwBRTwpbySObIdOGm05gBpxirWt9j0vH-CmQgIzYx878iJa4liRH34_EnyVUYBnLh9R3NmWi1wOwXRwCoLpAVM8rEC3QDI0Z_7E-PQbxra3U_N0MQfCDaohZw1MblfTwjj"
};

const reducer = (state, action) => {
    console.log(action);
    
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
    
        default:
            return state;
    }
}

export default reducer;
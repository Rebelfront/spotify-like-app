import React, { useEffect } from 'react';
import {Login} from './modules/login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./modules/Player/Player";
import { useDataLayerValue } from './DataLayer';

export const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {

      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify
      });

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });

      spotify.getPlaylist('37i9dQZEVXcKQgvTvNpPaS').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        });
      });

      spotify.getMyTopArtists().then(response => {
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        });
      });
    }

  }, [token, dispatch]);

  return (
    <div className="app">
      {token ? <Player /> : <Login />}
    </div>
  );
}

export default App;

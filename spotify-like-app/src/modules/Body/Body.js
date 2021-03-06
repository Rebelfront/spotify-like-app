import React from 'react';
import Header from '../Header/Header';
import { useDataLayerValue } from '../../DataLayer';
import SongRow from '../SongRow/SongRow';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';

import css from './Body.module.css';

const Body = ({ spotify }) => {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:${id}`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

    return (
        <div className={css.body}>
            <Header spotify={spotify} />

            <div className={css["body__info"]}>
                <img className={css["body__info-img"]} src={discover_weekly?.images[0].url} alt="discover weekly" />
                <div className={css["body__info-txt"]}>
                    <strong>PLAYLIST</strong>
                    <h2 className={css["body__info-title"]}>Discover Weekly</h2>
                    <p className={css["body__info-desc"]}>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className={css["body__songs"]}>
                <div className={css["body__icons"]}>
                    <PlayCircleFilledIcon 
                        className={css["body__shuffle"]} 
                        onClick={playPlaylist}
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon  />
                </div>
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow playSong={playSong} track={item.track} />
                ))}
            </div>

        </div>
    )
}

export default Body;
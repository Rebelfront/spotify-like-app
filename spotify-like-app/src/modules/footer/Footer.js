import React, { useEffect } from 'react';
import css from './Footer.module.css';
import classNames from 'classnames/bind';
import { useDataLayerValue } from '../../DataLayer';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

export const Footer = ({ spotify }) => {
    const [{ token, item, playing }, dispatch] = useDataLayerValue();
    let cx = classNames.bind(css);

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
    
          dispatch({
            type: "SET_PLAYING",
            playing: r.is_playing,
          });
    
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
        });
      }, [spotify]);
    
      const handlePlayPause = () => {
        if (playing) {
          spotify.pause();
          dispatch({
            type: "SET_PLAYING",
            playing: false,
          });
        } else {
          spotify.play();
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        }
      };
    
      const skipNext = () => {
        spotify.skipToNext();
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
      };
    
      const skipPrevious = () => {
        spotify.skipToPrevious();
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
      };

    return (
        <div className={css.footer}>
            <div className={css["footer__left"]}>
                <img className={css["footer__album-logo"]} src={item?.name}  alt={item?.name} />
                {item ? (
                    <div className={css["footer__song-info"]}>
                        <h4 className={css["footer__song-title"]}>{item.name}</h4>
                        <p className={css["footer__song-artist"]}>{item.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                ) : (
                    <div className={css["footer__song-info"]}>
                        <h4 className={css["footer__song-title"]}>No song is playing</h4>
                        <p className={css["footer__song-artist"]}>...</p>
                    </div>
                )}
            </div>

            <div className={css["footer__center"]}>
                <ShuffleIcon className={cx(css["footer__icon"], css["footer__icon--green"])} />
                <SkipPreviousIcon 
                    onClick={skipPrevious} 
                    className={css["footer__icon"]} 
                />
                <PlayCircleOutlineIcon 
                    onClick={handlePlayPause} 
                    fontSize="large" 
                    className={css["footer__icon"]} 
                />
                <SkipNextIcon
                    onClick={skipNext}
                    className={css["footer__icon"]} 
                />
                <RepeatIcon className={cx(css["footer__icon"], css["footer__icon--green"])} />
            </div>

            <div className={css["footer__right"]}>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div> 
      </div>
    );
}
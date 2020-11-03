import React from 'react';
import css from './Footer.module.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

export const Footer = () => (
    <div className={css.footer}>
        <div className={css["footer__left"]}>
            <img className={css["footer__album-logo"]} src=""  alt="album logo" />
            <div className={css["footer__song-info"]}>
                <h4 className={css["footer__song-title"]}>Yeah!</h4>
                <p className={css["footer__song-artist"]}>Usher</p>
            </div>
        </div>

        <div className={css["footer__center"]}>
            <ShuffleIcon className={css["footer__icon"], css["footer__icon--green"]} />
            <SkipPreviousIcon className={css["footer__icon"]} />
            <PlayCircleOutlineIcon fontSize="large" className={css["footer__icon"]} />
            <SkipNextIcon className={css["footer__icon"]} />
            <RepeatIcon className={css["footer__icon"], css["footer__icon--green"]} />
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
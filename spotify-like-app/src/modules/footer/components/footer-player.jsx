import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import css from '../Footer.module.css';
import {useDataLayerValue} from '../../../DataLayer';
import {useSpotifyPlayer} from '../infra/footer.hook';
import classNames from 'classnames/bind';

export const FooterPlayer = () => {
    const [{playing}, dispatch] = useDataLayerValue();
    const {
        handlePlayPause,
        skipPrevious,
        skipNext
      } = useSpotifyPlayer({dispatch, isPlaying: playing});
    const cx = classNames.bind(css);

    return (
        <div className={css["footer__center"]}>
            <ShuffleIcon className={cx(css["footer__icon"], css["footer__icon--green"])} />
            <SkipPreviousIcon 
                onClick={() => skipPrevious()} 
                className={css["footer__icon"]} 
            />
            <PlayCircleOutlineIcon 
                onClick={() => handlePlayPause()} 
                fontSize="large" 
                className={css["footer__icon"]} 
            />
            <SkipNextIcon
                onClick={() => skipNext()}
                className={css["footer__icon"]} 
            />
            <RepeatIcon className={cx(css["footer__icon"], css["footer__icon--green"])} />
        </div>
    );
}
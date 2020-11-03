import React from 'react';
import Header from '../Header/Header';
import { useDataLayerValue } from '../../DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SongRow from '../SongRow/SongRow';

import css from './Body.module.css';

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className={css.body}>
            <Header spotify={spotify} />

            <div className={css["body__info"]}>
                <img className={css["body__info-img"]} src={discover_weekly?.images[0].url} alt="" />
                <div className={css["body__info-txt"]}>
                    <strong>PLAYLIST</strong>
                    <h2 className={css["body__info-title"]}>Discover Weekly</h2>
                    <p className={css["body__info-desc"]}>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className={css["body__songs"]}>
                <div className={css["body__icons"]}>
                    <PlayCircleFilledIcon className={css["body__shuffle"]} />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon  />
                </div>
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow track={item.track} />
                ))}
            </div>

        </div>
    )
}

export default Body;
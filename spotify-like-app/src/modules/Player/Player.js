import React from 'react';
import css from './Player.module.css';
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import {Footer} from '../footer/Footer';
import {spotify} from '../../App';

function Player() {
    return (
        <div className={css.player}>
            <div className={css["player__body"]}>
                <Sidebar />
                <Body spotify={spotify} />
            </div>

            <Footer spotify={spotify} />
        </div>
    )
}

export default Player;
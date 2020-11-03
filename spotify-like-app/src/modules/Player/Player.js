import React from 'react';
import css from './Player.module.css';
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import {Footer} from '../Footer/Footer';

function Player({  spotify }) {
    return (
        <div className={css.player}>
            <div className={css["player__body"]}>
                <Sidebar />
                <Body spotify={spotify} />
            </div>

            <Footer />
        </div>
    )
}

export default Player;
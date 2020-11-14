import React from 'react';
import css from '../Footer.module.css';
import {useDataLayerValue} from '../../../DataLayer';

export const FooterThumbnail = () => {
    const {item} = useDataLayerValue();
    return (
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
    );
};

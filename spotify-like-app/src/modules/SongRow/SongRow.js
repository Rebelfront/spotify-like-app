import React from 'react';
import css from "./SongRow.module.css";

function SongRow({ track }) {
    return (
        <div className={css["song-row"]}>
            <img className={css["song-row__album"]} src={track.album.images[0].url} alt="" />
            <div className={css["song-row__info"]}>
                <h1 className={css["song-row__title"]}>{track.name}</h1>
                <p className={css["song-row__content"]}>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow;
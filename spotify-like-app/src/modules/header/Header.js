import React from 'react';
import css from './Header.module.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from '../../DataLayer';

function Header() {
    const [{user}] = useDataLayerValue();

    return (
        <div className={css.header}>
            <div className={css["header__left"]}>
                <SearchIcon />
                <input className={css["header__input"]} placeholder="Search for Artists, songs, or playlists" type="text" />
            </div>

            <div className={css["header__right"]}>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4 className={css["header__right-title"]}>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;
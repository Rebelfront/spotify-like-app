import React from 'react';
import css from './Sidebar.module.css';
import SidebarOption from '../SidebarOption/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from "../../DataLayer";

function Sidebar() {
    const [{ playlists }] = useDataLayerValue();

    return (
        <div className={css.sidebar}>
            <img className={css["sidebar__logo"]} src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className={css["sidebar__title"]}>PLAYLISTS</strong>
            <hr className={css["sidebar__separator"]} />

            {playlists?.items?.map(playlist => (
                <SidebarOption key={playlist.name} title={playlist.name} />
            ))}

        </div>
    )
}

export default Sidebar;
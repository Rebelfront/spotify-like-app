import React from 'react';
import css from './SidebarOption.module.css';

function SidebarOption({ title, Icon }) {
    return (
        <div className={css["sidebar-option"]}>
            {Icon && <Icon className={css["sidebar-option__icon"]} />}
            {Icon ? <h4>{title}</h4> : <p className={css["sidebar-option__desc"]}>{title}</p>}
        </div>
    )
}

export default SidebarOption;
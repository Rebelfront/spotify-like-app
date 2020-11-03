import React from 'react';
import css from './Login.module.css';
import {loginUrl} from './login.constants';

export const Login = () => (
    <div className={css.login}>
        <h1>Im the login page</h1>
        <img className={css["login__icon"]} src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
        <a className={css["login__link"]} href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
);
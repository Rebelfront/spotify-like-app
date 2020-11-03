import React from 'react';
import css from './Login.module.css';
import {loginUrl} from './login.constants';

export const Login = () => (
    <div className={css.login}>
        <h1>Im the login page</h1>
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
);
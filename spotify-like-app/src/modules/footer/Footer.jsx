import React from 'react';
import css from './Footer.module.css';
import {FooterThumbnail} from './components/footer-thumbnail';
import {FooterPlayer} from './components/footer-player';
import {FooterVolume} from './components/footer-volume';

export const Footer = () => (
    <div className={css.footer}>
        <FooterThumbnail/>
        <FooterPlayer />
        <FooterVolume/>
    </div>
);
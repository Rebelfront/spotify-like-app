import React from "react";
import css from "../Footer.module.css";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";

export const FooterVolume = () => (
  <div className={css["footer__right"]}>
    <Grid container spacing={2}>
      <Grid item>
        <PlaylistPlayIcon />
      </Grid>
      <Grid item>
        <VolumeDownIcon />
      </Grid>
      <Grid item xs>
        <Slider />
      </Grid>
    </Grid>
  </div>
);

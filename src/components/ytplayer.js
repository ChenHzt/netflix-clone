import React from "react";
import screenfull from "screenfull";
import YouTube from "react-youtube";
import DeviceDetector from "device-detector-js";
import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
import '../App.css'

export default function YTPlayer(props) {
    const dd = new DeviceDetector();
    const mobile = dd.usesMobileBrowser();
    const fullScreen = event => {
        var iframe = event.target.getIframe();
        if (screenfull.isEnabled) {
            screenfull.request(iframe);
        }
    };
    const opts = {

        controls: "1"
    };
    return (
        <YouTube
            containerClassName={props.containerClassName}
            className={'iframeS'}
            style={{width:'100%',height:'100%', top: 0, left: 0}}
            videoId={props.id}
            opts={opts}
            onPlay={() => (mobile ? fullScreen : {})}
        />
    );
}
YTPlayer.propTypes = {
    id: PropTypes.string
};

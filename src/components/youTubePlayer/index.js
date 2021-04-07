import DeviceDetector from "device-detector-js";
import PropTypes from "prop-types";
import React from "react";
import YouTube from "react-youtube";
import screenfull from "screenfull";
import './Style.css';

export default function YouTubePlayer(props) {
    const dd = new DeviceDetector();
    const mobile = dd.usesMobileBrowser();
    const fullScreen = event => {
        var iframe = event.target.getIframe();
        if (screenfull.isEnabled) {
            screenfull.request(iframe);
        }
    };
    const opts = {
        controls: props.controls? "1" :'0'
    };

    return (
        <YouTube
            containerClassName={'youTubeContainer'}
            className={'youTubeVideo'}
            style={{width:'100%',height:'100%', top: 0, left: 0}}
            videoId={props.id}
            opts={opts}
            onPlay={() => (mobile ? fullScreen : {})}
        />
    );
}
YouTubePlayer.propTypes = {
    id: PropTypes.string
};
YouTubePlayer.defaultProps = {
    controls: true
  };
import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import NavClose from 'material-ui/svg-icons/navigation/close';
const { ipcRenderer } = require('electron');


class TitleBar extends Component {
    closeApp(event) {
        console.log("close");
        ipcRenderer.send('close', 'close');
    }
    minApp() {
        console.log("min");
    }
    maxApp() {
        console.log("max");
    }
    render() {
        return (
            <div className="titlebar" style={{
                color: this.props.labelColor,
                background: this.props.backgroundColor,
                WebkitUserSelect: "none",
                WebkitAppRegion: "drag",
                margin: 0,
                padding: 0,
                position: "fixid",
                left: 0, bottom: 0
            }}>
                <IconButton onClick={this.closeApp} tooltip="Close" tooltipPosition="bottom-left" style={{
                    WebkitAppRegion: "no-drag",
                    marginRight: 16
                }} iconStyle={{ color: this.props.labelColor }}>
                    <NavClose />
                </IconButton>
            </div>
        );
    }
}

export default TitleBar;
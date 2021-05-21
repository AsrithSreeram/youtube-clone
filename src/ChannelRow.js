import React from 'react'
import './ChannelRow.css'
import Avatar from "@material-ui/core/Avatar"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function ChannelRow({image,
    channelName,
    verified,
    subscribers,
    numberOfVideos,
    description}) {
    return (
        <div className = "channelRow">
                <Avatar className = "channelRow_avatar" alt = {channelName} src= {image} />
            <div className = "channelRow_text">
                <h4>{channelName} {verified && <CheckCircleOutlineIcon/>}</h4>
                <p>{subscribers} subscribers • {numberOfVideos} videos</p>
                <p> {description} </p>
            </div>
            
        </div>
    )
}

export default ChannelRow

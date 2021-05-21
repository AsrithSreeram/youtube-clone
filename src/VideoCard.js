import React from 'react'
import './VideoCard.css'
import Avatar from "@material-ui/core/Avatar"


//Takes in Title, Views, Channel, Timestamp, Profile Picture + Thumbnail
function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
    return (
        <div className = "videocard">
            <img className = "videocard_thumbail" src = {image} alt="" />
            <div className = "videocard_info">
                <Avatar className = "videocard_avatar" alt = {channel} src= {channelImage} />
            <div className = "videocard_text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p> {views} • {timestamp} </p>
            </div>
            </div>

        </div>
    )
}

export default VideoCard

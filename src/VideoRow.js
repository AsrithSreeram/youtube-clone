import React from 'react'
import './VideoRow.css'
import Avatar from "@material-ui/core/Avatar"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


function VideoRow({ image, title, channel, views, timestamp, description, verified, channelImage }) {
    return (
        <div className = "videorow">
            <img className = "videorow_thumbail" src = {image} alt="" />
            <div className = "videorow_text">
                <h3>{title}</h3>
                <p className = "videorow_headline" >{views} • {timestamp}</p>
                <p className = "videorow_headline2" > <Avatar className = "videocard_avatar" alt = {channel} src= {channelImage} /> {channel}  {verified && <CheckCircleIcon style={{ fontSize: 18 }}/>}</p>

                <p className = "videorow_description"> {description} </p>
            </div>

        </div>
    )
}

export default VideoRow

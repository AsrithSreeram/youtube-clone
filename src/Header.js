import React, {useState, useEffect} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import YoutubeLogo from './youtube-logo.png'
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/Mic';
import { Link } from "react-router-dom"



function Header() {

    const something=(event)=> {
        if (event.keyCode === 13) {
            console.log('enter')
        }
    }

    const [inputSearch, setInputSearch] = useState("")
    return (
        <div className = "header">
            <div className = "header_left">
            <MenuIcon />
            <Link to = "/">
            <img className = "header_logo" src={YoutubeLogo} alt="" />
            </Link>
            </div>
            <div className = "header_center">
            <input onChange={(event) => setInputSearch(event.target.value)} value = {inputSearch} placeholder="Search" type = "text" />
            <Link to = {`/search/${inputSearch}`}>
            <SearchIcon type="submit" className="header_inputButton" />
            </Link>
            </div>
            <div className = "header_right">
            <VideoCallIcon className="header_icon" />
            <AppsIcon className="header_icon"  />
            <NotificationsIcon className="header_icon"  />
            <Avatar />
            </div>
            
        </div>
    )
}

export default Header

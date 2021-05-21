import React from 'react'
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import download from './download.jpg'


function SearchPage() {
    return (
        <div className = "searchpage">
            <div className = "searchpage_filter">
                <TuneOutlinedIcon />
                <h2> FILTERS </h2>
            </div>
            <hr />
            <ChannelRow 
            image = {download}
            channelName = "Goat goat"
            verified
            subscribers = "102k"
            numberOfVideos = "9"
            description = "Come learn how to code with goat vjrwnvrebnvrebvrvuber uverbrjvnurnvivniwvniwqnveiownvewonvjvnerwvjrnwjberewjvrwvfierfirfiernf"
            />
            <hr />
            <VideoRow 
                            title = "Goat goat"
                            views = "1.2B Views"
                            timestamp = "4 days ago"
                            channelImage = {download}
                            channel = "goat goat"
                            image = {download}
                            verified
                            description = "Come learn how to code with goat vjrwnvrebnvrebvrvuber uverbrjvnurnvivniwvniwqnveiownvewonvjvnerwvjrnwjbe rewjvrwvfierfirfiernf"  
            />
                        <VideoRow 
                            title = "Goat goat"
                            views = "1.2B Views"
                            timestamp = "4 days ago"
                            channelImage = {download}
                            channel = "goat goat"
                            image = {download}
                            verified
                            description = "Come learn how to code with goat vjrwnvrebnvrebvrvuber uverbrjvnurnvivniwvniwqnveiownvewonvjvnerwvjrnwjbe rewjvrwvfierfirfiernf"  
            />
                        <VideoRow 
                            title = "Goat goat"
                            views = "1.2B Views"
                            timestamp = "4 days ago"
                            channelImage = {download}
                            channel = "goat goat"
                            image = {download}
                            verified
                            description = "Come learn how to code with goat vjrwnvrebnvrebvrvuber uverbrjvnurnvivniwvniwqnveiownvewonvjvnerwvjrnwjbe rewjvrwvfierfirfiernf"  
            />
                        <VideoRow 
                            title = "Goat goat"
                            views = "1.2B Views"
                            timestamp = "4 days ago"
                            channelImage = {download}
                            channel = "goat goat"
                            image = {download}
                            verified
                            description = "Come learn how to code with goat vjrwnvrebnvrebvrvuber uverbrjvnurnvivniwvniwqnveiownvewonvjvnerwvjrnwjbe rewjvrwvfierfirfiernf"  
            />
                        <VideoRow 
                            title = "Goat goat"
                            views = "1.2B Views"
                            timestamp = "4 days ago"
                            channelImage = {download}
                            channel = "goat goat"
                            image = {download}
                            verified
                            description = "Come learn how to code with goat vjrwnvrebnvrebvrvuber uverbrjvnurnvivniwvniwqnveiownvewonvjvnerwvjrnwjbe rewjvrwvfierfirfiernf"  
            />
        </div>
    )
}

export default SearchPage

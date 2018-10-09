import React from 'react'; 
import VideoListItem from './video_list_item.js'

const VideoList = ({videos,changeVideo}) => { 

    const videoItems = videos.map((item,i) => <VideoListItem count={i} changeVideo={changeVideo} key={item.etag} video={item} />);

    return (
        <ul className="list-group">{videoItems}</ul>
    )
}

export default VideoList        

import React from 'react';



const VideoListItem = ({video,count,changeVideo}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className='list-group-item'>
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-objet" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div onClick={()=>changeVideo(count)}>{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem
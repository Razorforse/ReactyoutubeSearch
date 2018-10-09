import React from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list'
import VideoDetail from './video-detail.js';

const API_KEY = 'AIzaSyCJi_OkIRugKxtV1-5LrfI-cflHiVS0R_M';



class App extends React.Component {

    constructor(props) {
    super(props)
    this.state = {
        videos: [],
        actualVideo: null,
        term: ''
        }

    this.videoSearch(this.state.term);
    }

        videoSearch(term) {
            YTSearch({key: API_KEY,term: term}, videos => {this.setState({videos: videos,selectedVideo: videos[0]})});
        }

    

    render() {
        return (
        <div>
            <SearchBar searching={prop=>this.videoSearch(prop)} />
            <VideoDetail video={this.state.actualVideo} />
            <VideoList changeVideo={prop=>{this.setState({actualVideo:this.state.videos[prop]})}} videos={this.state.videos} />
        </div>
        )
    }
}

export default App      
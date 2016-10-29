import React, {Component} from 'react';

import SearchBar from './search-bar';
import VideoDetails from './video-details'
import VideoList from './video-list';

import YoutubeService from '../services/youtube.service';

class Home extends Component {
    constructor(props){
        super(props);
        this.NUM_VIDEO_ITEMS_IN_LIST = 5;
        this.DEBOUNCE_WAIT_TIME = 3000;
    }
    
    componentWillMount() {
        this.setState({videos: [], selectedVideo:undefined});
    }    

    componentDidMount(){
        // Perform initial search
        this.onSearchChanged('ReactJS');
    }

    render() {
        return (
            <div className="home">
                <SearchBar onSearchChanged={(search)=>this.onSearchChanged(search)} /> 
                <VideoDetails video={this.state.selectedVideo} />
                <VideoList  
                    videos={this.state.videos} 
                    onVideoItemClick={video=>this.onVideoItemClick(video)}/>
            </div>
        );
    }

    onSearchChanged(search){
        // Call youtube API
        const youtube = new YoutubeService();

        youtube.doSearch(search, this.NUM_VIDEO_ITEMS_IN_LIST)
            .then((result)=>{
                this.setState({
                    videos: result, 
                    selectedVideo: result.length > 0 ? result[0] : undefined
                });
            })
            .catch((error)=>{
                //TODO: Handle this error
            });
    }

    onVideoItemClick(selectedVideo){
        this.setState({selectedVideo});
    }
}

export default Home;
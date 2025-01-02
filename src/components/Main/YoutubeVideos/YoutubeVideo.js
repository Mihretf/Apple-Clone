import React, { Component } from "react";

class Youtube extends Component {
  constructor() {
    super();
    this.state = {
      youTubeVideos: [], // Initially empty array
    };
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key={API here}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeVideos = data.items;
        this.setState({ youTubeVideos });
      })
      .catch((error) => console.error("Error fetching YouTube videos:", error)); // Add error handling
  }

  render() {
    return (
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>
            {/* Check if youTubeVideos is not empty before calling .map */}
            {this.state.youTubeVideos && this.state.youTubeVideos.length > 0 ? (
              this.state.youTubeVideos.map((singleVideo, i) => {
                let vidId = singleVideo.id.videoId;
                let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                return (
                  <div key={i} className="col-sm-12 col-md-4">
                    <div className="singleVideoWrapper">
                      <div className="videoThumbnail">
                        <a href={vidLink} target="_blank" rel="noreferrer">
                          <img
                            src={singleVideo.snippet.thumbnails.high.url}
                            alt="Thumbnail"
                          />
                        </a>
                      </div>
                      <div className="videoInfoWrapper">
                        <div className="videoTitle">
<a href="your-link" target="_blank" rel="noreferrer">Open YouTube Video</a>                            {singleVideo.snippet.title}
                          </a>
                        </div>
                        <div className="videoDesc">
                          {singleVideo.snippet.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>Loading videos...</div> // Show loading text or spinner while waiting for data
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Youtube;

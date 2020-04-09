
import VideoListEntry from './VideoListEntry.js';

var VideoList = ({videos, handleVideoListEntryTitleClick}) => (

  <div className="video-list">
    <div>
      {videos.map((video) => (
        <VideoListEntry
          video={video}
          key={video.id.videoId}
          handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
        />
      )
      )}
    </div>
  </div>

);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.

// ReactDOM.render(<VideoList, document.getElementByClassName("video-list")/>);
export default VideoList;


// {for (var entry of exampleVideoData) {
//   var title = entry.snippet.title;
//   var description = entry.snippet.description;
//   var videoLink = entry.snippet.thumbnails.default.url;
// <div><h5><em>{`${title}; ${description}`}</em>{videLink}</h5></div>
// }})
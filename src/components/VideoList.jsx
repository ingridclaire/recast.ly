
import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (

  <div className="video-list">

    <div>
      {props.videos.map((video) =>
        <VideoListEntry video={video} id={video.id.videoId}/>
      )}
    </div>
  </div>
  // console.log(props.videos)
  //   return (
  //   <div className="video-list">
  // {/* //   {exampleVideoData.map(entry => ( */}
  // // <div><h5><em>key={entry.snippet.title}{entry.snippet.description}</em>{entry.snippet.thumbnails.default.url}</h5></div>
  // //    ))}
  //   </div>
  // )
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
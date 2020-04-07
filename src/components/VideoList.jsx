import exampleVideoData from '../data/exampleVideoData.js';
var VideoList = () => (
  <div className="video-list">
    {/* videoListEntry snippet.title snippet.description  - title and description   video goes here -- vidoeURL - thumbnails.default.url */}
    {/* return (
   {for (var entry of exampleVideoData) {
      var title = entry.snippet.title;
      var description = entry.snippet.description;
      var videoLink = entry.snippet.thumbnails.default.url;
    <div><h5><em>{`${title}; ${description}`}</em>{videLink}</h5></div>
  }}) */}
  </div>

);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

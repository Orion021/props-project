import VideoCard from "./VideoCard";

function VideoGrid() {
  return (
    <div>
      <h3>Recommended for You</h3>

      <div className="video-grid">
        <VideoCard title="Learn English While Sleeping" />
        <VideoCard title="Learn English While Sleeping" />
        <VideoCard title="Learn English While Sleeping" />
        <VideoCard title="Learn English While Sleeping" />

        <VideoCard title="Learn English While Sleeping" />
        <VideoCard title="Learn English While Sleeping" />
        <VideoCard title="Learn English While Sleeping" />
        <VideoCard title="Learn English While Sleeping" />
      </div>
    </div>
  );
}

export default VideoGrid;

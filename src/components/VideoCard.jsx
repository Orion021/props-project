function VideoCard(props) {
  return (
    <div className="video-card">
      <div className="thumbnail">
        <span className="duration">2:00</span>
      </div>

      <h4>{props.title}</h4>
      <p className="meta">Channel Name • 2 days ago</p>
    </div>
  );
}

export default VideoCard;

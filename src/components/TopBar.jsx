function TopBar() {
  return (
    <div className="topbar">
      <input className="search" placeholder="Search..." />

      <div className="categories">
        <span className="chip">Music</span>
        <span className="chip">Movies</span>
        <span className="chip">Anime</span>
        <span className="chip">Gaming</span>
        <span className="chip">Tech & Gadgets</span>
        <span className="chip">Education</span>
      </div>
    </div>
  );
}

export default TopBar;

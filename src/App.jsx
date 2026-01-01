import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import CreatorRow from "./components/CreatorRow";
import VideoGrid from "./components/VideoGrid";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <TopBar />
        <CreatorRow />
        <VideoGrid />
      </div>
    </div>
  );
}

export default App;

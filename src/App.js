import "./App.css";
import { Home } from "./pages/home/Home";
import { Register } from "./pages/register/Register";
import { VideoPage } from "./pages/video/VideoPage";

function App() {
  const data = JSON.parse(localStorage.getItem("userData"));
  const HappyB = JSON.parse(localStorage.getItem("NewData"));
  console.log(data);
  return (
    <div id="container">
      {HappyB ? <VideoPage /> : data ? <Home /> : <Register />}
    </div>
  );
}

export default App;

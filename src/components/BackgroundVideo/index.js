import ReactPlayer from "react-player/lazy";
import videoImage from "../../../public/videoImage.jpg";
function BackgroundVideo() {
  return (
    <ReactPlayer
      url="./video.mp4"
      muted={true}
      loop={true}
      playing={true}
      width="auto"
      height="auto"
    />
  );
}

export default BackgroundVideo;

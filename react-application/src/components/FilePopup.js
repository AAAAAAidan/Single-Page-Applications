import "./FilePopup.css";

function FilePopup(props) {
  const filename = props.filename;
  const getFileType = () => {
    if (filename.match(/.(png|jpg|jpeg|gif)$/)) {
      return "img";
    } else if (filename.match(".(mp3|flac|wav)$")) {
      return "audio";
    } else if (filename.match(".(mp4|mkv)$")) {
      return "video";
    } else {
      return null;
    }
  };
  const fileType = getFileType();

  return (
    <div className="overlay" onClick={props.closeFile}>
      <div className="pop-up">
        { fileType === "img" && (
        <img src={require("../assets/" + filename).default} alt={filename} onClick={(e) => e.stopPropagation()} />
        )}
        { fileType === "video" && (
        <video controls onClick={(e) => e.stopPropagation()}>
          <source src={require("../assets/" + filename).default} type="video/mp4" />
          Your browser does not support the video element.
        </video>
        )}
        { fileType === "audio" && (
        <audio controls onClick={(e) => e.stopPropagation()}>
          <source src={require("../assets/" + filename).default} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
        )}
        { !fileType && (
        <p>Unsupported file type</p>
        )}
      </div>
    </div>
  );
}

export default FilePopup;

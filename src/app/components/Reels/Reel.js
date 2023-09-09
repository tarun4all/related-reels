export default function Reel({ url, id }) {
  return (
    <div className="video">
      <video
        id="video-bg-elem"
        preload="auto"
        className="video__player"
        autoplay=""
        loop
        muted="muted"
        src={url}
        type="video/mp4"
      ></video>
    </div>
  );
}

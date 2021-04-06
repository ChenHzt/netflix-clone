export default function YouTubeWrapper  ({ youtubeId , children}) {
    const t = `https://www.youtube.com/embed/${youtubeId}`
    return (
        <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex:-1,
        }}
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&showinfo=0&controls=0`}
        frameBorder="0"
        title='you tube'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      {children}
    </div>
    );
};
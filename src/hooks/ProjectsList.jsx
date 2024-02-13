import React, { useState, useEffect, useRef, useCallback } from "react";

function ProjectsList() {
  const exampleItems = [
    {
      id: 1,
      name: "Item 1",
      urlImage:
        "https://assets-global.website-files.com/64f0481f6be0cfdb348fb01f/654a49f01daa4722f169e44f_1.jpg",
      urlVideo: "",
      posterImg: "",
    },
    {
      id: 2,
      name: "Item 2",
      urlImage: "",
      urlVideo:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      posterImg: "http://blog.mozilla.com/webdev/files/2011/07/mozilla_wht.png",
    },
    {
      id: 3,
      name: "Item 3",
      urlImage: "",
      urlVideo:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      posterImg: "http://blog.mozilla.com/webdev/files/2011/07/mozilla_wht.png",
    },
    {
      id: 4,
      name: "Item 4",
      urlImage: "",
      urlVideo:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      posterImg: "http://blog.mozilla.com/webdev/files/2011/07/mozilla_wht.png",
    },
    {
      id: 5,
      name: "Item 4",
      urlImage: "",
      urlVideo:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      posterImg: "http://blog.mozilla.com/webdev/files/2011/07/mozilla_wht.png",
    },
  ];

  return (
    <ul className="flex-column">
      {exampleItems.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

const ListItem = ({ item }) => {
  return (
    <li className="delete-margin">
      {item.urlImage ? (
        <img src={item.urlImage} alt={item.name} loading="lazy" />
      ) : (
        <div className="placeholder-image">{item.urlImage}</div>
      )}
      {item.urlVideo && <VideoPlayer item={item} />}
    </li>
  );
};

const VideoPlayer = ({ item }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (!isFullScreen) {
        videoRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  const handleIntersection = useCallback(
    (entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play().then(() => setIsPlaying(true));
        }
      } else {
        if (videoRef.current) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    },
    [setIsIntersecting]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    const currentVideoRef = videoRef.current;

    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, [handleIntersection]);

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  return (
    <div className="video-container">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="video-projects"
          poster={item.posterImg}
          playsInline
          autoPlay
          muted={isMuted}
        >
          <source src={item.urlVideo} type="video/webm" />
          <source src={item.urlVideo} type="video/mp4" />
        </video>
        <div className="custom-controls">
          <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
          <button onClick={toggleAudio}>{isMuted ? "Unmute" : "Mute"}</button>
          <button onClick={toggleFullScreen}>
            {isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  createContext,
  useContext,
} from "react";
import useMediaSize from "../hooks/useMediaSize";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo, lazyload } from "@cloudinary/react";

// Create a context to manage video player state
const VideoPlayerContext = createContext();

// Custom hook to access video player context
const useVideoPlayer = () => useContext(VideoPlayerContext);

const VideoPlayerProvider = ({ children }) => {
  const [videoState, setVideoState] = useState({
    isPlaying: false,
    isMuted: true,
    isFullScreen: false,
  });

  return (
    <VideoPlayerContext.Provider value={{ videoState, setVideoState }}>
      {children}
    </VideoPlayerContext.Provider>
  );
};

const ProjectsList = () => {
  const exampleItems = useMemo(
    () => [
      {
        id: 1,
        name: "Item 1",
        urlVideo: "project1",
        posterImg: "project1thumb",
      },
      {
        id: 2,
        name: "Item 2",
        urlVideo: "project2",
        posterImg: "project2thumb",
      },
      {
        id: 3,
        name: "Item 3",
        urlVideo: "project3",
        posterImg: "project3thumb",
      },
      {
        id: 4,
        name: "Item 1",
        urlVideo: "project1",
        posterImg: "project1thumb",
      },
      {
        id: 5,
        name: "Item 2",
        urlVideo: "project2",
        posterImg: "project2thumb",
      },
      {
        id: 6,
        name: "Item 3",
        urlVideo: "project3",
        posterImg: "project3thumb",
      },
    ],
    []
  );

  return (
    <ul className="flex-column">
      {exampleItems.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return (
    <li className="delete-margin">
      {item.urlImage ? (
        <img
          src={item.urlImage}
          alt={item.name}
          loading="lazy"
          preload="auto"
        />
      ) : (
        <div className="placeholder-image">{item.urlImage}</div>
      )}
      {item.urlVideo && <VideoPlayer item={item} />}
    </li>
  );
};

const VideoPlayer = ({ item }) => {
  const videoRef = useRef(null);
  const { videoState, setVideoState } = useVideoPlayer();
  const { isPlaying, isMuted, isFullScreen } = videoState;
  const cld = useMemo(
    () => new Cloudinary({ cloud: { cloudName: "dpoyg70ye" } }),
    []
  );

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.paused
        ? videoRef.current
            .play()
            .then(() => setVideoState({ ...videoState, isPlaying: true }))
        : videoRef.current.pause();
    }
  }, [videoState, setVideoState]);

  const toggleAudio = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setVideoState({ ...videoState, isMuted: videoRef.current.muted });
    }
  }, [videoState, setVideoState]);

  const toggleFullScreen = useCallback(() => {
    if (videoRef.current) {
      isFullScreen
        ? document.exitFullscreen()
        : videoRef.current.requestFullscreen();
      setVideoState({ ...videoState, isFullScreen: !isFullScreen });
    }
  }, [videoState, setVideoState, isFullScreen]);

  const handleIntersection = useCallback(
    (entries) => {
      const entry = entries[0];
      if (videoRef.current) {
        setVideoState({ ...videoState, isPlaying: entry.isIntersecting });
        entry.isIntersecting
          ? videoRef.current
              .play()
              .then(() => setVideoState({ ...videoState, isPlaying: true }))
          : videoRef.current.pause();
      }
    },
    [videoState, setVideoState]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });
    const currentVideoRef = videoRef.current;

    if (currentVideoRef) observer.observe(currentVideoRef);

    return () => currentVideoRef && observer.unobserve(currentVideoRef);
  }, [handleIntersection]);

  useEffect(() => {
    const handleFullScreenChange = () =>
      setVideoState({
        ...videoState,
        isFullScreen: !!document.fullscreenElement,
      });

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
  }, [videoState, setVideoState]);

  return (
    <div className="video-container">
      <div className="video-wrapper">
        <AdvancedVideo
          ref={videoRef.current}
          className="aspect-ratio"
          loading="lazy"
          preload="auto"
          playsInline
          autoPlay
          loop
          muted={isMuted}
          alt={item.name}
          cldVid={cld
            .video(item.urlVideo)
            .delivery("q_auto")
            .format("auto")
            .quality("auto")}
          poster={cld
            .image(item.urlImage)
            .setAssetType("video")
            .delivery("q_auto")
            .format("auto:image")
            .toURL()}
          plugins={[lazyload()]}
        />
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

// Wrap your component tree with VideoPlayerProvider to provide video player context
const App = () => {
  return (
    <VideoPlayerProvider>
      <ProjectsList />
    </VideoPlayerProvider>
  );
};

export default App;

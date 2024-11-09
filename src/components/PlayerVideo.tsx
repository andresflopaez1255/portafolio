import React, { useState, useRef, useEffect } from "react";

const VideoPlayerCustomButton = ({src}:{src:string}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  // Manejador para el botón de play/pausa
  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        //@ts-ignore
        videoRef.current.pause();
      } else {
        //@ts-ignore
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  // Detectar cuando el video se pausa manualmente o termina
  useEffect(() => {
    const video = videoRef.current;

    const handlePause = () => {
      setPlaying(false); // Vuelve a mostrar el botón cuando el video está en pausa
    };

    const handlePlay = () => {
      setPlaying(true); // Vuelve a mostrar el botón cuando el video está en pausa
    };

    const handleEnded = () => {
      setPlaying(false); // Vuelve a mostrar el botón cuando el video termina
    };

    if (video) {
      //@ts-ignore

      video.addEventListener("play", handlePlay);
      //@ts-ignore

      video.addEventListener("pause", handlePause);
      //@ts-ignore

      video.addEventListener("ended", handleEnded);
    }

    return () => {
      if (video) {
        //@ts-ignore

        video.removeEventListener("play", handlePlay);
        //@ts-ignore

        video.removeEventListener("pause", handlePause);
        //@ts-ignore

        video.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        controls={playing ? true : false}
        className="video"
        height={350}
        width="100%"
      >
        <source
          src={src}
          type="video/webm"
        />
        Tu navegador no soporta el formato de video.
      </video>
      {!playing && (
        <div className="play-button" onClick={togglePlay}>
          <div className="play-icon"></div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayerCustomButton;

import React, { useState, useRef, useEffect } from 'react';

const VideoPlayerCustomButton = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  // Manejador para el botón de play/pausa
  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
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
        video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handleEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} controls={playing ? true : false} className="video" height={350} width="100%">
        <source src="https://firebasestorage.googleapis.com/v0/b/portafolio-dd96b.appspot.com/o/images%2Fexample%20yms.mov?alt=media&token=769bb42c-ce40-4b3e-a7b7-c06e2fef69f4" type="video/mp4" />
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

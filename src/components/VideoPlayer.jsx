import { useRef, useState, useEffect } from "react";

const VideoPlayer = ({ video }) => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
 

    useEffect(() => { 
        if (videoRef.current) {
            if (playing) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setPlaying(!playing);
        }
    }, [])

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-3xl">
                {/* Video Player */}
                <video
                    ref={videoRef}
                    className="w-full shadow-lg"
                    autoPlay
                    muted
                    loop
                    controls
                >
                    <source src={`./${video}`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>
        </div>
    );
};

export default VideoPlayer;

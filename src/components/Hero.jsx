import React from 'react';
import {useState,useRef} from 'react';

const Hero = () => {

    const [currentIndex,setCurrentindex]=useState(1);
    const [hasClicked,setHasClicked]=useState(false);
    const [isLoading,setIsLoading]=useState(true);
    const [loadedVideos,setLoadedVideos]=useState(0);

    const totalVideos=4;
    //const currentVideoRef = useRef(null);
    const nextVideoRef=useRef(null);

    const handleMiniVdClick=()=>{
        setHasClicked(true);
        setCurrentindex((prevIndex)=>prevIndex+1);
    }
    const getVideoSrc=(index)=>{
        return `/videos/${index}.mp4`;
    }
    const handleVideoLoaded=()=> {
        setLoadedVideos((prev) => prev + 1);
    }
    const upcomingVideoIndex=(currentIndex % totalVideos)+1;

    return (
        <div className={"relative h-dvh w-screen overflow-x-hidden"}>
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMiniVdClick} className="origin-center hover:scale-50 hover:opacity-100 ">
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(currentIndex+1)}
                                loop
                                muted
                                id="current-video"
                                className="size-64 origin-center scale-150 object-cover object-center"
                                onLoadedData={handleVideoLoad}
                            />

                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(upcomingVideoIndex)}
                                loop
                                muted
                                id="next-video"
                                className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                                onLoadedData={handleVideoLoaded}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero

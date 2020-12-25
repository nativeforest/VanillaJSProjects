function init(){

    const videoElement = document.getElementById('video');
    const playBtn = document.getElementById('play');
    const stopBtn = document.getElementById('stop');
    // const pauseBtn = document.getElementById('pause');
    const progressRange = document.getElementById('progress');
    const timesDuration = document.getElementById('timesDuration');
    const timestamp = document.getElementById('timestamp');

    setDurationTag=()=>{
        const totalDurationTime =formatTime(videoElement.duration);
        timesDuration.innerHTML=''+totalDurationTime;
    }
    formatTime=(currentTimeVideo)=>{

        let hours =Math.floor(currentTimeVideo/3600);  //TODO: TO HOURS
        if(hours<10){ hours='0'+String(hours)}

        let minutes =Math.floor(currentTimeVideo/60);
        if(minutes<10){ minutes='0'+String(minutes)}

        let seconds =Math.floor(currentTimeVideo%60);
        if(seconds<10){ seconds='0'+String(seconds)}

        return `${minutes}:${seconds}` 
    }
    //play&pause video
    toggleVideoStatus=()=>{
        video.paused? video.play():video.pause()
        return true;
    }
    //updt play/pause icon...
     updatePlayPauseIcon =()=>{
        videoElement.paused ? playBtn.innerHTML='<i class="fa fa-play fa-2x"></i>' : playBtn.innerHTML='<i class="fa fa-pause fa-2x"></i>'
        return true;
    }
    // updt progress and timestamp
     updateProgress=()=>{
        progressRange.value= (videoElement.currentTime/ videoElement.duration)*100;
        const currentTime =formatTime(videoElement.currentTime);
        timestamp.innerHTML =currentTime
    }
    // video time to progress
    setVideoProgress=()=>{
        videoElement.currentTime = (+progressRange.value * videoElement.duration)/100;
        
    }
    stopVideo=()=>{
        videoElement.currentTime=0;
        videoElement.pause();
        return true;
    }

    // set total duration
    setDurationTag();
    //events listeners
    videoElement.addEventListener('click',toggleVideoStatus);  // video tag
    playBtn.addEventListener('click',toggleVideoStatus);       //button 

    videoElement.addEventListener('play',updatePlayPauseIcon);
    videoElement.addEventListener('pause',updatePlayPauseIcon);
    videoElement.addEventListener('timeupdate',updateProgress);


    stopBtn.addEventListener('click',stopVideo);
    progressRange.addEventListener('change',setVideoProgress);







}

init();
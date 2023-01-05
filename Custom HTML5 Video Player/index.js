const player=document.querySelector('.player')
const video=player.querySelector('.viewer')
const progress=player.querySelector('.progress')
const progressBar=player.querySelector('.progress__filled')
const play=player.querySelector('.toggle')
const ranges=player.querySelectorAll('.player__slider')
const skipButtons=player.querySelectorAll('[data-skip]')


function togglePlay(){
    const method=video.paused ?'play':'pause'
    video[method]()
}
function updateButtonPlay(){
    if(video.paused){
        play.innerHTML=`<i class="fa-solid fa-play"></i>`
    }else{
        play.innerHTML=`<i class="fa-solid fa-pause"></i>`
    }
}
function skip(){
    video.currentTime+=parseFloat(this.dataset.skip)
}
function handlerRangeUpdate(){
    video[this.name]=this.value;
}
function handleProgress(){
    const porcent=(video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${porcent}%`;
}
function scrub(e){
    const scrubTime=(e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime=scrubTime;
}

video.addEventListener('click',togglePlay)
video.addEventListener('play',updateButtonPlay)
video.addEventListener('pause',updateButtonPlay)
video.addEventListener('timeupdate',handleProgress)
play.addEventListener('click',togglePlay)

skipButtons.forEach(button=>button.addEventListener('click',skip))
ranges.forEach(slide=>slide.addEventListener('change',handlerRangeUpdate))
progress.addEventListener('click',scrub)
let mousedown=false;
progress.addEventListener('mousemove',(e)=>mousedown && scrub(e))
progress.addEventListener('mousedown',()=>mousedown=true)
progress.addEventListener('mouseup',()=>mousedown=false)
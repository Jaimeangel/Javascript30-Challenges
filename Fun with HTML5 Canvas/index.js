const canvas=document.getElementById('draw');
const ctx=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

ctx.lineJoin='round';
ctx.lineCap='round';

let isDrawing=false;
let lastX=0;
let lastY=0;
let hue=0;
let makerWidth=10
let direction = true;

function draw(e){
    if(!isDrawing)return;
    ctx.strokeStyle=`hsl(${hue},100%,50%)`;
    ctx.lineWidth=makerWidth;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    lastX=e.offsetX;
    lastY=e.offsetY;
    hue=hue+10;
    if(hue>360){
        hue=0
    }

    if(makerWidth>=75 || makerWidth<=9){
        console.log('function 1');
        console.log(direction)
        direction=!direction;
        console.log(direction)
        console.log(makerWidth)
    }

    if(direction){
        console.log('function 2')
        makerWidth=makerWidth+3;
        console.log(makerWidth)
        
    }else{
        console.log('function 3')
        makerWidth=makerWidth-3;
        console.log(makerWidth)
    }

}

canvas.addEventListener('mousemove',draw)

canvas.addEventListener('mousedown',(e)=>{
    isDrawing=true;
    lastX=e.offsetX;
    lastY=e.offsetY;
})

canvas.addEventListener('mouseup',()=>isDrawing=false)

canvas.addEventListener('mouseout',()=>isDrawing=false)
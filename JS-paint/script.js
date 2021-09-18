const canvas=document.querySelector("#canvas");
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
ctx.strokeStyle="#BADA55"; //color
ctx.lineJoin='round'; //end of line
ctx.lineCap='round'; //

ctx.lineWidth=25;
let isdraw=false; //when we are drawing

let lastX=0;//last co-ordinateX
let lastY=0; //last co-ordinateY


let hue=0; 

function draw(e)
{
    //called whenever we draw
    console.log(e);
    if(!isdraw)
    {//stop the funtion when we are not drawing
        return; 

    }
    ctx.strokeStyle=`hsl(${hue},100%,50%)`;
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX,lastY);
    //goto
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    lastX=e.offsetX;
    lastY=e.offsetY;
    hue++;
    if(hue >=360)
    {
        hue=0;
    }
}

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown',(e)=>{
    isdraw=true;
    lastX=e.offsetX;
    lastY=e.offsetY;
});
canvas.addEventListener('mouseup',()=>{
    isdraw=false;
});

canvas.addEventListener('mouseout',()=>{
    isdraw=false;
})
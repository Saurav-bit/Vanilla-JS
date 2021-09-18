//window.addEventListener('keydown',function(e)
function playSound(e)
{
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
    //console.log(key);
   // console.log(audio);
    if(!audio)
    {//if not a key
        return ;
    }
    audio.currentTime=0; //rewind
    audio.play();
    key.classList.add('playing');

}

const keys=document.querySelectorAll('.key');
function removeTransition(e)
{
   // console.log(e);
   if(e.propertyName != "transform")
   {
       return;
   }
  this.classList.remove('playing');
   
}

//console.log(keys);
keys.forEach(ki => ki.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound);
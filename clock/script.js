
 const secondHand=document.querySelector(".second-hand");
 const minuteHand=document.querySelector(".min-hand");
 const hrHand=document.querySelector(".hour-hand");
function solve()
{
    const now=new Date();
    const seconds=now.getSeconds();
    //console.log(seconds);
    const secondDegree=((seconds/60)*360)+90; //90 add kia kyuki hamne starting me extra 90 ka roate add kia to make it vertical
   secondHand.style.transform=`rotate(${secondDegree}deg)`;
  
  
   const minutes=now.getMinutes();
  //console.log(minutes);
  const minuteDegree=((minutes/60)*360)+90;
  minuteHand.style.transform=`rotate(${minuteDegree}deg)`;
  
  
  const hrs=now.getHours();
  const hrDegree=((hrs/12)*360)+90 + ((minutes/60)*30 );
  hrHand.style.transform=`rotate(${hrDegree}deg)`;
  console.log(hrs);
 

}
setInterval(solve,1000);
solve();
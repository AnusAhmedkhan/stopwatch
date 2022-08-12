var milisec=0;
var second=0;
var minut=0;
var msec=document.getElementById("msec");
var sec=document.getElementById("sec");
var min=document.getElementById("min");

 var interval;
function timer(){
milisec++;
 msec.innerHTML= milisec;
 if(milisec==100){
    second++;
    sec.innerHTML=second;
    milisec=0;
    if(second==60){
    minut++;
    min.innerHTML=minut;
    second=0;
    }
 }

}
var a=document.getElementById("str")
var b=document.getElementById("pau");
var c=document.getElementById("rest");
// Interval=setInterval(timer,10);
 function start(){
disbaledfn(a,true); 
disbaledfn(b,false);
disbaledfn(c,false);


    Interval=setInterval(timer,10);

 }


 function pause(){
    disbaledfn(b,true);
    disbaledfn(a,false);
    disbaledfn(c,false);
    clearInterval(Interval);
    
    
 }


 function restart(){
    disbaledfn(a,false);
    disbaledfn(b,false);
    disbaledfn(c,true);
    milisec=0;
 second=0;
 minut=0;
    msec.innerHTML= "00";
    sec.innerHTML="00";
    min.innerHTML="00";
    clearInterval(Interval);

 }


 function disbaledfn(btno,cond){

btno.disabled=cond;

 }

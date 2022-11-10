function currtime(){
    var date = new Date();
    var h = date.getHours();   //0-23
    var m = date.getMinutes(); //0-59
    var s = date.getSeconds(); //0-59
    var session = "AM";
 
    //if h is 0 show 12 
 if(h === 0){
    h = 12;
 }
 //h>12 show  session as pm
 if (h>12){
    h = h-12;
    session = "PM";
 }
 
 // double digits of hours , sec, and minutes
 h =h<10 ? "0"+h : h;
 m =m<10 ? "0"+m : m;
 s =s<10 ? "0"+s : s;

 //var time = h + ":" + m + ":" + s + "" + session
 
 var time = `${h} : ${m} : ${s} ${session}`;
 document.getElementById("digitalClock").innerText=time;
 document.getElementById("digitalClock").textContent=time;

 setTimeout(currtime,1000);
}

currtime();
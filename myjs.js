"use strict"
function calculate()
{
    let rCond=document.getElementById("rCond").value;
    let tCond=document.getElementById("tCond").value;
    let wCond=document.getElementById("wCond").value;
    let rFlow=document.getElementById("rFlow").value;
    let rowp=document.getElementById("row");
    let wp=document.getElementById("wills");
    let wflow=document.getElementById("wFlow");


    let rPercent=wCond-tCond;
    let wPercent= tCond-rCond;

    let allPercent=rPercent+wPercent;
    rPercent=(rPercent*100/allPercent).toFixed(2);
    wPercent=(wPercent*100/allPercent).toFixed(2);

    let wFlow=Math.round(wPercent*rFlow/rPercent);
    rowp.innerHTML=`${rPercent}`;
    wp.innerHTML=`${wPercent}`;
    
    wflow.innerHTML=wFlow;
      
}

function recal(){
    /*
    document.getElementById("rCond").value="320";
    document.getElementById("tCond").value = "600";
    document.getElementById("wCond").value = "1160";
    document.getElementById("rFlow").value = "4000";
    */
    let rowp=document.getElementById("row").innerHTML="-------";
    let wp=document.getElementById("wills").innerHTML="-------";;
    let wflow=document.getElementById("wFlow").innerHTML="-------";
}

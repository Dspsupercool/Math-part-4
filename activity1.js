score=0;
function Updatescore() 
{
    score=score+1;

    document.getElementById("score").innerHTML=score;
}

function Savescore() 
{
    localStorage.setItem("score",score);
}

function Nextpage()
{
    window.location="index.html";
}
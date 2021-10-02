function addUser() 
{
player1=document.getElementById("inputbox1").value;
player2=document.getElementById("inputbox2").value;
localStorage.setItem("player1name",player1);
localStorage.setItem("player2name",player2);
window.location.replace("game_page.html");
}
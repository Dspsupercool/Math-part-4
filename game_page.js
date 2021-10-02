player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");
player1name=0;
player2name=0;
player1score=0;
player2score=0;

function send() 
{
    get_word=document.getElementById("number1").value;
   word=get_word.toLowerCase();
    console.log(word);

    getword=document.getElementById("number2").value;
   word=getword.toLowerCase();
    console.log(word);

    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1) * parseInt(number2);
    question_number="<h4>" + number1 + " X " + number2 +"</h4>";
    inputbox="<br> Answer : <input type-'text' id='input_check_box'>";
    check_button="<br><br><button class=btn btn-info onclick='check()'>Check</button>";
    row=question_number + inputbox + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
function check() 
{
get_answer=document.getElementById("input_check_box").value;

if (get_answer==actual_answer)
{ 
    if (answer_turn=="player1")
    {
        player1score=player1score+1;
        document.getElementById("score1").innerHTML=player1score;


    }
else
    {
        player2score=player2score+1;
        document.getElementById("score2").innerHTML=player2score;

    }
}
if (question_turn=="player1")
{
    question_turn="player2"
    document.getElementById("player_question").innerHTML="Question Turn -"+player2name;
}
else
{
    question_turn="player1"
    document.getElementById("player_question").innerHTML="Question Turn -"+player1name;
}
if (answer_turn=="player1")
{
    answer_turn="player2"
    document.getElementById("answer_turn").innerHTML="Answer Turn -"+player2name;
}
else
{
    answer_turn="player1"
    document.getElementById("answer_turn").innerHTML="Answer Turn -"+player1name;
}
document.getElementById("output").innerHTML="";
}
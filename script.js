    /* 

    Description= JavaScript code for jokenpo mini game 
    was a self made study case for practise.
    Author: Dalton Ramiro
    date: 22/07/2018
    Language :html5, Javascript
    Game Version = JokenPo v 1.2

    */

    var playerpick ="";
    var computerscore = 0;
    var playerscore = 0;
    var finalscore = 10;
    var gameon = ["Rock","Paper","Scissor"];
    
    var rock = 0;
    var paper = 1;
    var scissor = 2;

    

    document.getElementById("rock").onclick = function()
    {   
        computerpick = Math.floor((Math.random())*3)
        playerpick = rock ;
        
        if(computerpick == paper)
        {
           
            document.getElementById("resultdisplay").innerHTML = "Computer Score \n Paper > Rock";
            computerscore++
            document.getElementById("computerscore").innerHTML = computerscore;
            
        }
        if(computerpick == scissor)
        {
            
            document.getElementById("resultdisplay").innerHTML ="Player Score \n Rock > Scissor";
            playerscore++
            document.getElementById("playerscore").innerHTML = playerscore;
        }
        else if(computerpick == playerpick)
        {   
            document.getElementById("resultdisplay").innerHTML ="Draw "+gameon[0]+" too! \n Nobody Score!" ;
        }
        if(playerscore == finalscore)
        {   
            document.getElementById("resultdisplay").innerHTML = "Player Win! ";
            document.getElementById("btndisplay").style.display = "none"; 
            document.getElementById("obs").style.display= "block";
        }
        if(computerscore == finalscore) 
        {
            document.getElementById("resultdisplay").innerHTML ="Game Over \n Computer Win! ";
            document.getElementById("btndisplay").style.display = "none"; 
            document.getElementById("obs").style.display= "block";
        }

    }
    document.getElementById("paper").onclick = function()
    {
        computerpick = Math.floor((Math.random())*3)
        playerpick = paper ;
       
        if(computerpick == rock)
        {
            
            document.getElementById("resultdisplay").innerHTML ="Player Score \n Paper > Rock";
            playerscore++
            document.getElementById("playerscore").innerHTML= playerscore;
        }
        if(computerpick == scissor)
        {
            
            document.getElementById("resultdisplay").innerHTML ="Computer Score \n Scissor > Paper";
            computerscore++
            document.getElementById("computerscore").innerHTML= computerscore;
        }
        else if(computerpick == playerpick)
        {   
            document.getElementById("resultdisplay").innerHTML ="Draw "+gameon[1]+" too! \n Nobody Score!" ;
        }
        if(playerscore == finalscore)
        {   
            document.getElementById("resultdisplay").innerHTML ="Player Win! ";
            document.getElementById("btndisplay").style.display = "none"; 
            document.getElementById("obs").style.display= "block"; 
        }
        if(computerscore == finalscore) 
        {
            document.getElementById("resultdisplay").innerHTML ="Game Over \n Computer Win! ";
            document.getElementById("btndisplay").style.display = "none"; 
            document.getElementById("obs").style.display= "block";
        }

    }
    document.getElementById("scissor").onclick = function()
    {
        computerpick = Math.floor((Math.random())*3)
        playerpick = scissor;
       
        if(computerpick == paper)
        {
            
            document.getElementById("resultdisplay").innerHTML ="Player Score \n Scissor > Paper";
            playerscore++
            document.getElementById("playerscore").innerHTML= playerscore;
        }
        if(computerpick == rock)
        {
           
            document.getElementById("resultdisplay").innerHTML ="Computer Score \n Rock > Scissor ";
            computerscore++
            document.getElementById("computerscore").innerHTML= computerscore;
        }
        else if(computerpick == playerpick)
        {   
            document.getElementById("resultdisplay").innerHTML ="Draw "+gameon[2]+" too! \n Nobody Score!" ;
        }
         if(playerscore == finalscore)
        {   
            document.getElementById("resultdisplay").innerHTML ="Player Win! ";
            document.getElementById("btndisplay").style.display = "none"; 
            document.getElementById("obs").style.display= "block"; 
        }
        if(computerscore == finalscore) 
        {
            document.getElementById("resultdisplay").innerHTML ="Game Over \n Computer Win! ";
            document.getElementById("btndisplay").style.display = "none"; 
            document.getElementById("obs").style.display= "block";
        }

    
    }
   
    document.getElementById("obs").onclick= function()
    {
        location.reload();
    }    

    
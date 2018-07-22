    /* 

    Description= JavaScript code for jokenpo mini game 
    was a self made study case for practise.
    Author: Dalton Ramiro
    date: 22/07/2018
    Language :html5, Javascript
    Game Version = JokenPo v1.0

    
    */
    var playerpick ="";
    var computerscore = 0;
    var playerscore = 0;

    document.getElementById("stone").onclick = function()
    {   
        var computerpick = Math.floor((Math.random())*3)
        playerpick = 1;
        
        if(computerpick == 2)
        {
            document.getElementById("resultdisplay").innerHTML = "Computer Score = Paper > Stone";
            computerscore++
            document.getElementById("computerscore").innerHTML = computerscore;
            
        }
        if(computerpick == 3)
        {
            document.getElementById("resultdisplay").innerHTML ="Player Score = Stone > Scissor";
            playerscore++
            document.getElementById("playerscore").innerHTML= playerscore;
        }
        else if(computerpick == playerpick || computerpick == 0)
        {   
            computerpick = "Stone";
            document.getElementById("resultdisplay").innerHTML ="Draw "+computerpick+" too!\n Nobody Score!" ;
        }
        if(playerscore == 10)
        {   
            document.getElementById("resultdisplay").innerHTML ="Player Win! ";
            document.getElementById("btndisplay").style.display = "none"; 
            document.getElementById("obs").style.display= "block";
        }
        if(computerscore == 10) 
        {
            document.getElementById("resultdisplay").innerHTML ="Game Over\nComputer Win! ";
            document.getElementById("btndisplay").style.display = "none"; 
            document.getElementById("obs").style.display= "block";
        }

    }
    document.getElementById("paper").onclick = function()
    {
        var computerpick = Math.floor((Math.random())*3)
        playerpick = 2;
       
        if(computerpick == 1)
        {
            document.getElementById("resultdisplay").innerHTML ="Player Score = Paper > Stone";
            playerscore++
            document.getElementById("playerscore").innerHTML= playerscore;
        }
        if(computerpick == 3)
        {
            document.getElementById("resultdisplay").innerHTML ="Computer Score = Scissor > Paper";
            computerscore++
            document.getElementById("computerscore").innerHTML= computerscore;
        }
        else if(computerpick == playerpick || computerpick == 0)
        {   
            computerpick = "Paper";
            document.getElementById("resultdisplay").innerHTML ="Draw "+computerpick+" too!\n Nobody Score!" ;
        }
        if(playerscore == 10)
        {   
            document.getElementById("resultdisplay").innerHTML ="Player Win! ";
            document.getElementById("btndisplay").style.display = "none"; 
            document.getElementById("obs").style.display= "block"; 
        }
        if(computerscore ==10) 
        {
            document.getElementById("resultdisplay").innerHTML ="Game Over\nComputer Win! ";
            document.getElementById("btndisplay").style.display = "none"; 
            document.getElementById("obs").style.display= "block";
        }

    }
    document.getElementById("scissor").onclick = function()
    {
        var computerpick = Math.floor((Math.random())*3)
        playerpick = 3;
       
        if(computerpick == 2)
        {
            document.getElementById("resultdisplay").innerHTML ="Player Score = Scissor > Paper";
            playerscore++
            document.getElementById("playerscore").innerHTML= playerscore;
        }
        if(computerpick == 1)
        {
            document.getElementById("resultdisplay").innerHTML ="Computer Score = Stone > Scissor ";
            computerscore++
            document.getElementById("computerscore").innerHTML= computerscore;
        }
        else if(computerpick == playerpick || computerpick == 0)
        {   
            computerpick = "Scissors";
            document.getElementById("resultdisplay").innerHTML ="Draw "+computerpick+" too!\n Nobody Score!" ;
        }
        if(playerscore == 10)
        {   
            document.getElementById("resultdisplay").innerHTML ="Player Win! ";
            document.getElementById("btndisplay").style.display = "none"; 
            document.getElementById("obs").style.display= "block"; 
        }
        if(computerscore == 10) 
        {
            document.getElementById("resultdisplay").innerHTML ="Game Over\nComputer Win! ";
            document.getElementById("btndisplay").style.display = "none"; 
            document.getElementById("obs").style.display= "block";
        }
    }

    document.getElementById("obs").onclick= function()
    {
        location.reload();
    }    
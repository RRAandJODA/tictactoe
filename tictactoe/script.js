var ids = "abcdefghi";
var boxes = [];

for(var i=0; i<9; i++){
    boxes[i] = document.getElementById(ids[i]);
}
var tira = 'url("x.png")';
function clinick(x){
    
    if (boxes[x].style.backgroundImage == ''){
        boxes[x].style.backgroundImage = tira;  
        checkWinner(); 
        if (tira == 'url("x.png")'){   
            tira = 'url("o.png")'  
        }else{
            tira = 'url("x.png")'
        }
    }else{
        alert("may laman na")
    }
}

function checkWinner(){

    var row1 = true, row2 = true, row3 = true;
    var col1 = true, col2 = true, col3 = true;
    var dia1 = true, dia2 = true;
    for(var i=0; i<3; i++){

        if (boxes[i].style.backgroundImage != tira){
            row1 = false;
        }
        if (boxes[i+3].style.backgroundImage != tira){
            row2 = false;
        }
        if (boxes[i+6].style.backgroundImage != tira){
            row3 = false;
        }

        if (boxes[i*3].style.backgroundImage != tira){
            col1 = false;
        }
        if (boxes[i*3+1].style.backgroundImage != tira){
            col2 = false;
        }
        if (boxes[i*3+2].style.backgroundImage != tira){
            col3 = false;
        }

        if (boxes[i*8/2].style.backgroundImage != tira){
            dia1 = false;
        }
        if (boxes[i*2+2].style.backgroundImage != tira){
            dia2 = false;
        }

    }
    
    var hasWinner = row1 || row2 || row3 || col1 || col2 || col3 || dia1 || dia2;
    var winnerName = tira == 'url("x.png")' ? "X" : "O";
    if(hasWinner){
        var stat = document.getElementById("stat")
        var win = document.getElementById("win")
        stat.style.display = "block"
        win.innerHTML =  winnerName
      
        setTimeout(function(){
            location.reload();
        }, 3000);
    }else{
        draw()
    }

}
function draw(){
    var d = "Draw"
    var h = true
    for(var i=0; i<9; i++){

        if (boxes[i].style.backgroundImage == ""){
            h = false;

        }
    }
    if (h){
        var stat = document.getElementById("stat")
        stat.style.display = "block"
        stat.innerHTML = d;
    
         setTimeout(function(){
            location.reload();
            }, 3000);

    }
}      
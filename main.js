document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('keyup',run,false);

});
function run(e){
    var player1=document.getElementById('player1'),player2=document.getElementById('player2');
    if(e.which === 81){
      updatePlayerPosition(player1);
    }else if(e.which===80){
      updatePlayerPosition(player2);
    }
  }

function updatePlayerPosition(player){
  player.style.marginLeft=String(parseInt(player.style.marginLeft)+2)+"%"
  if(parseInt(player.style.marginLeft) >= 88){
    document.removeEventListener('keyup',run);
    var result=document.querySelector('#result');
    result.style.display='block';
    document.querySelector('#arena').style.opacity=0.5;
    result.querySelector('h2').innerHTML=player.getAttribute('alt')+ ',Congragulations, YOU WIN!!';
  }
}

function reset(){
    document.addEventListener('keyup',run);
    var result=document.querySelector('#result');
    result.style.display='none';
    document.querySelector('#arena').style.opacity=1;
    result.querySelector('h2').innerHTML="";
    var players=document.querySelectorAll('.player');
    for(var i=0;i<players.length;i++){
      players[i].style.marginLeft='0%';
    }
}

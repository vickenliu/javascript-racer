document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('keyup',run,false);
  $('#return').click(function(){
    $(this).fadeOut();
    $('#map').slideUp(300,function(){
      reset();
      $('#help').fadeIn(300);
    });
  });
  $('#startbtn').click(function(){
    speed=10*($('#speedinput').val());
    $('#help').fadeOut(300,function(){
      reset();
      $('#map').slideDown();
    });
    $('#return').fadeIn(200);
  });

});
var speed;
function run(e){
    e.preventDefault();
    var player1=$('#player1'),player2=$('#player2');
    console.log('hi');
    switch(e.which){
      case 83:
        upDown(player1,1);
        break;
      case 87:
        upDown(player1,0);
        break;
      case 65:
        leftRight(player1,0);
        break;
      case 68:
        leftRight(player1,1);
        break;
      case 40:
        upDown(player2,1);
        break;
      case 38:
        upDown(player2,0);
        break;
      case 37:
        leftRight(player2,0);
        break;
      case 39:
        leftRight(player2,1);
        break;
    }
  }


function reset(){
    document.addEventListener('keyup',run);
    var result=document.querySelector('#result');
    result.style.display='none';
    document.querySelector('#arena').style.opacity=1;
    result.querySelector('h2').innerHTML="";
    $('#player1').css({
      'left':'0px',
      'top':'290px'
    });
    $('#player2').css({
      'left':'0px',
      'top':'310px'
    });
}

function upDown(player,direction){
 
  var top,left=parseInt($(player).css('left'));
  if(direction===1){
    top=parseInt($(player).css('top'))+speed ;
  }else{
    top=parseInt($(player).css('top'))-speed ;
  }
  if(top<0 || top> 580){
    return false;
  }else if(left>=980 && top>= 290 && top<= 320){
    document.removeEventListener('keyup',run);
    var result=document.querySelector('#result');
    result.style.display='block';
    document.querySelector('#arena').style.opacity=0.5;
    result.querySelector('h2').innerHTML=$(player).attr('alt')+ ',Congragulations, YOU WIN!!';
  }
  console.log(left,top);
  if(left>=180&& left<=300){
    if((top>=0&&top<=40) || (top>=180&&top<=220) || (top>=360 && top<=400)|| (top>=540 && top<=580)){
      $(player).css('top',top+'px');
    }else{
    }
  }else if(left>=430 && left<=550){
    if((top>=0&&top<=130) || (top>=270 && top<=310)|| (top>=450 &&top<=580)){
      $(player).css('top',top+'px');
    }else{
    }
  }else if(left>=730 && left<=850){
    if((top>=0&&top<=120)|| (top>=480 &&top<=580)){
      $(player).css('top',top+'px');
    }else{
      
    }
  }else{
    $(player).css('top',top+'px');
  }
}
function leftRight(player,direction){
  var left,top=parseInt($(player).css('top'));
  if(direction===1){
    left=parseInt($(player).css('left'))+speed;
  }else{
    left=parseInt($(player).css('left'))-speed;
  }
  if(left<0 || left>1000){
    return false;
  }else if(left>950 && top<290){ return false;}else if(left>=950 && top>= 290 && top<=320){
    document.removeEventListener('keyup',run);
    var result=document.querySelector('#result');
    result.style.display='block';
    document.querySelector('#arena').style.opacity=0.5;
    result.querySelector('h2').innerHTML=$(player).attr('alt')+ ',Congragulations, YOU WIN!!';
  }

  if(left>180 && ((top>=40 && top<=180) || (top>=220 && top<=360)||(top>=400 && top<=540))&& left<=300){
    
  }else if(left>=430 && left<=550 && ((top>=130 && top<=270) || (top>=310 && top<=450)) ){
    
  }else if(left>=730 && left<= 850 && (top>=100 && top<= 480)){

  }else{
    $(player).css('left',left+'px');
  }


}
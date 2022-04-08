'use strict';
window.onload = function(){
  let result = 0;
  let buttVal = [1,2,3,4,5,6,7,8,9,'.',0]

  for(let i in buttVal){
    let button = document.createElement('button')
    button.className = 'elem'
    button.value = buttVal[i];
    button.innerHTML = `${buttVal[i]}`;
    let numbers = document.querySelector('#numbers')
    numbers.append(button)
  }

  let text = document.createElement('div')
  let wrap = document.createElement('div')
  wrap.className = 'wrapper';
  text.className = 'alert';
  text.innerHTML = 'Invalid input type, try again!'
  document.body.append(wrap)
  wrap.append(text)
  text.hidden = true;

  for(let but of document.querySelectorAll("#numbers .elem")){
    but.onclick = function(event){
      if(result){
        disp.value = '';
        result = 0;
      }
  	 disp.value += but.value
    };
  }

  for(let but of signs.querySelectorAll('button')){
    but.onclick = function(event){
      if(result){
        
        result = 0;
      }
    disp.value += but.value

  }
  };

  let cl = document.getElementById('clear')
  cl.onclick = function(argument) {
    disp.value = '';
    
  }

  let c = document.getElementById('del')
  c.onclick = function(argument) {
    let str = disp.value ;
    
    disp.value = str.slice(0,-1)
    
  }

  function sum(){
   
    var value = disp.value.match(/(^[0-9*\/\\(\\)+-\.]+$)/);
    try{
    result = new Function('return '+ value );

    } catch {
       text.hidden = false;
    }
    disp.value = result();

    text.hidden = true;
    if(!value){
      text.hidden = false;
    }
        
  }
      

  let ev = document.getElementById('evaluate')
  ev.onclick = sum;

  var input = document.getElementById("disp");

  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      sum();
    }
  });


}


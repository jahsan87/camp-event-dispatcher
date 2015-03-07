var EventDispatcher = require('./event-dispatcher');

changeColor = function(color) {
  document.body.style.color = color;
}

changeBackgroundColor = function(color){
  document.body.style.backgroundColor = color;
}

changeFontWeight = function(weight){ 
  document.body.style.fontWeight = weight;
}

window.dispatcher = new EventDispatcher();
window.dispatcher.on('font', changeColor);
window.dispatcher.on('background', changeBackgroundColor);

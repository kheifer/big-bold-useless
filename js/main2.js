function randomColorNum(){
  return (Math.floor(Math.random() * 207) + 48).toString(16);
}
function colorGenerator(){
  return '#' + randomColorNum() + randomColorNum() + randomColorNum();
}

$(document).ready(function(){
  $("#color").submit(function(event) {
    event.preventDefault();

    $('#color').hide();
function Layer(options) {
  var el = document.createElement('div');
  el.className = 'layer';
  el.style.fontSize = options.size + 'px';
  el.style.zIndex = options.size;

  var innerEl = document.createElement('div');
  innerEl.className = 'layer-inner';
  innerEl.innerHTML = $('#userInput').val();;
  el.appendChild(innerEl);

  this.color = '#000';

  document.body.appendChild(el);

  this.innerEl = innerEl;
}

Layer.prototype.render = function () {
  this.innerEl.style.color = this.color;
};

var layers = [];

for (var i = 10; i < (window.innerHeight / 2); i += 10) {
  layers.push(new Layer({
    size: i
  }));
}

var lastLayer = layers[layers.length - 1];
var hasCycled = false;

var currentIndex = 0;
setInterval(function () {
  var layer = layers[currentIndex];

  layer.color = colorGenerator();

  if ((currentIndex < 3) && hasCycled) {
    lastLayer.color = '#fff';
  } else {
    lastLayer.color = '#000';
  }

  if (currentIndex >= 3) {
    hasCycled = true;
  }

  lastLayer.render();
  layer.render();

  currentIndex = (currentIndex + 1) % layers.length;
}, 100);
  });
});

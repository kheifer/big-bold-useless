function randomColorNum(){
  return (Math.floor(Math.random() * 207) + 48).toString(16);
}
function colorGenerator(){
  return '#' + randomColorNum() + randomColorNum() + randomColorNum();
}

$(document).ready(function () {
  $('#color').submit(function (event) {
    event.preventDefault();

    $('#color').hide();

    var words = $('#userInput').val();


  });

});

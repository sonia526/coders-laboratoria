var chile4 = document.getElementById('4-chile');
var lima5 = document.getElementById('5-lima');
var lima6 = document.getElementById('6-lima');
var select = document.getElementById('select');

select.onchange = function (){
  if (select.value == "chile4") {
    displayImage();
    chile4.style.display ='block';
  }

  if (select.value == "lima5") {
    displayImage();
    lima5.style.display ='block';
  }

  if (select.value == "lima6") {
    displayImage();
    lima6.style.display ='block';
  }
}

function displayImage(){
  chile4.style.display='none';
  lima5.style.display='none';
  lima6.style.display='none';
}




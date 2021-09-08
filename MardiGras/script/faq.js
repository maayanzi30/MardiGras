function barWidth() {
  var d = document.getElementsByClassName('conHav');
  d[0].classList.toggle('change');
}

function navTog(x) {
  x.classList.toggle('change');
}

var acordion1 = document.getElementsByClassName('accordion1');

var i;
var len = acordion1.length;
for (i = 0; i < len; i++) {
  acordion1[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panal = this.nextElementSibling;
    if (panal.style.maxHeight) {
      panal.style.maxHeight = null;
    } else {
      panal.style.maxHeight = panal.scrollHeight + 'px';
    }
  });
}

// faq
const accordion = document.getElementsByClassName('contentBx');

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}

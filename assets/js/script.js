// Balik Ke Atas
mybutton = document.getElementById("atas");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
//   document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Akhir Balik Ke Atas
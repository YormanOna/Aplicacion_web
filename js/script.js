window.onscroll = function() {

    scrollfunction();

}

var nav = document.getElementById('navbar');
var scrolSize = nav.offsetTop;

function scrollfunction() {

    if (window.scrollY >= scrolSize) {

        nav.classList.add('navJS-code');

    }
    if (window.scrollY == scrolSize) {

        nav.classList.remove('navJS-code');

    }

}




function slideup() {

    document.getElementById("sear").classList.toggle("tolg");


}

function enviarFormulario() {
  localStorage.setItem("formEnviado", "true");
}

window.onload = function () {
  if (localStorage.getItem("formEnviado") === "true") {
    swal({
      title: "¡Mensaje enviado con éxito!",
      text: "Nos estaremos comunicando con usted lo más pronto posible.",
      icon: "success",
      button: "Aceptar",
    });
    localStorage.removeItem("formEnviado");
  }
};

document.querySelector('form').addEventListener('submit', enviarFormulario);
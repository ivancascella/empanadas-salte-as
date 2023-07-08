function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}
function info() {
  var creador = {
    nombre: "Ivan Cascella",
    email: "ivancascella@gmail.com",
    telefono: "1122550443"
  };

  var mensaje = "Nombre: " + creador.nombre + "\nEmail: " + creador.email + "\nSitio web: " + creador.telefono;
  alert(mensaje);
}

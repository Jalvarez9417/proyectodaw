$(document).ready(function () {
  // Mostrar política de cookies al cargar la página
  $("#politicaCookies").fadeIn();

  // Aceptar las cookies
  $("#aceptarCookies").on("click", function () {
    $("#politicaCookies").fadeOut();
  });

  // Ver política de cookies
  $("#verPolitica").on("click", function () {
    $("#modalCookies").fadeIn();
  });

  // Cerrar modal de cookies
  $("#cerrarModal").on("click", function () {
    $("#modalCookies").fadeOut();
  });

  // Ver cookies desde el footer
  $("#verCookies").on("click", function () {
    $("#modalCookies").fadeIn();
  });

  //Ver MAS
  $(document).ready(function () {
    $(".botonDesplegar a").click(function (e) {
      e.preventDefault();
      $(".oculto").slideToggle(); // Alternar entre display:none y display:block
    });
  });
});

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("terminos");
  const regBtn = document.getElementById("regBtn");

  // Deshabilita el botón de registro cuandocarga la página
  regBtn.disabled = true;

  // Habilita o deshabilita el botón de registro dependiendo del estado del checkbox
  checkbox.addEventListener("change", function () {
    regBtn.disabled = !checkbox.checked;
  });
});


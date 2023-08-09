function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("terminos");
    const registerButton = document.getElementById("regBtn");
  
    checkbox.addEventListener("change", function () {
      registerButton.disabled = !checkbox.checked;
    });
  });

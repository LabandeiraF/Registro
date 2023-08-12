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

/*validacion de Campos*/

function passwordIgualdad(){
  return document.getElementById('password1').value === document.getElementById('password2').value
  }
  
  function passwordlongitud(){
    const minimo = 6;
      return document.getElementById('password1').value.length >= minimo
  }
  
    let contador = 0 
  
  function validacioncampos (){
  let validacion = document.getElementsByClassName('form-control')
  
  for (let i=0; i<validacion.length; i++){
  
      if (validacion[i].value === ""){
          contador++
}
  }
  console.log(contador)
  
  return contador  == 0
  }
  
  
  document.getElementById('regBtn').addEventListener("click", function() {
  
  if (passwordIgualdad() && passwordlongitud() && validacioncampos ()){
      showAlertSuccess()
  }
  else{
      showAlertError()
  }
  
})


function maxLengthCheck(object) {
    if (object.value.length > object.max.length)
      object.value = object.value.slice(0, object.max.length)
  }
    
function es (evt) {

    var evento = evt || window.event;
    var key = evento.keyCode || evento.which;
    key = String.fromCharCode (key);
    // Busca el caracter en un subconjunto de caracteres
    var regex = /[0-9]/;
    //var regex = /[0-9]|\./; esta opcion lo que hace es permitir el punto decimal
    if ( !regex.test(key) ) {
      // Permite cancelar el evento si este es cancelable  
      evento.returnValue = false;
      if(evento.preventDefault) evento.preventDefault();
    }
}

function calculo() {
    var numero = document.getElementById("dni").value;
    console.log(letra);
    if (numero.length == 8) {
        var resto = 0;
        var letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
        resto = numero % 23;
        document.getElementById("letra").innerHTML = '- '+letras[resto];
    }
    else {
        document.getElementById("letra").innerHTML ="";
    }

}
/*function agregarFila(){
    document.getElementById("tabla").insertRow(-1).innerHTML = document.getElementById("tabla1");
}
  function eliminarFila(){
    var table = document.getElementById("tabla");
    var rowCount = table.rows.length; 
    if(rowCount <= 2)
      alert('No se puede eliminar el encabezado');
    else
      table.deleteRow(rowCount -1);
  }
*/

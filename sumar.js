

function suma() {
  var uno = document.getElementById("A").value;
  var dos = document.getElementById("B").value;  
  var a = uno.length;
  var b = dos.length;
  var array_uno=uno.split("");
  var array_dos=dos.split("");
  var i =0;
  var acumulador = 0;
  //alert("length: " + a);
  
  
  //console.log("Numero de caracteres: " + (a-1))

  console.log(array_uno[0]);

  if((parseInt(array_uno[2]) + parseInt(array_dos[2])) >= 10)
  {
    console.log("primer if acumulador: ",acumulador);
    acumulador = 1;
    console.log("primer if acumulador se incrementa");
    console.log("primer if acumulador es ahora: ",acumulador);
  }
  if((parseInt(array_uno[1]) + parseInt(array_dos[1])) >= 10)
  {
    console.log("segundo if acumulador: ",acumulador);
    acumulador = acumulador + 1;
    console.log("segundo if acumulador se incrementa");
    console.log("segundo if acumulador es ahora: ",acumulador);
  }
  if((parseInt(array_uno[0]) + parseInt(array_dos[0])) >= 10)
  {
    console.log("tercer if acumulador: ",acumulador);
    acumulador = acumulador + 1;
    console.log("tercer if acumulador se incrementa");
    console.log("tercer if acumulador es ahora: ",acumulador);
  }
  res = parseInt(uno) + parseInt(dos);
  document.getElementById('total').innerHTML = res;
  document.getElementById('acumulador').innerHTML = acumulador;
}


var operando1="";
var operando2="";
var operacion="";

var calculadora = {
	
	pantalla : document.getElementById("display"),	
	reset : document.getElementById("on"),
	signo: document.getElementById("sign"),
	suma : document.getElementById("mas"),
	resta : document.getElementById("menos"),
	multiplicacion : document.getElementById("por"),
	division : document.getElementById("dividido"),
	punto : document.getElementById("punto"),
	resultado : document.getElementById("igual"),
	cero : document.getElementById("0"),
	uno : document.getElementById("1"),
	dos : document.getElementById("2"),
	tres : document.getElementById("3"),
	cuatro : document.getElementById("4"),
	cinco : document.getElementById("5"),
	seis : document.getElementById("6"),
	siete : document.getElementById("7"),
	ocho : document.getElementById("8"),
	nueve : document.getElementById("9"),
		
}


//eventos
//0
calculadora.cero.onmousedown = function(){
	
	calculadora.cero.style.transform="scale(.9)";
	if(calculadora.pantalla.textContent == 0){
		
		limpiar();
	}	
	if(calculadora.pantalla.innerHTML.length < 8){
		calculadora.pantalla.textContent = calculadora.pantalla.textContent + "0";
	}
	
	
	
} 
calculadora.cero.onmouseup = function(){
	calculadora.cero.style.transform="scale(1)";
}

//1
calculadora.uno.onmousedown = function(){
	
	calculadora.uno.style.transform="scale(.9)";	
	if(calculadora.pantalla.textContent ===  "0"){
		limpiar();
	}
	
        if (calculadora.pantalla.innerHTML.length < 8) {

		calculadora.pantalla.textContent = calculadora.pantalla.textContent + "1";
        }	
}
calculadora.uno.onmouseup = function(){
	calculadora.uno.style.transform="scale(1)";
}

//2
calculadora.dos.onmousedown = function(){
	
	calculadora.dos.style.transform="scale(.9)";
	if(calculadora.pantalla.textContent === "0"){
		limpiar();
	}
        if (calculadora.pantalla.innerHTML.length < 8) {

		calculadora.pantalla.textContent = calculadora.pantalla.textContent + "2";
        }
		
} 
calculadora.dos.onmouseup = function(){
	
	calculadora.dos.style.transform="scale(1)";
}


//3
calculadora.tres.onmousedown = function(){
	
	calculadora.tres.style.transform="scale(.9)";
	if(calculadora.pantalla.textContent === "0"){
		
		limpiar();
	}	
	 if (calculadora.pantalla.innerHTML.length < 8) {

		calculadora.pantalla.textContent = calculadora.pantalla.textContent + "3";
        }
} 
calculadora.tres.onmouseup = function(){
	calculadora.tres.style.transform="scale(1)";
}


//4
calculadora.cuatro.onmousedown = function(){
	
	calculadora.cuatro.style.transform="scale(.9)";
	if(calculadora.pantalla.textContent === "0"){
		
		limpiar();
	}	
	 if (calculadora.pantalla.innerHTML.length < 8) {

		calculadora.pantalla.textContent = calculadora.pantalla.textContent + "4";
        }
} 
calculadora.cuatro.onmouseup = function(){
	calculadora.cuatro.style.transform="scale(1)";
}


//5
calculadora.cinco.onmousedown = function(){
	
	calculadora.cinco.style.transform="scale(.9)";
	if(calculadora.pantalla.textContent === "0"){
		
		limpiar();
	}	
	 if (calculadora.pantalla.innerHTML.length < 8) {

		calculadora.pantalla.textContent = calculadora.pantalla.textContent + "5";
        }
} 
calculadora.cinco.onmouseup = function(){
	calculadora.cinco.style.transform="scale(1)";
}


//6
calculadora.seis.onmousedown = function(){
	
	calculadora.seis.style.transform="scale(.9)";
	if(calculadora.pantalla.textContent === "0"){
		
		limpiar();
	}	
	 if (calculadora.pantalla.innerHTML.length < 8) {

		calculadora.pantalla.textContent = calculadora.pantalla.textContent + "6";
        }
} 
calculadora.seis.onmouseup = function(){
	calculadora.seis.style.transform="scale(1)";
}


//7
calculadora.siete.onmousedown = function(){
	
	calculadora.siete.style.transform="scale(.9)";
	if(calculadora.pantalla.textContent === "0"){
		
		limpiar();
	}	
	 if (calculadora.pantalla.innerHTML.length < 8) {

		calculadora.pantalla.textContent = calculadora.pantalla.textContent + "7";
        }

} 
calculadora.siete.onmouseup = function(){
	calculadora.siete.style.transform="scale(1)";
}


//8
calculadora.ocho.onmousedown = function(){
	
	calculadora.ocho.style.transform="scale(.9)";
	if(calculadora.pantalla.textContent === "0"){
		
		limpiar();
	}	
	 if (calculadora.pantalla.innerHTML.length < 8) {

		calculadora.pantalla.textContent = calculadora.pantalla.textContent + "8";
        }
} 
calculadora.ocho.onmouseup = function(){
	calculadora.ocho.style.transform="scale(1)";
}

//9
calculadora.nueve.onmousedown = function(){
	
	calculadora.nueve.style.transform="scale(.9)";
	if(calculadora.pantalla.textContent === "0"){
		
		limpiar();
	}	
	 if (calculadora.pantalla.innerHTML.length < 8) {

		calculadora.pantalla.textContent = calculadora.pantalla.textContent + "9";
        }
} 
calculadora.nueve.onmouseup = function(){
	calculadora.nueve.style.transform="scale(1)";
}


//.
calculadora.punto.onmousedown = function(){
	
	calculadora.punto.style.transform="scale(.9)";
        			
	if (calculadora.pantalla.innerHTML.length < 8 && calculadora.pantalla.innerHTML.length < 5 ) {

		calculadora.pantalla.textContent = calculadora.pantalla.textContent + ".";
		
        }
}
//.
calculadora.punto.onmouseup = function(){
	
	calculadora.punto.style.transform="scale(1)";	
} 

//reset
calculadora.reset.onmousedown = function(){

	calculadora.reset.style.transform="scale(.9)";
	resetear();
}
calculadora.reset.onmouseup = function(){

	calculadora.reset.style.transform="scale(1)";
}

//sumar
calculadora.suma.onmousedown = function(){
	
	calculadora.suma.style.transform="scale(.9)";		
	operando1 = calculadora.pantalla.textContent;
	operacion = "sumar";
	limpiar();
	
}
calculadora.suma.onmouseup = function(){
	
	calculadora.suma.style.transform="scale(1)";
}
//restar
calculadora.resta.onmousedown = function(){
	
	calculadora.resta.style.transform="scale(.9)";		
	operando1 = calculadora.pantalla.textContent;
	operacion = "restar";
	limpiar();
	
}
calculadora.resta.onmouseup = function(){
	
	calculadora.resta.style.transform="scale(1)";
}

//multiplicar
calculadora.multiplicacion.onmousedown = function(){
	
	calculadora.multiplicacion.style.transform="scale(.9)";		
	operando1 = calculadora.pantalla.textContent;
	operacion = "multiplicar";
	limpiar();
	
}
calculadora.multiplicacion.onmouseup = function(){

	calculadora.multiplicacion.style.transform="scale(1)";	
}

//dividir
calculadora.division.onmousedown = function(){

	calculadora.division.style.transform="scale(.9)";		
	operando1 = calculadora.pantalla.textContent;
	operacion = "dividir";
	limpiar();
	
}
calculadora.division.onmouseup = function(){

	calculadora.division.style.transform="scale(1)";
}

//igual
calculadora.resultado.onmousedown = function mostrarResultado(){
		
		calculadora.resultado.style.transform="scale(.9)";		
		operando2  = calculadora.pantalla.textContent;
		resolver();	
					
}
calculadora.resultado.onmouseup = function(){

		calculadora.resultado.style.transform="scale(1)";
}


// +-
calculadora.signo.onmousedown = function(){

	calculadora.signo.style.transform="scale(.9)";	
	if(calculadora.pantalla.textContent > "0"){
		calculadora.pantalla.textContent = "-" + calculadora.pantalla.textContent;
	}
	else if(calculadora.pantalla.textContent < "0"){
		
		calculadora.pantalla.textContent = calculadora.pantalla.textContent * -1;
		
	}		
}
calculadora.signo.onmouseup = function(){
	
	calculadora.signo.style.transform="scale(1)";	
}

//funciones generales

function limpiar(){
	
	calculadora.pantalla.textContent="";
}

//funcion resetear 

function resetear(){

	operando1=0;
	operando2=0;
	operacion="";		
	calculadora.pantalla.textContent="0";
}

// definimos la funcion resolver

function resolver(){
	
	var res = 0;
	switch(operacion){
	case "sumar":
		res =  parseFloat(operando1) + parseFloat(operando2);
		break;

	case "restar":
		res = parseFloat(operando1) - parseFloat(operando2);
		break;

	case "multiplicar":
		res = parseFloat(operando1) * parseFloat(operando2);
		break;
	
	case "dividir":
		res = parseFloat(operando1) / parseFloat(operando2);
		break;
	
	}
	

	calculadora.pantalla.textContent = res;
	decimal(res);	
	
	function decimal(numero){
    		if (numero % 1 == 0 && calculadora.pantalla.innerHTML.length < 8) {
        		calculadora.pantalla.textContent = res;

    		} else{
				calculadora.pantalla.textContent = res.toPrecision(5);
        		
    		}
	}
	
		
}

//Asumiendo que Math.floor((Math.random() * 100) + 1); 
//saca elementos al azar entre 1 y 100, queremos que hagas lo siguiente:
/*Saca 50 números al azar entre 1 y 100
Almacena los números que salgan impares en un array impares
Almacena los números que salgan pares en un array pares*/
var pares=new Array();
var impares=new Array();

for (var i = 0; i <= 50; i++) {
	var ra=Math.floor(Math.random()*100)+1;
	
	if ((ra%2)==0) {
		//par
		pares.push(ra);
	} else {
		impares.push(ra);
	}

	}
	console.log("numeros pares: "+pares);
	console.log("numeros impares: "+impares);
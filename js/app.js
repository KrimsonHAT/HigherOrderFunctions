const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];

// for(let i = 0;i<autos.length;i++){
// 	if(autos[i].color==='Negro'){
// 		console.log(autos[i])
// 	}

// }




// forEach
// solo recorre todos los elementos del arreglo

/*
let resultado = [];
autos.forEach((auto)=>{
if(auto.color === "Rojo"){
	resultado.push(auto);
	
}
})
console.log(resultado)
*/



// *******map************
// El map te crea un nuevo arreglo es la diferencia con foreach

/*

let resultado = autos.map((auto)=>{
return auto

});

console.log(resultado)

*/


// ****************+filter************************
// Nos trae los elementos del arreglo que queramos

// let resultado = autos.filter(auto =>{
// 	return auto.marca === 'BMW';
// })


// let resultado = autos.filter(auto =>{
// 	return auto.color === 'Rojo';
// })

// let resultado = autos.filter(auto =>{
// 	return auto.year === 2018;
// })

// let resultado = autos.filter(auto =>{
// 	return auto.precio > 50000;
// })

// let resultado = autos.filter(auto => auto.puertas ===2)
// let resultado = autos.filter(auto=> auto.transmision ==='manual')
// let resultado = autos.filter(auto=>auto.year >= 2015 && auto.year <=2017 )
// let resultado = autos.filter(auto=>auto.year >= 2016 && auto.marca === 'BMW' )
// console.log(resultado)



// **********************+find+***********************
// RETORNA EL 1ER ELEMENTO QUE ENCUENTRE EN EL ARREGLO
// let resultado = autos.find(auto =>auto.marca === 'BMW');
// console.log(resultado)






// ************************reduce****************+
// Toma todos los valores y retorna un valor único

/*

let resultado = autos.reduce((total,auto)=> total+auto.precio,0);

// console.log(resultado)
let mostrarHtml = document.getElementById('app')
mostrarHtml.innerHTML = `
	<h4>Metodo reduce<h4>
	<h5>El resultado de la suma de todos los precios de nuestros autos es :</h5>
	${resultado}

`;

const numeros = [1,2,3,4]

let respuesta = numeros.reduce((total,numero) => total + numero, 0 );
console.log(respuesta)

*/




// ********************some**********************
// va a evaluar cierta condicion y solo retorna TRUE O FALSE

/*
let resultado = autos.some((auto)=>{
	return auto.marca === 'BMW'
})
let resultado = autos.some(auto=>auto.marca === 'BMW')
let resultado = autos.some(auto => auto.precio > 1000000)
console.log(resultado)

*/


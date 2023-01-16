function stringAlRevez(string) {
	if (string.length < 1) return "";
	let nuevoString = stringAlRevez(string.slice(0, string.length - 1));
	nuevoString = string.substring(string.length - 1) + nuevoString;
	return nuevoString;
}
console.log(stringAlRevez("Hola"));//"aloH"

/* function stringAlRevez2(string) {
	if (string.length < 1) return "";
	let nuevoString = stringAlRevez2(string.slice(1));
	nuevoString = nuevoString + string.substring(0,1);
	return nuevoString;
}
console.log(stringAlRevez2("Hola")); */

/* let a=''
string = "Hola";
a = string.substring(0,1); //Extrae el primer caracter de string
a = string.substring(string.length - 1); //Extrae el último caracter de string
a;

a = string.slice(1); //Quita el primer caracter y devuelve el resto
a = string.slice(0, string.length - 1); //Quita el último caracter y devuelve el resto
a; */

function validateForm(){

	//name validation, empty field and first character uppercase
	function nombre(){
		var nombre = document.getElementById('name').value;
		if (nombre === null || nombre.length === 0){
			//alert('¡Error! El campo nombre no debe estar vacío');
			var contenedor = document.getElementsByClassName('name-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('¡Error! El campo nombre no debe estar vacío');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);	
			return false;
		}else if(nombre.substring(0,1) !== nombre.substring(0,1).toUpperCase()){ //validación primer caracter === primer caract mayus.
			//alert('¡Error! El primer caracter del campo nombre debe ser mayúscula');
			var contenedor = document.getElementsByClassName('name-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('¡Error! El primer caracter del campo nombre debe ser mayúscula');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);				
			return false;
		}else if( /[0-9]/.test(nombre)){ //valida sólo letras
			//alert('¡Error! Sólo debe ingresar letras en el campo nombre');
			var contenedor = document.getElementsByClassName('name-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('¡Error! Sólo debe ingresar letras en el campo nombre');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);			
			return false;
		}else{
			//alert('El nombre ha sido ingresado correctamente');
			return true;
		}
	}
	nombre();

	//lastname validation, empty field and first character uppercase
	function apellido(){
		var apellido = document.getElementById('lastname').value;
		if (apellido === null || apellido.length === 0){
			//alert('¡Error! El campo apellido no debe estar vacío');
			var contenedor = document.getElementsByClassName('lastname-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('¡Error! El campo apellido no debe estar vacío');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);			
			return false;
		}else if(apellido.substring(0,1) !== apellido.substring(0,1).toUpperCase()){//validación primer caracter === primer caract mayus.
			//alert('¡Error! El primer caracter del campo apellido debe ser mayúscula');
			var contenedor = document.getElementsByClassName('lastname-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('¡Error! El primer caracter del campo apellido debe ser mayúscula');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);			
			return false;
		}else if( /[0-9]/.test(apellido)){ //valida sólo letras
			//alert('¡Error! Sólo debe ingresar letras en el campo apellido');
			var contenedor = document.getElementsByClassName('lastname-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('¡Error! Sólo debe ingresar letras en el campo apellido');
			etiqueta.appendChild(nodoError);
			contenedor.appendChild(etiqueta);			
			return false;			
		}else{
			//alert('El apellido ha sido ingresado correctamente');
			return true;
		}
	}		
	apellido();

	//email validation 
	function correo(){
		var correo = document.getElementById('input-email').value;
		var verificar = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/; //acepta todo tipo de correo incluidos puntos entremedio
		if( correo === null || correo.length === 0){
			alert('¡Error! El campo correo no debe estar vacío');
			return false;
		}else if (verificar.test(correo)){
			//alert('El correo ' + correo + ' ha sido ingresado correctamente');
			return true;
		}else{
			alert('¡Error! El correo es incorrecto, por favor ingrese un dato válido');
			return false;
		}
	}
	correo(); 

	//password validation
	function password(){
		var contrasenia = document.getElementById('input-password').value;
		if(contrasenia === null || contrasenia.length === 0){
			alert('¡Error! El campo password no debe estar vacío');
			return false;
		}else if (contrasenia.length < 6 ) { //valida largo contraseña
			alert('¡Error! La contraseña debe tener al menos 6 caracteres');
			return false;
		}else if(contrasenia === 'password' || contrasenia === '123456' || contrasenia === '098754'){ //valida string inválidos
			alert('¡Error! Contraseña inválida');
			return false;
		}else{
			//alert('La contraseña ha sido ingresado correctamente')
			return true;			
		}

	}
	password();	

	//list validation
	/*function lista(){
		var select = document.getElementsByClassName('form-control').selectedIndex;
		if( select === null || select === 0 ) {
			alert('¡Error! Debe seleccionar una opción');
			return false;
		}else{
			return true;
		}
	}
	lista();*/
	function lista(){
		var seleccion = document.getElementsByTagName('select'); //selecciono por etiqueta select
		for (var i = 0; i < seleccion.length; ++i){ //recorro la lista de opciones, si se selecciona valor por defecto (selecciona tu bici con value "0") se retorna false
			if(seleccion[i].value === "0"){
				alert('¡Error! Debe seleccionar una opción');
				return false;
			}
		} 
		return true;
	}
	lista();

	/* nunca funcionó con if
	
	function lista() {
		var seleccion = document.getElementsByTagName('select'); //selecciono por etiqueta select
		if (seleccion === "0" ) { 
			alert("Elija una opción");
			return false;
		}
	}
	lista();*/

}
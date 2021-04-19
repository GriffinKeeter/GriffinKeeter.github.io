document.querySelector("#vbutton").addEventListener('click', () => {
	let pswd1 = document.querySelector("#pswd1").value;
	let pswd2 = document.querySelector('#pswd2').value;
	let success = "Passwords match";
	let error1 = "ERROR: passwords do not match";
	let error2 = "ERROR: password not greater than 8 characters";
	
	if(pswd1 == pswd2){
		document.getElementById("out1").innerHTML = success;
	}else{
		document.getElementById("out1").innerHTML = error1;
	}
	if(pswd1.length < 8 || pswd2.length < 8){
		document.getElementById("out2").innerHTML = error2;
	}
})
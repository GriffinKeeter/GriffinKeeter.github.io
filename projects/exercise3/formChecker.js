function em(){
	let e = document.querySelector("#email").value;
	console.log(e);
	if(e==''){
		document.querySelector('#emailCheck').innerHTML="Email can't be empty";
	}
	else if(!e.includes("@")){
		document.querySelector('#emailCheck').innerHTML="Not a valid email";
	}
	else{
		document.querySelector('#emailCheck').innerHTML="";
	}
}

function ps(){
	let e = document.querySelector("#password").value;
	if(e==''){
		document.querySelector('#passwordCheck').innerHTML="password can't be empty";
	}
	else{
		document.querySelector('#passwordCheck').innerHTML="";
	}
}

function sh(){
	let e = document.querySelector('input[name="shipping"]').value;
	if(e==''){
		document.querySelector('#shippingcheck').innerHTML="You must choose shipping option";
	}
	else{
		document.querySelector('#shippingcheck').innerHTML="";
	}
}
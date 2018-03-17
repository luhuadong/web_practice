var addBtn = document.getElementById('add');
var subBtn = document.getElementById('sub');
var mulBtn = document.getElementById('mul');
var divBtn = document.getElementById('div');
var modBtn = document.getElementById('mod');
var resultNum = document.getElementById('result');

var a_int;
var b_int;

addBtn.onclick = function(){
	getInputNum();
	var result = addition(a_int, b_int);
	console.log("em...", a_int, "+", b_int, "=", result);
	//alert(result);
	//resultNum.innerHTML = "<p>" + result + "</p>";
	resultNum.innerHTML = String(result);
};

subBtn.onclick = function(){
	getInputNum();
	var result = subtraction(a_int, b_int);	
	console.log("em...", a_int, "-", b_int, "=", result);
	//alert(result);
	resultNum.innerHTML = String(result);
};

mulBtn.onclick = function(){
	getInputNum();
	var result = multiplication(a_int, b_int);	
	console.log("em...", a_int, "*", b_int, "=", result);
	//alert(result);
	resultNum.innerHTML = String(result);
};

divBtn.onclick = function(){
	getInputNum();
	var result = division(a_int, b_int);	
	console.log("em...", a_int, "/", b_int, "=", result);
	//alert(result);
	resultNum.innerHTML = String(result);
};

modBtn.onclick = function(){
	getInputNum();
	var result = mode(a_int, b_int);	
	console.log("em...", a_int, "%", b_int, "=", result);
	//alert(result);
	resultNum.innerHTML = String(result);
};

function getInputNum() {
	var a = document.getElementById('num1').value;
	var b = document.getElementById('num2').value;
	a_int = parseInt(a, 10);
	b_int = parseInt(b, 10);
}

function addition(x, y) {
	return (x + y);
}

function subtraction(x, y) {
	return (x - y);
}

function multiplication(x, y) {
	return (x * y);
}

function division(x, y) {
	if(y == 0) {
		alert("0不能做除数");
		return ;
	}
	else {
		return (x / y);
	}
}

function mode(x, y) {
	if(y == 0) {
		alert("0不能做除数");
		return ;
	}
	else {
		return (x % y);
	}
}

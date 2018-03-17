var a_int, b_int;

$('#add').click(function(){
	getInputNum();
	var result = addition(a_int, b_int);
	$('#result').html(String(result));
});

$('#sub').click(function(){
	getInputNum();
	var result = subtraction(a_int, b_int);	
	$('#result').html(String(result));
});

$('#mul').click(function(){
	getInputNum();
	var result = multiplication(a_int, b_int);	
	$('#result').html(String(result));
});

$('#div').click(function(){
	getInputNum();
	var result = division(a_int, b_int);	
	$('#result').html(String(result));
});

$('#mod').click(function(){
	getInputNum();
	var result = mode(a_int, b_int);	
	$('#result').html(String(result));
});

function getInputNum() {
	var a = $('#num1').val();
	var b = $('#num2').val();
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

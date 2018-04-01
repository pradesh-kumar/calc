function run1(){

	document.getElementById('display').innerHTML += "1"
};
function run2(){

	document.getElementById('display').innerHTML += "2"
};
function run3(){

	document.getElementById('display').innerHTML += "3"
};
function run4(){

	document.getElementById('display').innerHTML += "4"
};
function run5(){

	document.getElementById('display').innerHTML += "5"
};

function run6(){

	document.getElementById('display').innerHTML += "6"
};

function run7(){

	document.getElementById('display').innerHTML += "7"
};

function run8(){

	document.getElementById('display').innerHTML += "8"
};

function run9(){

	document.getElementById('display').innerHTML += "9"
};

function run0(){

	document.getElementById('display').innerHTML += "0"
};
function runPlus(){

	document.getElementById('display').innerHTML += "+"
};
function runMinus(){

	document.getElementById('display').innerHTML += "-"
};
function runDivide(){

	document.getElementById('display').innerHTML += "/"
};
function runMultiply(){

	document.getElementById('display').innerHTML += "*"
};

function runC(){

	document.getElementById('display').innerHTML = ""
};


function runEquals() {
	var equals = eval(document.getElementById('display').innerHTML)
	document.getElementById('display').innerHTML = equals;
}

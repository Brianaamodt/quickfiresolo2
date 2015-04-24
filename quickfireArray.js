var tim = [1,2,3,4,5,6,7,8];
var jim = [2,3,4,5,6,7,8,9];
var kim = [0,1,2,3,4,5,6,7];
var tam = [1,2,3,4,5,6,7,8];
var jam = [2,3,4,5,6,7,8,9];
var kam = [0,1,2,3,4,5,6,7];

var masterArray = [tim, jim, kim, tam, jam, kam];

for (var i = 0; i < masterArray.length; i++){
	for(var j = 0; j < masterArray[i].length; j++){
		var zip = masterArray[i][j];
		zip = moreMath(zip);
		console.log(zip);
	}
}

function moreMath(zip){
		var ad = 0;
		ad = (zip + 1);
		return ad * 2;
}
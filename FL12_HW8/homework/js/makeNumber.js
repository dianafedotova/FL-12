function makeNumber(string) {
    var result = '';
	for (var i = 0; i < string.length; ++i) {
		if(parseInt(string[i])){
			result = result + string[i]
		}
	}
	return result;
    }
makeNumber('erer384jjjfd123'); 
makeNumber('123098h76gfdd'); 
makeNumber('ijifjgdj'); 
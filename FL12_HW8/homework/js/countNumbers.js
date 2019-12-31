function makeNumber(string) {
    var result = '';
	for (var i = 0; i < string.length; ++i) {
		if(parseInt(string[i])){
			result = result + string[i]
		}
	}
	return result;
    }
function countNumbers (string) {
    var numbers = makeNumber(string);
	var resultNumbers = {};
	for (var i = 0; i < numbers.length; ++i) {
        numbers[i] in resultNumbers ? ++resultNumbers[numbers[i]] :
         resultNumbers[numbers[i]] = 1;
	}
	return resultNumbers;
}
countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');
function range(start, end) 
{
	var ans = [];
	for (let i = start; i <=end; i++) 
	{
		ans.push(i);
	}
	return ans;
}


var li = "H2 U3 I6 K1 S4 H5".split(" ");
var letter = [];
var ind = [];
for (var i of li)
{
	letter.push(i[0])
	ind.push(i[1])
 //console.log(i[0])
}
console.log(letter)
console.log(ind)


var s = "";


for (i in range(0, ind.length))
{
	if(i == 0){continue}
	console.log(i)
	a = ind.indexOf(i)
	s+=letter[a]
}
console.log(s)

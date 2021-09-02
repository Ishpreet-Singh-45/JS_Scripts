
/**
 * Find Pairs of elements whose sum equals the given number
 */

// let data = [11, 2, 13, 4, 15, 6, 9, 9, 1, 8, 5, 6, 3, 0]

let data = [1,12,2,3,3,6,5,8,11]

data.sort((a,b) =>
{
	return a - b;
})

const sum = 
var arr = []

var i = 0
var j = data.length-1

/*
// Method - 1: using two loops
for (let elem of data)
{
	for(i = data.indexOf(elem)+1; i < data.length; i++)
	{
		if(i == data.length)
		{
			break;
		}
		if(elem + data[i] == sum)
		{
			arr.push([elem, data[i]])
			break
		}
	}
}*/

/*
// Method - 2: using one loop
while(i < j)
{
	if(data[i] + data[j] == sum)
	{
		arr.push([data[i], data[j]])
	}
	if(data[i] + data[j] > sum)
	{
		j--
	}else
	{
		i++
	}
	// console.log(i)
}
/*

while(i < data.length - 1)
{
	if(data[i] + data[j] == sum)
	{
		arr.push( [ data[i], data[j] ] )
		j = data.length - 1
		continue
	}else
	{

	}
}
*/

console.log(arr)
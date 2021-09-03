

arr1 = [1, 4, 5, 2, 8, 6, 5 ]
arr2 = [5, 7, 3, '4', 8, 6, 5, 4,2,5]

// check which arr is longest
const longestArr = function (arr1, arr2)
{
	// returns an array, whoever be the longest
	return arr = (arr1.length > arr2.length) ? arr1 : arr2
}

a = longestArr(arr1, arr2)

const sumArray = []		// declare an empty array for storage of new values

// lop over the longest array
for (let i in a)
{
	// if isn't NaN ?
	console.log(arr2[i])

	if( !isNaN((arr1[i]) + (arr2[i]) )) // use eval()
	{
		// push the sum
		sumArray.push(eval(arr1[i] + arr2[i]))
	}else
	{
		// push the longest array element
		sumArray.push(a[i])
	}
}

console.log(sumArray)
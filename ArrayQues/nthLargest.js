


function largest(index, array)
{
	
	// console.log(array) // testing original array
	let arr = array.sort( (a, b) =>
	{
		return b - a
	})
	// console.log(arr) // testing sorted array


	return (arr[index-1])
}


console.log(largest(-3, [ 43, 56, 23, 89, 88, 90, 99, 652]))
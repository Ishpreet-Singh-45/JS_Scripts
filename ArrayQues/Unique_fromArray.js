/**
 * Find distinct elements from two arrays
 */


function difference(source, diffList)
{
	let list = (source + ',' + diffList).split(',') // happy list combination
	
	let set = new Set(list); // make a set of of elements

	// spread the set into array
	return [...set]
}

// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]))
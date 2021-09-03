
/**
 * Sort array of objects via particular object value
 */

// var data = require('./Data.json')


var library = [ 
	{
		author: 'Bill Gates', 
		title: '7he Road Ahead', 
		libraryID: 1254
	},
	{ 
		author: 'Steve Jobs', 
		title: '11alter Isaacson', 
		libraryID: 4264
	},
	{ 
		author: 'Suzanne Collins', 
		title: '1ockingjay: The Final Book of The Hunger Games', 
		libraryID: 3245
	}
];


function sortObjects(data, key)
{
	return data.sort( (a, b) =>
	{
		if(a.title > b.title)
		{
			return 1 // returns greater
		}else
		{
			return -1 // returns smaller
		}
	})
}

console.log(sortObjects(library))
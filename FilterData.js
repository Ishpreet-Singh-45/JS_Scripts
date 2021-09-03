
const Data = require('./Data.json') // import the JSON file


function groupBy(list, keyGetter) 
{
	const map = new Map();
	list.forEach( (item) => 
	{
		const key = keyGetter(item);
		const collection = map.get(key);
		
		if (!collection) 
		{
			map.set(key, [item]);
		} else 
		{
			collection.push(item);
		}
	});
	return map;
}




function grouped(list, keyGetter)
{
	list.forEach((item) => 
	{
		const key = keyGetter(item)
		console.log(keyGetter(item))
	})
}



const group = groupBy(Data, d => d.datasource_id)

console.log(group) // to get grouped data

console.log(group.get(83)) // to get particular data


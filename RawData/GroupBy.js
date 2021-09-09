
function GroupBy(data, keyGetter)
{
	const map = new Map() // declaring an empty map object
	data.forEach( (item) =>
	{
		const key = keyGetter(item)
		const collection = map.get(key)
		
		if(!collection)
		{
			map.set(key, [item])
		}else
		{
			collection.push(item)
		}
	})
	
	return [...map]
}


function groupBy( data, key)
{
	return data.reduce( (value, elem) =>
	{
		( value[ elem[key] ] = value[ elem[key] ] || [] ).push(elem)
		return value
	}, {})
}




module.exports = {
	GroupBy_Map: GroupBy,
	GroupBy_Object: groupBy
}
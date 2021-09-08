
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
		( value[ elem[key] ] = value[ elem[key] ] || []).push(elem)
		return value
	}, {})
}


function verifyDate(dateString)
{
	// splitting the string to extract the month
	let date = dateString.split(/[\/-]/i) // converting to array
	// date = date.toString().replace(/[,]/g, '') // converting back to string

	// checking month [date[0]] and date [date[1]]
	if( ( (date[0] >= 1) && (date[0] <= 12) ) && ( (date[1] >= 1) && (date[1] <= 31) ) )
	{
		return true
	}
	else
	{
		return false
	}

}

verifyDate('1-01-2015')



module.exports = groupBy
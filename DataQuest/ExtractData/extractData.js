const data = require('./RawData.json').data	// Raw Data

// const data = require('./roughData.json').data	// Alias of Raw Data with small samples



const user_input = "Mar 27, 2020 06:33"	// time [24Hrs] date [Month Date, Year]
var user_input_timestamp = ( new Date(user_input).toDateString() ) + ' '
user_input_timestamp += '0' + ( new Date(user_input).toLocaleTimeString().slice(0, -6) ) 

// var user_input_period = 

// console.log('User_Input_Timestamp: ', user_input_timestamp)		// Output: user_input_timestamp

const filteredData = data.map( (item) =>
{
	const newObject = {}
	newObject.eventValue = 'E0'
	newObject.timestamp = item.date + ' ' + item.label
	// item.timestamp = item.date + ' ' + item.label
	// item.eventValue = 'E0'
	return newObject
})

console.log('Filtered Data: ', filteredData)		// Output: filteredData

const E0Value = filteredData.filter( (item, itemIndex) =>
{
	let comparisonValue = ( new Date(user_input).toDateString() + ' ' + '0' 
		+ new Date(user_input).toLocaleTimeString().slice(0, -6) )
	let sourceValue = new Date(item.timestamp).toDateString() + ' ' + '0' 
		+ new Date(item.timestamp).toLocaleTimeString().slice(0, -6)

	// compare both values
	if( sourceValue === comparisonValue )
	{
		return itemIndex
	}
})
var E0Value_index = filteredData.indexOf(E0Value[0])


// console.log('E0Value Index: ', E0Value_index)		// Output: E0Value_index
// console.log('E0Value: ', E0Value)		// Output: E0Value


var i = E0Value_index
let finalArray = filteredData.map( (item, itemIndex) =>
{
	var E0Value_index = filteredData.indexOf(E0Value[0])
	if( E0Value_index ===itemIndex)
	{
		item.eventValue = 'E' + String(0)
		return item
	}else if(E0Value_index < itemIndex)
	{
		i++	
		item.eventValue = 'E' + String(i)
		return item
	}else
	{
		item.eventValue = 'E' + String(-i)
		i--
		return item
	}
})













const convertTime12to24 = (time12h) => 
{
  const [time, modifier] = time12h.split(' ');

  let [hours, minutes] = time.split(':');

  if (hours === '12') 
  {
    hours = '00';
  }

  if (modifier === 'PM') 
  {
    hours = parseInt(hours, 10) + 12;
  }

  if(minutes >= 60)
  {
  	hours = parseInt(hours) + 1
  	minutes = minutes - 60
  }

  return `${hours}:${minutes}`;
}


// console.log(convertTime12to24('12:61 AM'))

console.log('Final Array: ', finalArray)	// Output: finalArray


// var arr = []
// filteredData.map( (item) =>
// {
// 	const newObject = {}
	
// 	newObject.timestamp = E0Value
// 	newObject.eventValue = 'E0'
// 	arr.push(newObject)
// })
// console.log(arr)

// check if element is an object
// typeof yourVariable === 'object' && yourVariable !== null && !Array.isArray(yourVariable)
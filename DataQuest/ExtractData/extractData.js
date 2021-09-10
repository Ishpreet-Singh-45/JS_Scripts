// const data = require('./RawData.json').data	// Raw Data

const data = require('./roughData.json').data	// Alias of Raw Data with small samples



const user_input = "Jan 6, 202 05:45 AM"	// time [24Hrs] date [Month Date, Year]


const filteredData = data.map( (item) =>
{
	const newObject = {}
	
	newObject.timestamp = item.date + ' ' + item.label
	newObject.eventValue = 'E0'
	return newObject
})



let d = filteredData.findIndex( (elem) =>
{
	return (elem == new Date(user_input).toLocaleDateString())
})

console.log(d)


// check if element is an object
// typeof yourVariable === 'object' && yourVariable !== null && !Array.isArray(yourVariable)
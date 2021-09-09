const {GroupBy_Map, GroupBy_Object} = require('./GroupBy')
const data = require('./RawData.json')




Date.prototype.getWeek = function() 
{
    var dt = new Date(this.getFullYear(), 0, 1);
    return Math.ceil( (((this - dt) / 86400000) + dt.getDay() + 1) / 7 );
};





// First, filter the data - whatever is required
const filteredData = data.map( (item) =>
{
	const newObject = {}
	newObject.date = item.date
	newObject.week = new Date(item.date).getWeek()
	newObject.year = new Date(item.date).getFullYear()
	return newObject
})


const groupedData = GroupBy_Object(filteredData, 'year') // returns an array of objects 
const groupedDataKeys = Object.keys(groupedData)

groupedDataKeys.forEach( (year) =>
{
	// group the data acc to week number
	const group = GroupBy_Object(groupedData[year], 'week') // returns an object
	const groupKeys = Object.keys(group) // extract its all keys

	console.log(group)
	/*
	var finalArray = [] // declare an empty array for the final result

	// for every element in keys of the required data
	groupKeys.forEach( (item) =>
	{
		const newObject = {} // initialize a new object

		let count = group[item].length // the total objects

		// insert the variables inside new object
		let startDate = group[item][0].date
		let endDate = group[item][count-1].date
		let week = item
		newObject[week] = {
				startDate: startDate,
				endDate: endDate,
				count: count,
				week: week
			}
		// Finally, Happily! push the object and make a new array of objects
		finalArray.push(newObject)
	})*/
})






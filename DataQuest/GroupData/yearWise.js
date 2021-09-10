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
	newObject.month = new Date(item.date).getMonth() + 1
	return newObject
})


var group_year = GroupBy_Object(filteredData, 'year') // returns an array of objects 
var group_year_keys = Object.keys(group_year)

group_year_keys.forEach( (yearItem) =>
{
	group_year[yearItem] = GroupBy_Object(group_year[yearItem], 'month')
	Object.keys(group_year[yearItem]).forEach( (monthItem) =>
	{
		group_year[yearItem][monthItem] = GroupBy_Object(group_year[yearItem][monthItem], 'week')
		Object.keys(group_year[yearItem][monthItem]).forEach( (weekItem) =>
		{
			let newObject = {}
			let item = group_year[yearItem][monthItem][weekItem]
			let count = item.length
			newObject.startDate = item[0].date
			newObject.endDate = item[count - 1].date
			newObject.items = count

			// writing <item> here would only replace the clone of original array. 
			// item = Object.assign([], newObject) // wrong assignment.
			group_year[yearItem][monthItem][weekItem] = Object.assign({}, newObject) // replace the whole original array
		})
	})
})
console.log(group_year[2020][5])


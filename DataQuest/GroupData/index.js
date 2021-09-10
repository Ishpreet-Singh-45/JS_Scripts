const groupBy = require('./GroupBy')




var data = 
[
	{
		"date": "12/31/2019",
		"label": "09:30 AM",
		"volume": 6387,
		"high": 45.09,
		"priceChangePercent": -6.55,
		"volumeChangePercent": 206.92
	},
	{
		"date": "03/11/2019",
		"label": "09:35 AM",
		"volume": 5562,
		"high": 45.81,
		"priceChangePercent": -5.06,
		"volumeChangePercent": 167.28
	},
	{
		"date": "08/05/2019",
		"label": "09:45 AM",
		"volume": 2643,
		"high": 45.88,
		"priceChangePercent": -4.91,
		"volumeChangePercent": 27.01
	},
	{
		"date": "03/11/2019",
		"label": "09:35 AM",
		"volume": 5562,
		"high": 45.81,
		"priceChangePercent": -5.06,
		"volumeChangePercent": 167.28
	}
]


// get the Week count of specified date
function getWeekCount(date)
{
	var oneJan = new Date(date.getFullYear(), 0, 1) // get the January 1 Date

	var numberOfDays = Math.floor( (date - oneJan) / (24 * 60 * 60 * 1000) )

	var weekCount = Math.ceil( (date.getDate() + 1 + numberOfDays) / 7)

	return weekCount
}



var newArray = []
var weekObject = {}

data.forEach( (object) =>
{
	const weekCount = getWeekCount(new Date(object.date))
	var newObject = {}
	newObject.startDate = object.date
	newObject.count = 0
	
	if(weekObject.weekCount)
	{
		weekObject.weekCount.count += 1
		console.log(weekObject.weekCount.count)
	}else
	{
		weekObject[weekCount] = newObject
		console.log(weekObject.weekCount)

	}
	newArray.push(weekObject)


})
console.log(weekObject)
const data = require('./RawData.json').data	// Raw Data

// const data = require('./roughData2.json').data	// Alias of Raw Data with small samples

const moment = require('moment')

const user_input_date = "03/27/2020"
const user_input_time = "13:05"	// can be in 24 hr or 12 hr format(in conjunction with AM or PM)
let minutes = (user_input_time.split(' '))[0].split(':')[1]

// console.log(time)

const filteredData = data.map( (item) =>
{
	const newObject = {}
	newObject.date = item.date
	newObject.time = item.label
	return newObject
})

// console.log(filteredData)

const E0Value = filteredData.findIndex( (item) =>
{
	return ( 
		moment(new Date(`${item.date}, ${item.time}`)).format('MM/DD/YYYY, hh:mm A') == (
			moment(new Date(`${user_input_date}, ${user_input_time}`)).minute( 
			Number(minutes) % 5 < 3 ? Number(minutes) - (Number(minutes) % 5) : 
			Number(minutes) + (5 - Number(minutes) % 5)
		).format('MM/DD/YYYY, hh:mm A') )
	)
})

console.log('E0Value: ', E0Value)


if(E0Value !== -1)
{
	negValues = filteredData.slice(0, E0Value).reverse()
	negValues = negValues.map( (item, itemIndex) =>
	{
		return 'E-' + (itemIndex + 1)
	})
	negValues.reverse()

	posValues = filteredData.slice(E0Value)
	posValues = posValues.map( (item, itemIndex) =>
	{
		return 'E' + itemIndex
	})


	let i = 1
	const fA = filteredData.map( (object, index) =>
	{
		if(index < E0Value)
		{
			object.eventValue = negValues[index]
		}else if ( index > E0Value)
		{
			object.eventValue = posValues[i]
			i++
		}else
		{
			object.eventValue = 'E0'
		}
		object.time = moment(new Date(`${object.date}, ${object.time}`)).format('HH:mm')
	})

	console.log('Final Array: ', filteredData)	// Output: finalArray

}else
{
	console.log('Value Not Found')
}



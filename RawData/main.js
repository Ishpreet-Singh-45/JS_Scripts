const GroupBy = require('./GroupBy')
const data = require('./RawData.json')

// const data = require('./roughData.json')


function getWeekCount(date)
{
	let oneJan = new Date(date.getFullYear(), 0, 1) // get the January 1 date of current year

	// divide the difference with 8640000 to get no. of days
	let noOfDays = (date - oneJan) / (24 * 60 * 60 * 1000) 

	return weekCount = Math.ceil( (date.getDate() + 1 + noOfDays) / 7 )
}





// const group = groupBy(data, 'date') // returns object
// const groupKeys = Object.keys(group).sort()

// let calc = 0;
// let total = data.length

// const finalArray = []

// groupKeys.forEach( (item) =>
// {
// 	const newObject = {}

// 	console.log(group[item])
// 	let week = getWeekCount(new Date(String(item)))

// 	let count = group[item].length
// 	calc += count
// 	newObject[week] = {startDate: item, week: week, count: count}
// 	// if(! newObject[week])

// 	finalArray.push(newObject) 
// })
// //console.log(finalArray)
// // const finalGroup = GroupBy(finalArray, )
// // for(let i=0;i<finalArray.length;i++){
// // 	if(finalArray[i]['1']){
// // 		console.log(finalArray)
// // 	}
// // }
// // finalArray.map((i,k)=>{
// // 	console.log(i['1'])
// // })

// // function grou(data, key) {
// //  return data.reduce((acc, obj) => {
// //  const k = obj[key];
// //  //console.log(obj)
// //  if (!acc[k]) {
// //  acc[k] = []
// //  }
// //  acc[k].push(obj)
// //  return acc;
// //  }, {})
 
// // }
// // var ooo={};
// // var arrre=[]
// // const abc=grou(finalArray,'week')
// // //console.log(abc['21'])

// // 	arrre.push({starting_date:abc['21'][0].date , final_date:abc['21'][4].date })

// console.log(group)
// // console.log(total)
// // console.log(calc)
// var oo;
// var count=0;
// var d = data.map((i)=>{
// 	oo={}
// 	let date = new Date(i.date)
// 	let oneJan = new Date(date.getFullYear(), 0, 1) // get the January 1 date of current year

// 	// divide the difference with 8640000 to get no. of days
// 	let noOfDays = (date - oneJan) / (24 * 60 * 60 * 1000) 

// weekCount = Math.ceil( (date.getDate() + 1 + noOfDays) / 7 )
// 	if(weekCount){
// 		oo[weekCount]=i;
// 	count++
// 	}
// 	oo.count=count;
// 	// console.log(oo)
// })


// First, filter the data - whatever is required
const filteredData = data.map( (item) =>
{
	const newObject = {}
	newObject.date = item.date
	newObject.week = getWeekCount(new Date(String(item.date)))
	return newObject
})

// console.log(filteredData) // test if it extracts the requirements

// group the data acc to week number
const group = GroupBy(filteredData, 'week') // returns an object
const groupKeys = Object.keys(group) // extract its all keys

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
})

console.log(finalArray)
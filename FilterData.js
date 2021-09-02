
const Data = require('./Data.json')


function groupBy(list, keyGetter) 
{
	const map = new Map();
	list.forEach((item) => {
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


const pets = [
{type:"Dog", name:"Spot"},
{type:"Cat", name:"Tiger"},
{type:"Dog", name:"Rover"}, 
{type:"Cat", name:"Leo"}
];

const d = [4, 5, 23, 34, 5]


const group = grouped(pets, p => p.type)
// console.log(group)


a=[1,2,3,4,5]
console.log(typeof a)
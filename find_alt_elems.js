/**
 *  Find elements not included in sample string
*/


const sampleData = [
	{
		"symbol": "AMD",
		"date": "2020-01-06",
		"time": "09:42"
	},
	{
		"symbol": "ADBE",
		"date": "2020-09-02",
		"time": "11:57"
	},
	{
		"symbol": "TEAM",
		"date": "2020-04-15",
		"time": "09:42"
	},
	{
		"symbol": "ADSK",
		"date": "2020-07-07",
		"time": "11:57"
	},
	{
		"symbol": "CTSH",
		"date": "2020-02-17",
		"time": "09:42"
	},
	{
		"symbol": "MRVL",
		"date": "2020-06-15",
		"time": "11:57"
	}
]

const sampleString = [
	'CTSH','ADBE'
]

arr = []
for (obj of sampleData)
{
	if(sampleString.indexOf(obj.symbol) != -1)
	{
		continue;
	}else
	{
		arr.push(obj);
	}
}
console.log(arr)


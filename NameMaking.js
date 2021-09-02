arr = []

function isAlpha(ch)
{
  return /^[A-Z]$/i.test(ch);
}




var string = ("J6 B4 R2 P1 H5 T8 A3 O7".replace(/ +/g, ""))

letters = []; numbers = []

for (let char of string)
{
	console.log(char)
	if(isAlpha(char))
	{
		letters.push(char)
	}else
	{
		numbers.push(char)
	}
}
s = []
emp = ""
for (i in numbers)
{
	s.push([ numbers[i], letters[i] ])
}
s.sort()
s.map((item) =>
{
	emp +=(item[1])
})
console.log(emp)





/*
var a=[];
var b=[];
string = string.replace(/ +/g, "");
string=string.split('')
a.push(string)
console.log(a)
for(let i=0;i<a.length;i+=3){
	a.push(a[i])
}

// a.map((item)=>{
// b.push()
// })

console.log(a)*/

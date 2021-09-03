function fibo(n)
{
	let a =0, b=1, i = 0
	console.log(a + ' ')
	while(i < n)
	{
		console.log(b)
		b += a
		a = b
		i++
	}

}	

console.log(isNaN(NaN)) // true


console.log('l' + 4) // true

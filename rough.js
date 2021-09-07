function fibo(n)
{
	// but printing sum of all previous numbers
	// 0 1 1 2 4 8 16 ...
	let a =0, b=1, i = 0
	console.log(a + ' ')
	while(i < n)
	{
		console.log(b)
		a = b
		b += a
		i++
	}

}
fibo(10)
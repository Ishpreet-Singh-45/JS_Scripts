
function largest_common_substring(arr)
{
	const sub_part1 = arr[0], sub_part2 = arr[1], l = sub_part1.length
	let i = 0
	while((i < l) && (sub_part1.charAt(i) === sub_part2.charAt(i)))
	{
		i++
	}
	return sub_part1.substring(0, i)
}

console.log(largest_common_substring(['g2ogle', 'google']))
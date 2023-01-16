function palindrome(str) {
	var newStr = [];
	var s=str.toUpperCase()
	s
	var s=str.toUpperCase().charCodeAt(0)
	s
	for (let i = 0; i < str.length; i++) {
		if (
			(str.toUpperCase().charCodeAt(i) >= 65 &&
				str.toUpperCase().charCodeAt(i) <= 90) ||
			(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57)
		)
			newStr.push(str[i].toUpperCase());
	}
	let miStr = newStr.join("");
	return newStr.reverse().join("") === miStr ? true : false;
}

console.log(palindrome("tu4eye4ut"));

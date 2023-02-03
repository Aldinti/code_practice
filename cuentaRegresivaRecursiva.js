function cuenta(n) {
	if (n < 1) return [];
	const arr = cuenta(n - 1);
	arr.unshift(n);
	return arr;
}

function repeat() {
	var repeateds = document.querySelectorAll('[repeat]');
	repeateds.forEach(function (repeated, index) {
		console.log(repeated + " " + repeated.getAttribute('repeat'));
		var count = +repeated.getAttribute('repeat')
		while (count-- > 1) {
			var clone = repeated.cloneNode()
			var parent = repeated.parentNode;
			parent.insertBefore(clone, repeated);
		}
	});
}
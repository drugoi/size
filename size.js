var size = function() {
	var documentWidth = window.innerWidth;
	var documentHeight = window.innerHeight;
	document.getElementById('width').innerHTML = documentWidth + 'пк';
	document.getElementById('height').innerHTML = documentHeight + 'пк';
};

window.onload = size;
window.onresize = size;
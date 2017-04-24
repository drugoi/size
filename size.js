var size = function() {
	var documentWidth = window.innerWidth;
	var documentHeight = window.innerHeight;
	document.querySelector('.size__width').innerHTML = documentWidth + 'пк';
	document.querySelector('.size__height').innerHTML = documentHeight + 'пк';
	document.querySelector('.size__all').innerHTML = documentWidth + 'x' + documentHeight;
};

window.onload = size;
window.onresize = size;
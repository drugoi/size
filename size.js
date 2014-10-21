var size = function() {
		var windowWidth = window.outerWidth;
		var windowHeight = window.outerHeight;
		document.getElementById('width').innerHTML = windowWidth + 'пк';
		document.getElementById('height').innerHTML = windowHeight + 'пк';		
};

window.onload = size;
window.onresize = size;
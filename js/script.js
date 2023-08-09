document.querySelector('.experts__video img').addEventListener('click', function () {
	this.className = 'experts__video active';
	document.querySelector('.experts__video iframe').src += '?autoplay=1';
});
(function(win, doc) {
	doc.documentElement.style.fontSize = doc.documentElement.clientWidth * 100 / 1080 + 'px';
	win.onresize = function() {
	doc.documentElement.style.fontSize = doc.documentElement.clientWidth * 100 / 1080 + 'px';
	};
})(window, document);

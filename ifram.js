var iframeGame = document.getElementById('game');
iframeGame.onload = function() {
    iframeGame.style.height = iframeGame.contentWindow.document.body.scrollHeight + 'px';
};

var iframeLib = document.getElementById('lib');
iframeLib.onload = function () {
    var scaleFactor = 0.75;
    var contentHeight = iframeLib.contentWindow.document.body.scrollHeight;
    iframeLib.style.height = contentHeight / scaleFactor + 'px';
};


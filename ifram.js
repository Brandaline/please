const iframe = document.getElementById('game');
iframe.onload = function() {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
};
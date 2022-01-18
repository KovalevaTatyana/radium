document.onclick = function (clickmause) {
    document.getElementById('text').hidden = true;
};

document.onkeydown = function (clickspace) {
    if (clickspace.keyCode == '32') {
        document.getElementById('text').remove();
    }
};
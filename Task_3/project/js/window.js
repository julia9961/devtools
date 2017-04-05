function openWindow() {
    var width = document.getElementById('width').value || 100;
    var height = document.getElementById('height').value || 100;

    var newWindow = window.open('', 'example', 'width=' + width + ",height=" + height);
        newWindow.document.write("Высота: " + height + "</br>Ширина:" + width);
}
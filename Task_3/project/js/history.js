window.addEventListener("DOMContentLoaded", ready);
function ready() {
    var count = document.getElementById("history");
    var countVal = window.history.length;
    count.innerHTML = 'History length: ' + countVal;
}
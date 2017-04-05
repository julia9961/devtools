function Location(){

    this.showData = function(){
        var fields = {
            "hash": "возвращает анкор URL адреса (после #)",
            "search": "возвращает часть URL, после вопросительного знака, включая сам знак",
            "hostname": "возвращает имя хоста URL",
            "href": "возвращает весь URL адрес страницы",
            "pathname": "возвращает путь к URL-адресу, т.е. после имени хоста"
        };

        for(var prop in fields){
            var p = document.createElement('p');
            var span = document.createElement('span');

            p.innerText = prop + ": ";
            p.setAttribute("title", fields[prop]);
            span.innerText = location[prop];

            p.appendChild(span);
            document.body.appendChild(p);
        }
    }
}

function Screen(){

    this.showData = function(){
        var fields = {
            "availHeight": "доступная высота экрана в пикселях",
            "availWidth": "доступная ширина экрана в пикселях",
            "colorDepth": "качество цветопередачи",
            "height": "высота экрана в пикселях",
            "pixelDepth": "количество битов на пиксель экрана",
            "width": "ширина экрана в пикселях"
        };

        for(var prop in fields){
            var p = document.createElement('p');
            var span = document.createElement('span');

            p.innerText = prop + " (" + fields[prop] + "): ";
            span.innerText = screen[prop];

            p.appendChild(span);
            document.body.appendChild(p);
        }
    }
}

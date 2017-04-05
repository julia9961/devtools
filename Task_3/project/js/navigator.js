function Navigator() {

    var sUsrAg = navigator.userAgent;

    this.showData = function () {
        if (sUsrAg.indexOf("Chrome") > -1) {

            var userAgent = document.getElementById("userAgent");
            var appVersion = document.getElementById("appVersion");

            userAgent.innerText = sUsrAg;
            appVersion.innerText = navigator.appVersion;

            Chrome.style.display = 'block';

        } else if (sUsrAg.indexOf("Firefox") > -1) {
            var appName = document.getElementById("appName");
            var cookieEnabled = document.getElementById("cookieEnabled");

            appName.innerText = navigator.appName;
            cookieEnabled.innerText = navigator.cookieEnabled;

            Firefox.style.display = 'block';

        } else if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
            var platform = document.getElementById("platform");
            var geolocation = document.getElementById("geolocation");

            platform.innerText = navigator.platform;
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    geolocation.innerText = position.coords.latitude + " " + position.coords.longitude;
                });
            } else {
                console.log("геолокация недоступна");
            }
            IE.style.display = 'block';
        }
    }

}




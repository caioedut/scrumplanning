(function () {

    var app = angular.module('app', ['ui.router', 'pascalprecht.translate']);

    app.run(function ($rootElement) {
        $rootElement.find('body').removeClass('invisible');
        setAndroidStatusBarColor();
    });

    app.factory('$storage', function () {
        return {
            reset: function () {
                localStorage.clear();
            },
            create: function (key, value) {
                if (!localStorage.hasOwnProperty(key)) {
                    this.set(key, value);
                }
            },
            set: function (key, value) {
                if (typeof value === 'object') {
                    value = JSON.stringify(value);
                }
                window.localStorage.setItem(key, value);
                return this;
            },
            get: function (key) {
                return window.localStorage.getItem(key);
            },
            getJSON: function (key) {
                var value = this.get(key) + "";
                var json = JSON.parse(value);

                return json || null;
            }
        }
    });

    app.constant('navs', [
        {
            route: {
                name: 'cards',
                url: '/cards/:type',
                controller: 'cardsCtrl',
                templateUrl: 'page/cards/cards.html'
            }
        },
        {
            name: 'CARDS.POKER',
            sref: 'cards({type: "poker"})',
            url: '/cards/poker',
            icon: 'view_module'
        },
        {
            name: 'CARDS.FIBONACCI',
            sref: 'cards({type: "fibonacci"})',
            url: '/cards/fibonacci',
            icon: 'confirmation_number'
        },
        {
            name: 'CARDS.NATURAL',
            sref: 'cards({type: "natural"})',
            url: '/cards/natural',
            icon: 'format_list_numbered'
        },
        {
            name: 'CARDS.TSHIRT',
            sref: 'cards({type: "tshirt"})',
            url: '/cards/tshirt',
            icon: 'accessibility'
        },
        {
            name: 'CARDS.EMOJI',
            sref: 'cards({type: "emoji"})',
            url: '/cards/emoji',
            icon: 'tag_faces'
        },
        {
            name: 'CARDS.CUSTOM',
            sref: 'cards({type: "custom"})',
            url: '/cards/custom',
            icon: 'textsms'
        },
        null, // Divider
        {
            name: 'SETTINGS.TITLE',
            sref: 'settings',
            url: '/settings',
            icon: 'settings',
            route: {
                name: 'settings',
                url: '/settings',
                controller: 'settingsCtrl',
                templateUrl: 'page/settings/settings.html'
            }
        },
        /** GOOGLE APP STORE NÃO PERMITE USAR :\
        {
            name: 'DONATE.TITLE',
            sref: 'donate',
            url: '/donate',
            icon: 'card_giftcard',
            route: {
                name: 'donate',
                url: '/donate',
                controller: 'donateCtrl',
                templateUrl: 'page/donate/donate.html'
            }
        }
         **/
    ]);

})();

// Functions
String.prototype.toCamelCase = function () {
    return this.replace(/-/g, ' ').replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
};

Element.prototype.requestFullScreen = Element.prototype.requestFullScreen || Element.prototype.mozRequestFullScreen || Element.prototype.webkitRequestFullScreen;
document.cancelFullScreen = document.cancelFullScreen || document.mozCancelFullScreen || document.webkitCancelFullScreen;

function setAndroidStatusBarColor() {
    if (window.cordova && window.cordova.platformId === 'android' && window.StatusBar) {
        var temp = document.createElement('div');
        temp.classList.add('bg-' + localStorage.getItem('color') + '-8');
        document.body.appendChild(temp);
        var rgb = window.getComputedStyle(temp, null).getPropertyValue('background-color');
        document.body.removeChild(temp);

        StatusBar.backgroundColorByHexString(rgbToHex(rgb));
    }
}

function setFullscreen() {
    var fullscreen = parseInt(localStorage.getItem('fullscreen'))
    if (window.cordova && window.cordova.platformId === 'android' && window.StatusBar) {
        fullscreen ? StatusBar.hide() : StatusBar.show();
    } else {
        fullscreen ? document.documentElement.requestFullScreen() : document.cancelFullScreen();
    }
}

function rgbToHex(col) {
    if (col.charAt(0) === 'r') {
        col = col.replace('rgb(', '').replace(')', '').split(',');
        var r = parseInt(col[0], 10).toString(16);
        var g = parseInt(col[1], 10).toString(16);
        var b = parseInt(col[2], 10).toString(16);
        r = r.length === 1 ? '0' + r : r;
        g = g.length === 1 ? '0' + g : g;
        b = b.length === 1 ? '0' + b : b;
        return '#' + r + g + b;
    }
}
angular.module('app').controller('mainCtrl', function ($scope, navs, $storage, $translate, $filter) {

    $scope.navs = navs;

    $scope.page = {
        title: 'APP_TITLE',
        menu: null
    };

    $scope.colors = ['red', 'pink', 'purple', 'deeppurple', 'indigo', 'blue', 'lightblue', 'teal', 'green', 'deeporange', 'brown', 'grey', 'bluegrey'];

    $scope.setLanguage = function (lang) {
        $scope.lang = lang || $storage.get('lang') || navigator.language.toLowerCase() || 'en';
        $storage.set('lang', $scope.lang);
        $translate.use($scope.lang);
    };

    $scope.setCurrency = function (currency) {
        $scope.currency = currency || $storage.get('currency') || 'USD';
        $storage.set('currency', $scope.currency);
    };

    $scope.setBackgroundColor = function (color) {
        $scope.color = color || $storage.get('color') || 'green';
        $storage.set('color', $scope.color);

        setAndroidStatusBarColor();
    };

    $scope.setFullscreen = function (bool) {
        if (typeof bool !== 'undefined') {
            bool = bool == 1 ? 1 : 0;
        }

        $scope.fullscreen = typeof bool !== 'undefined' ? bool : parseInt($storage.get('fullscreen') || 0);
        $storage.set('fullscreen', $scope.fullscreen);

        setFullscreen();
    };
    
    $scope.setFrontFirst = function (bool) {
        if (typeof bool !== 'undefined') {
            bool = bool == 1 ? 1 : 0;
        }

        $scope.frontfirst = typeof bool !== 'undefined' ? bool : parseInt($storage.get('frontfirst') || 0);
        $storage.set('frontfirst', $scope.frontfirst);
    };

    $scope.setBackgroundImage = function (file) {
        if (file) {
            if (file.size > 4194304) {
                (new Toast($filter('translate')('SETTINGS.IMAGE.FILESIZE'))).show();
            } else {
                readFile(file, function (e) {
                    cssBgImg(e.target.result);
                    $scope.$apply();
                });
            }
        } else if ($storage.get('backgroundImage')) {
            cssBgImg($storage.get('backgroundImage'));
        } else {
            delete $scope.backgroundImage;
        }
    };

    $scope.removeBackgroundImage = function () {
        delete $scope.backgroundImage;
        delete localStorage.backgroundImage;
        document.querySelector('head #bgImg').innerHTML = '';
    };

    function readFile(file, fn) {
        var reader = new FileReader();
        reader.onload = fn;
        reader.readAsDataURL(file);
    }

    function cssBgImg(img_data) {
        var $bg_img = document.querySelector('head #bgImg');

        if (!$bg_img) {
            $bg_img = document.createElement('style');
            $bg_img.id = 'bgImg';
            document.querySelector('head').appendChild($bg_img);
        }

        $bg_img.innerHTML = '.card-bg {background-image: url(' + img_data + ')!important}';

        $scope.backgroundImage = img_data;
        $storage.set('backgroundImage', img_data);
    }

    // Defaults
    $scope.defaultSettings = function (resetStorage) {
        resetStorage ? $storage.reset() : null;

        $scope.setLanguage();
        $scope.setCurrency();
        $scope.setBackgroundColor();
        $scope.setBackgroundImage();
        $scope.setFullscreen();
        $scope.setFrontFirst();
    };

    $scope.defaultSettings();
});
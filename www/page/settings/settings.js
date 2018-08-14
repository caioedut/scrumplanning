angular.module('app').controller('settingsCtrl', function ($scope) {

    $scope.page.title = 'SETTINGS.TITLE';
    $scope.page.menu = '/settings';

    $scope.langs = {
        'en': 'English',
        'es': 'Español',
        'nl': 'Nederlands',
        'pt-br': 'Português (Brasil)'
    };

});
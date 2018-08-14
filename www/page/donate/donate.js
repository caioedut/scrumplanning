angular.module('app').controller('donateCtrl', function ($scope) {

    $scope.page.title = 'DONATE.TITLE';
    $scope.page.menu = '/donate';

    $scope.currencies = {
        BRL: 'BRL (R$)',
        EUR: 'EUR (€)',
        USD: 'USD ($)'
    };

});
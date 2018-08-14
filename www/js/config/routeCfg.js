angular.module('app').config(function ($stateProvider, $urlRouterProvider, navs) {

    $urlRouterProvider.otherwise('/cards/');

    navs.forEach(function (nav) {
        if (nav && nav.route) {
            $stateProvider.state(nav.route);
        }
    });

});
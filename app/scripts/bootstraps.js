/**
 * Created by taipham.it on 8/18/2014.
 */

'use strict'

angular.module('myApp', [
    'ui.router'
]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/index.html');
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('index', {
            controller: 'MainCtrl',
            url: '/index.html',
            templateUrl: 'views/main.html'
        })
        .state('discovery', {
            url: '/discovery.html',
            templateUrl: 'views/discovery.html',
            controller: 'DiscoveryCtrl'
        })
        .state('detail', {
            url: '/detail/:id',
            templateUrl: 'views/detail-products.html',
            controller: 'DetailCtrl'
        })
}]).run(['$rootScope', '$state', 'appConfig', function ($rootScope, $state, appConfig) {

    $rootScope.goToPage = function (state, id) {
        if (!id) {
            $state.go(state);
        } else {
            $state.go(state, id);
        }
    };

    $rootScope.getUrlImages = function (item) {
        return appConfig.mediaHost + item;
    };

}]).constant('appConfig', {
    apiHost: 'http://chris-ictu.tk:8000',
    mediaHost: 'http://vsoft.vn:1235'
})
(function () {
    'use strict';

    angular.module('app')
        .config(configModule);

    configModule.$inject = ['$stateProvider', '$urlRouterProvider', '$uibTooltipProvider'];

    function configModule($stateProvider, $urlRouterProvider, $uibTooltipProvider) {
        configRoutes($stateProvider, $urlRouterProvider);
        configBootstrapUI($uibTooltipProvider);
    }

    function configRoutes($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/views/layout.html',
                controller: 'EditorController'
            });

        $urlRouterProvider.otherwise('/');
    }

    function configBootstrapUI($uibTooltipProvider) {
        $uibTooltipProvider.options({
            placement: 'bottom'
        });
    }

})();
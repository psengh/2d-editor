(function () {

    'use strict';

    angular.module('app')
        .directive('resize', resize);

    resize.$inject = ['$log', '$window'];

    function resize($log, $window) {
        return function (scope, element) {

            $log.debug('resize - link()');

            const HEADER_HEIGHT = 101;

            var window = angular.element($window);

            scope.getWindowDimensions = function () {
                return {
                    'width': $window.innerWidth,
                    'height': $window.innerHeight
                };
            };

            scope.$watch(scope.getWindowDimensions, function (newValue) {

                scope.style = function () {

                    var sidebarWidth = document.getElementById('sidebar-left-container').clientWidth;

                    return {
                        'width': (newValue.width - (sidebarWidth)) + 'px',
                        'height': (newValue.height - HEADER_HEIGHT) + 'px'
                    };
                };

            }, true);


            window.bind('resize', function () {
                scope.$apply();
            });

        }
    }

})();
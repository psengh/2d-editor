(function () {

  'use strict';

  angular.module('app')
    .service('editorService', editorService);

  editorService.$inject = ['$http'];

  function editorService($http) {

    var service = this;

    service.getAll = function () {
      return $http.get('api/diagrams');
    }
    service.get = function (id) {
      return $http.get('api/diagram/' + id);
    }
    service.insert = function (obj) {
      return $http.post('api/diagram', obj);
    }

    return service;

  }

})();

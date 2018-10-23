angular.module('contatooh', ['ngRoute', 'ngResource'])
  .config(function ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/contatos' });

    $routeProvider.when('/contatos', {
      templateUrl: 'partials/contatos.html',
      controller: 'ContatosController'
    });

    $routeProvider.when('/contatos/:id', {
      templateUrl: 'partials/contato.html',
      controller: 'ContatoController'
    });
  });

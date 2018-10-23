angular.module('contatooh')
  .controller('ContatosController', function ($scope, $resource) {
    $scope.filter = '';

    $scope.contatos = [];

    const Contato = $resource('/contatos');
    
    function buscaContatos () {
      Contato.query(
        function (contatos) {
          $scope.contatos = contatos;
        },
        function (error) {
          console.log('Não foi possível obter os dados do servidor');
          console.log(error);
        }
      );
    }
  });

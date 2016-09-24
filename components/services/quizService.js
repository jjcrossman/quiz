angular.module( 'quizApp' ).service( 'quizService', function ( $http, $q ) {

  var test = "THIS IS THE SERVICE";

  this.getTest = function () {
    return test;
  };

} );

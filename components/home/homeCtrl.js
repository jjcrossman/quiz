angular.module( 'quizApp' ).controller( 'homeCtrl', function ( $scope, quizService ) {

  $scope.test = "THIS IS HOME CTRL";

  $scope.getTest = quizService.getTest();

} );

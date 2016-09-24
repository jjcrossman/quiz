angular.module( 'quizApp' ).controller( 'quizCtrl', function ( $scope, quizService ) {

  $scope.test = "THIS IS QUIZ CTRL";

  $scope.getTest = quizService.getTest();

} );

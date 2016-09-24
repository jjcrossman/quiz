angular.module( 'quizApp' ).controller( 'resultsCtrl', function ( $scope, quizService ) {

  $scope.test = "THIS IS RESULTS CTRL";

  $scope.getTest = quizService.getTest();


} );

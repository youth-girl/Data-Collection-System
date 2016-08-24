(function(){
    angular.module('app.base',[])
        .controller('BaseController',BaseController);

    BaseController.$inject = ['$scope'];

    function BaseController($scope){
        $scope.$on('activeName',function(event,data){

        });
    }
})();
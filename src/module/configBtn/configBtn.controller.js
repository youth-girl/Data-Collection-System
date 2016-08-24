(function(){
    angular.module('app.configBtn',[])
        .controller('ConfigBtnController',ConfigBtnController);

    ConfigBtnController.$inject = ['$scope'];

    function ConfigBtnController($scope){
        var vm = this;
        vm.configIsSuccess = false;
        vm.dataIsSuccess = false;
        vm.communcationIsSuccess = false;
    }
})();
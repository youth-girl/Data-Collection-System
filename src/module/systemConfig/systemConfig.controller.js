(function(){
    angular.module('app.systemConfig',[])
        .controller('SystemConfigController',SystemConfigController);
    SystemConfigController.$inject = ['$scope','$http'];

    function SystemConfigController($scope, $http){
        var vm = this,
            portRequest,
            lanRequest;

        portRequest = {
            method:'GET',
            url:'debugAPI/portConfig.json'
        };
        lanRequest={
            method:'GET',
            url:'debugAPI/lanConfig.json'
        };
        $http(portRequest)
            .then(portSuccess,portError);

        function portSuccess(response){
            if(response.status == 200){
                var data = response.data;
                vm.baudRate = data.baudRate;
                vm.communication = data.communication;
                vm.dataBit = data.dataBit;
                vm.stopBit = data.stopBit;
            }
        }
        function portError(errorMes){
            console.log(errorMes);
        }
        $http(lanRequest)
            .then(lanSuccess,lanError);
        function lanSuccess(response){
            if(response.status == 200){
                var data = response.data;
                vm.autoGet = data.autoGet;
                vm.handMoveGet = data.handMoveGet;
                vm.ip = data.ip;
                vm.subnetMask = data.subnetMask;
                vm.defaultGetway = data.defaultGetway;
            }
        }
        function lanError(errorMes){
            console.log(errorMes);
        }
    }
})();
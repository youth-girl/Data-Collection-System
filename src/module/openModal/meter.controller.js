(function(){
    angular.module('app.meter',[])
        .controller('MeterController', MeterController);
    MeterController.$inject = ['$scope', '$http', 'param', '$uibModalInstance'];

    function MeterController($scope, $http, param, $uibModalInstance){
        var vm = this,
            eleMeter,
            currentMeter,
            meter = [];
        console.log(param.type);
        vm.meter = meter;
        vm.idNumber = 1;
        vm.type = param.type;
        vm.close = close;
        eleMeter = {
            method:'GET',
            url:'debugAPI/electricity.meter.json'
        };
        currentMeter = {
            method:'GET',
            url:'debugAPI/water.meter.json'
        };
        $http(eleMeter)
            .then(success, error);
        $http(currentMeter)
            .then(success, error);

        function close(){
            $uibModalInstance.close();
        }
        function success(response){
            if(response.status = 200){
                meter.push(response.data);
            }
        }
        function error(mes){
            console.log("请求错误");
        }

    }
})();
(function(){
    angular.module('app.dataShow',[])
        .controller('DataShow',DataShow);
    DataShow.$inject = ['$scope', '$uibModal'];/*,'$uibModal', '$uibModal'*/

    function DataShow($scope, $uibModal){/*, $uibModal*/
        var vm = this;
        vm.data = [
            {
                "id":0,
                "type":"电表",
                "other":"正常"
            },
            {
                "id":1,
                "type":"水表",
                "other":"正常"
            }
        ];
        vm.openDetail = openDetail;

        function openDetail($index){
            var meter = {
                templateUrl:'module/openModal/meter.html',
                controller:'MeterController',
                controllerAs:'vm',
                resolve:{
                    param:{
                        'type':vm.data[$index].type
                    }
                },
                backdrop:'static'
            };
            $uibModal.open(meter);
        }
    }
})();
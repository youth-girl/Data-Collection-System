(function(){
    angular.module('app.dataShow',[])
        .controller('DataShow',DataShow);
    DataShow.$inject = ['$scope'];

    function DataShow($scope){
        var vm = this;
        vm.data = [
            {
                "date":"2016/08/25",
                "type":"电表",
                "other":"220kw.h"
            }
        ]

    }
})();
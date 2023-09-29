(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyCtrl = this;

        toBuyCtrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

        toBuyCtrl.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtCtrl = this;

        boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [
            { name: 'cookies', quantity: 10 },
            { name: 'chips', quantity: 5 },
            { name: 'apples', quantity: 8 },
            { name: 'bananas', quantity: 6 },
            { name: 'soda', quantity: 2 }
        ];
        var boughtItems = [];

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.buyItem = function (index) {
            var item = toBuyItems.splice(index, 1)[0];
            boughtItems.push(item);
        };
    }
})();

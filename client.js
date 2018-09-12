const foodApp = angular.module('FoodApp', []);

foodApp.controller('FoodController', function (){
    let self = this;
    self.greet = function() {
        console.log('Angular Ready');
    }
})
const foodApp = angular.module('FoodApp', []);

foodApp.controller('FoodController', function (){
    let self = this;
    self.foods = ['Baked Beans', 'Chocolate Fishsticks', 'Soft Boiled Egg'];
    self.inputFood = '';
    self.addFood = function(foodName) {
        self.foods.push(foodName);
    }
})
const foodApp = angular.module('FoodApp', []);

foodApp.controller('FoodController', function () {
    let self = this;
    self.foods = [{ name: 'Baked Beans', deliciousness: 50 }, { name: 'Chocolate Fishsticks', deliciousness: 95 }, { name: 'Soft Boiled Egg', deliciousness: 66 }];
    self.inputFood = '';
    self.inputDelicous = 0;
    self.addFood = function (foodName, delicious) {
        if (Number(delicious) > 0 && Number(delicious) <= 100) {
            self.foods.push({
                name: foodName,
                deliciousness: delicious
            }
            );
        }
        else {
            alert('Please enter inputs in correct format!');
            self.inputFood = '';
            self.inputDelicious = '';
        }
    }
})
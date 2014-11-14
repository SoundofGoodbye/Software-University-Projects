/////////////////////////////////////////////////////////////////////////////////////////////////
// For the purpose of the exam everything should be written in one file and in one function.////
/////////////////////////////////////////////////////////////////////////////////////////////////
function processRestaurantManagerCommands(commands) {
    'use strict';

    var RestaurantEngine = (function () {

        /**
         * Constants used sort of as an enum. Writing the variable name (uppercassed) will return the 'value'.
         * @type {{UNIT_GRAMS: string, UNIT_MILLILITERS: string}}
         */
        var globalConstants = {
            UNIT_GRAMS: 'g',
            UNIT_MILLILITERS: 'ml'
        };

        var _restaurants, _recipes;

        function initialize() {
            _restaurants = [];
            _recipes = [];
        }

        /**
         * Can be used to check the type of an object.
         * @type {{Boolean: string, Number: string, String: string, Object: string, Undefined: string, Function: string}}
         */
        // const Type
        var Types = {
            Boolean: typeof true,
            Number: typeof 0,
            String: typeof "",
            Object: typeof {},
            Undefined: typeof undefined,
            Function: typeof function () {
            }
        };

        // Create method extends for all objects.
        Object.prototype.extends = function (parent) {
            if (parent) {
                this.prototype = Object.create(parent.prototype);
                //Mind here to create a new constructor in the prototype or else
                // if it is just this.constructor it may not have such a function or some other
                // undesired effect may occur.
                this.prototype.constructor = this;
            }
        };

        Object.prototype.validateString = function (value, valueName) {
            if (!value.trim()) {
                throw new Error(valueName + " should not be empty string or null.")
            }
        };

        var Restaurant = (function () {

            //////////////////////////////////////
            /////////Getters and setters//////////
            //////////////////////////////////////
            Restaurant.prototype.setName = function (name) {
                this.validateString(name, "name");
                this._name = name;
            };

            Restaurant.prototype.getName = function () {
                return this._name;
            };

            Restaurant.prototype.setLocation = function (location) {
                this._location = location;
            };

            Restaurant.prototype.getLocation = function () {
                return this._location;
            };

            Restaurant.prototype.getRecipes = function () {
                return this._recipes;
            };
            ///////////////////////////////////////////

            function Restaurant(name, location) {
                this.setName(name);
                this.setLocation(location);
                /**
                 * Every new Restaurant should hold an array of it's own recipes.
                 * @type {Array}
                 * @private
                 */
                this._recipes = [];
            };

            var printRecipe = function (type, recipes) {
                var result = "~~~~~ ";
                if (type === Drink) {
                    result += "DRINKS";
                } else if (type === Salad) {
                    result += "SALADS";
                } else if (type === MainCourse) {
                    result += "MAIN COURSES";
                } else if (type === Dessert) {
                    result += "DESSERTS";
                } else {
                    throw new Error("Invalid recipe type");
                }

                result += " ~~~~~\n";

                recipes.forEach(function (recipe) {
                    result += recipe.toString();
                });

                return result;
            }

            var formatRecipes = function () {
                var drinks, salads, mainCourses, desserts;

                drinks = getRecipesByType.call(this, Drink);
                salads = getRecipesByType.call(this, Salad);
                mainCourses = getRecipesByType.call(this, MainCourse);
                desserts = getRecipesByType.call(this, Dessert);

                var result = '';
                if (drinks.length > 0) {
                    result += printRecipe(Drink, drinks);
                }

                if (salads.length > 0) {
                    result += printRecipe(Salad, salads);
                }

                if (mainCourses.length > 0) {
                    result += printRecipe(MainCourse, mainCourses);
                }

                if (desserts.length > 0) {
                    result += printRecipe(Dessert, desserts);
                }
                return result;
            }

            /**
             * Filter and return only the recipes with the wanted type, from the array of recipes.
             * Only the restaurant specific recipes are filtered.
             * @param type
             * @returns {Array.<T>|*}
             */
            var getRecipesByType = function (type) {
                return this.getRecipes().filter(function (recipe) {
                    return recipe instanceof type;
                });
            }

            Restaurant.prototype.printRestaurantMenu = function () {
                var recipeString = "";
                if (this.getRecipes().length == 0) {
                    recipeString = "No recipes... yet\n";
                } else {
                    recipeString += formatRecipes.call(this);
                }
                return this.toString() + recipeString;
            };

            Restaurant.prototype.addRecipe = function (recipe) {
                if (!(recipe instanceof Recipe)) {
                    throw new TypeError("Parameter should be instance of Recipe");
                }

                this.getRecipes().push(recipe);
            };

            Restaurant.prototype.removeRecipe = function (recipe) {
                if (!(recipe instanceof Recipe)) {
                    throw new TypeError("Parameter should be instance of Recipe");
                }
                var index = this.getRecipes().indexOf(recipe);
                this.getRecipes().splice(index, 1);
            }

            Restaurant.prototype.toString = function () {
                return "***** " + this.getName() + " - " +
                    this.getLocation() + " *****\n";
            };

            return Restaurant;
        }());

        var Recipe = (function () {

            Recipe.prototype.setName = function (name) {
                this._name = name;
            };

            Recipe.prototype.getName = function () {
                return this._name;
            };

            Recipe.prototype.setPrice = function (price) {
                this._price = price;
            };

            Recipe.prototype.getPrice = function () {
                return this._price;
            };

            Recipe.prototype.setCalories = function (calories) {
                this._calories = calories;
            };

            Recipe.prototype.getCalories = function () {
                return this._calories;
            };

            Recipe.prototype.setQuantity = function (quantity) {
                this._quantity = quantity;
            };

            Recipe.prototype.getQuantity = function () {
                return this._quantity;
            };

            // Grams/ miligrams etc.
            Recipe.prototype.setUnit = function (unit) {
                this._unit = unit;
            };

            Recipe.prototype.getUnit = function () {
                return this._unit;
            };

            Recipe.prototype.setPrepareTime = function (prepareTime) {
                this._prepareTime = prepareTime;
            };

            Recipe.prototype.getPrepareTime = function () {
                return this._prepareTime;
            };

            Recipe.prototype.toString = function () {
                return "==  " + this.getName() + " == $" + this.getPrice().toFixed(2) + "\n"
                    + "Per serving: " + this.getQuantity() + " " + this.getUnit() + ", "
                    + this.getCalories() + " kcal\n"
                    + "Ready in " + this.getPrepareTime() + " minutes\n";
            }

            function Recipe(name, price, calories, quantity, prepareTime) {
                if (this.constructor === Recipe) {
                    throw new Error("Can't instantiate abstract class Recipe");
                }

                this.setName(name);
                this.setPrice(price);
                this.setCalories(calories);
                this.setQuantity(quantity);
                this.setPrepareTime(prepareTime);
                this.setUnit(globalConstants.UNIT_GRAMS);
            };

            return Recipe;
        }());

        var Drink = (function () {
            function Drink(name, price, calories, quantity, prepareTime, isCarbonated) {
                Recipe.call(this, name, price, calories, quantity, prepareTime);
                this.setIsCarbonated(isCarbonated);
                this.setUnit(globalConstants.UNIT_MILLILITERS);
            };

            Drink.extends(Recipe);

            Drink.prototype.setIsCarbonated = function (isCarbonated) {
                this._isCarbonated = isCarbonated;
            };

            Drink.prototype.getIsCarbonated = function () {
                return this._isCarbonated;
            };

            Drink.prototype.toString = function () {
                var carbonated = this.getIsCarbonated() ? "yes" : "no";
                return Recipe.prototype.toString.call(this) + "Carbonated: " + carbonated + "\n";
            }

            return Drink;
        }());

        var Meal = (function () {
            function Meal(name, price, calories, quantity, prepareTime, isVegan) {
                if (this.constructor === Meal) {
                    throw new Error("Can't instantiate abstract class Meal");
                }

                Recipe.call(this, name, price, calories, quantity, prepareTime);
                this.setIsVegan(isVegan);
            };

            Meal.extends(Recipe);

            Meal.prototype.setIsVegan = function (isVegan) {
                this._isVegan = isVegan;
            };

            Meal.prototype.getIsVegan = function () {
                return this._isVegan;
            };

            Meal.prototype.toggleVegan = function () {
                this._isVegan = !this._isVegan;
            }

            Meal.prototype.toString = function () {
                var vegan = this.getIsVegan() ? "[VEGAN] " : "";
                return vegan + Recipe.prototype.toString.call(this);
            }

            return Meal;
        }());

        var Dessert = (function () {
            function Dessert(name, price, calories, quantity, prepareTime, isVegan) {
                Meal.call(this, name, price, calories, quantity, prepareTime, isVegan);
                this.setWithSugar(true);
            }

            Dessert.extends(Meal);

            Dessert.prototype.setWithSugar = function (withSugar) {
                this._withSugar = withSugar;
            }

            Dessert.prototype.getWithSugar = function () {
                return this._withSugar;
            }

            Dessert.prototype.toggleSugar = function () {
                this._withSugar = !this.getWithSugar();
            }
            Dessert.prototype.toString = function () {
                var sugar = this.getWithSugar() ? "" : "[NO SUGAR] ";
                return sugar + Meal.prototype.toString.call(this);
            }

            return Dessert;
        }());

        var MainCourse = (function () {
            function MainCourse(name, price, calories, quantity, prepareTime, isVegan, type) {
                Meal.call(this, name, price, calories, quantity, prepareTime, isVegan);
                this.setType(type);
            };

            MainCourse.extends(Meal);

            MainCourse.prototype.setType = function (type) {
                this._type = type;
            };

            MainCourse.prototype.getType = function () {
                return this._type;
            };

            MainCourse.prototype.toString = function () {
                return Meal.prototype.toString.call(this) + "Type: " + this.getType() + "\n";
            }
            return MainCourse;
        }());

        var Salad = (function () {
            function Salad(name, price, calories, quantity, prepareTime, hasPasta) {
                Meal.call(this, name, price, calories, quantity, prepareTime, true);
                this.setHasPasta(hasPasta);
            }

            Salad.extends(Meal);

            Salad.prototype.setHasPasta = function (hasPasta) {
                //TODO: Add validation.
                this._hasPasta = hasPasta;
            };

            Salad.prototype.getHasPasta = function () {
                return this._hasPasta;
            };

            Salad.prototype.toString = function () {
                var pasta = this.getHasPasta() ? "yes" : "no";
                return Meal.prototype.toString.call(this) + "Contains pasta: " + pasta + "\n";
            }

            return Salad;
        }());

        var Command = (function () {

            function Command(commandLine) {
                this._params = new Array();
                this.translateCommand(commandLine);
            }

            Command.prototype.translateCommand = function (commandLine) {
                var self, paramsBeginning, name, parametersKeysAndValues;
                self = this;
                paramsBeginning = commandLine.indexOf("(");

                this._name = commandLine.substring(0, paramsBeginning);
                name = commandLine.substring(0, paramsBeginning);
                parametersKeysAndValues = commandLine
                    .substring(paramsBeginning + 1, commandLine.length - 1)
                    .split(";")
                    .filter(function (e) {
                        return true
                    });

                parametersKeysAndValues.forEach(function (p) {
                    var split = p
                        .split("=")
                        .filter(function (e) {
                            return true;
                        });
                    self._params[split[0]] = split[1];
                });
            };

            return Command;
        }());

        function createRestaurant(name, location) {
            _restaurants[name] = new Restaurant(name, location);
            return "Restaurant " + name + " created\n";
        }

        function createDrink(name, price, calories, quantity, timeToPrepare, isCarbonated) {
            _recipes[name] = new Drink(name, price, calories, quantity, timeToPrepare, isCarbonated);
            return "Recipe " + name + " created\n";
        }

        function createSalad(name, price, calories, quantity, timeToPrepare, containsPasta) {
            _recipes[name] = new Salad(name, price, calories, quantity, timeToPrepare, containsPasta);
            return "Recipe " + name + " created\n";
        }

        function createMainCourse(name, price, calories, quantity, timeToPrepare, isVegan, type) {
            _recipes[name] = new MainCourse(name, price, calories, quantity, timeToPrepare, isVegan, type);
            return "Recipe " + name + " created\n";
        }

        function createDessert(name, price, calories, quantity, timeToPrepare, isVegan) {
            _recipes[name] = new Dessert(name, price, calories, quantity, timeToPrepare, isVegan);
            return "Recipe " + name + " created\n";
        }

        function toggleSugar(name) {
            var recipe;

            if (!_recipes.hasOwnProperty(name)) {
                throw new Error("The recipe " + name + " does not exist");
            }
            recipe = _recipes[name];

            if (recipe instanceof Dessert) {
                recipe.toggleSugar();
                return "Command ToggleSugar executed successfully. New value: " + recipe._withSugar.toString().toLowerCase() + "\n";
            } else {
                return "The command ToggleSugar is not applicable to recipe " + name + "\n";
            }
        }

        function toggleVegan(name) {
            var recipe;

            if (!_recipes.hasOwnProperty(name)) {
                throw new Error("The recipe " + name + " does not exist");
            }

            recipe = _recipes[name];
            if (recipe instanceof Meal) {
                recipe.toggleVegan();
                return "Command ToggleVegan executed successfully. New value: " +
                    recipe._isVegan.toString().toLowerCase() + "\n";
            } else {
                return "The command ToggleVegan is not applicable to recipe " + name + "\n";
            }
        }

        function printRestaurantMenu(name) {
            var restaurant;

            if (!_restaurants.hasOwnProperty(name)) {
                throw new Error("The restaurant " + name + " does not exist");
            }

            restaurant = _restaurants[name];
            return restaurant.printRestaurantMenu();
        }

        function addRecipeToRestaurant(restaurantName, recipeName) {
            var restaurant, recipe;

            if (!_restaurants.hasOwnProperty(restaurantName)) {
                throw new Error("The restaurant " + restaurantName + " does not exist");
            }
            if (!_recipes.hasOwnProperty(recipeName)) {
                throw new Error("The recipe " + recipeName + " does not exist");
            }

            restaurant = _restaurants[restaurantName];
            recipe = _recipes[recipeName];
            restaurant.addRecipe(recipe);
            return "Recipe " + recipeName + " successfully added to restaurant " + restaurantName + "\n";
        }

        function removeRecipeFromRestaurant(restaurantName, recipeName) {
            var restaurant, recipe;

            if (!_recipes.hasOwnProperty(recipeName)) {
                throw new Error("The recipe " + recipeName + " does not exist");
            }
            if (!_restaurants.hasOwnProperty(restaurantName)) {
                throw new Error("The restaurant " + restaurantName + " does not exist");
            }

            restaurant = _restaurants[restaurantName];
            recipe = _recipes[recipeName];
            restaurant.removeRecipe(recipe);
            return "Recipe " + recipeName + " successfully removed from restaurant " + restaurantName + "\n";
        }

        function executeCommand(commandLine) {
            var cmd, params, result;
            cmd = new Command(commandLine);
            params = cmd._params;

            switch (cmd._name) {
                case 'CreateRestaurant':
                    result = createRestaurant(params["name"], params["location"]);
                    break;
                case 'CreateDrink':
                    result = createDrink(params["name"], parseFloat(params["price"]), parseInt(params["calories"]),
                        parseInt(params["quantity"]), params["time"], parseBoolean(params["carbonated"]));
                    break;
                case 'CreateSalad':
                    result = createSalad(params["name"], parseFloat(params["price"]), parseInt(params["calories"]),
                        parseInt(params["quantity"]), params["time"], parseBoolean(params["pasta"]));
                    break;
                case "CreateMainCourse":
                    result = createMainCourse(params["name"], parseFloat(params["price"]), parseInt(params["calories"]),
                        parseInt(params["quantity"]), params["time"], parseBoolean(params["vegan"]), params["type"]);
                    break;
                case "CreateDessert":
                    result = createDessert(params["name"], parseFloat(params["price"]), parseInt(params["calories"]),
                        parseInt(params["quantity"]), params["time"], parseBoolean(params["vegan"]));
                    break;
                case "ToggleSugar":
                    result = toggleSugar(params["name"]);
                    break;
                case "ToggleVegan":
                    result = toggleVegan(params["name"]);
                    break;
                case "AddRecipeToRestaurant":
                    result = addRecipeToRestaurant(params["restaurant"], params["recipe"]);
                    break;
                case "RemoveRecipeFromRestaurant":
                    result = removeRecipeFromRestaurant(params["restaurant"], params["recipe"]);
                    break;
                case "PrintRestaurantMenu":
                    result = printRestaurantMenu(params["name"]);
                    break;
                default:
                    throw new Error('Invalid command name: ' + cmdName);
            }

            return result;
        }

        function parseBoolean(value) {
            switch (value) {
                case "yes":
                    return true;
                case "no":
                    return false;
                default:
                    throw new Error("Invalid boolean value: " + value);
            }
        }

        return {
            initialize: initialize,
            executeCommand: executeCommand
        };
    }
    () );


// Process the input commands and return the results
    var results = '';
    RestaurantEngine.initialize();
    commands.forEach(function (cmd) {
        if (cmd != "End") {
            try {
                var cmdResult = RestaurantEngine.executeCommand(cmd);
                results += cmdResult;
            } catch (err) {
                results += err.message + "\n";
            }
        }
    });

    return results.trim();
}

// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

(function () {
    var arr = [];
    if (typeof (require) == 'function') {
        // We are in node.js --> read the console input and process it
        require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        }).on('line', function (line) {
            arr.push(line);
        }).on('close', function () {
            console.log(processRestaurantManagerCommands(arr));
        });
    }
})();

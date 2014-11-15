function processTravelAgencyCommands(commands) {
    'use strict';

    Object.prototype.extends = function (parent) {
        if (parent) {
            this.prototype = Object.create(parent.prototype);
            this.prototype.constructor = this;
        }
    };

    Object.prototype.validateNonEmptyString = function (value, valueName) {
        if(!(typeof value === 'string')) {
            throw new Error(valueName + " should be of type string.");
        }
        if (value === undefined || value === "" || !value || value.length === 0) {
            throw new Error(valueName + " cannot be empty or undefined.");
        }
    };

    Object.prototype.validateDate = function (value, valueName) {
        if(!(value instanceof Date)) {
            throw new TypeError(valueName + " should be of type Date");
        }
        if(!Object.prototype.toString.call(value) === '[object Date]') {
            throw new TypeError(valueName + " should be of type Date.");
        }
    };

    Object.prototype.validatePositiveNumber = function (value, valueName) {

        if(value < 0) {
            throw new Error(valueName + " should be positive.");
        }

        if(isNaN(value)) {
            throw new TypeError(valueName + " should be a number.");
        }
    };

    var Models = (function() {
        var Destination = (function() {
            function Destination(location, landmark) {
                this.setLocation(location);
                this.setLandmark(landmark);
            }

            Destination.prototype.getLocation = function() {
                return this._location;
            }

            Destination.prototype.setLocation = function(location) {
                this.validateNonEmptyString(location, "Location");
                this._location = location;
            }

            Destination.prototype.getLandmark = function() {
                return this._landmark;
            }

            Destination.prototype.setLandmark = function(landmark) {
                this.validateNonEmptyString(landmark, "Landmark");
                this._landmark = landmark;
            }

            Destination.prototype.toString = function() {
                return this.constructor.name + ": " +
                    "location=" + this.getLocation() +
                    ",landmark=" + this.getLandmark();
            }

            return Destination;
        }());

        var Travel = (function () {

            Travel.prototype.setName = function (name) {
                this.validateNonEmptyString(name, "Name");
                this._name = name;
            };

            Travel.prototype.getName = function () {
                return this._name;
            };

            Travel.prototype.setStartDate = function (startDate) {
                this.validateDate(startDate, "Start date");
                this._startDate = startDate;
            };

            Travel.prototype.getStartDate = function () {
                return this._startDate;
            };

            Travel.prototype.setEndDate = function (endDate) {
                this.validateDate(endDate, "End date");
                this._endDate = endDate;
            };

            Travel.prototype.getEndDate = function () {
                return this._endDate;
            };

            Travel.prototype.setPrice = function (price) {
                this.validatePositiveNumber(price, "Price");
                this._price = price;
            };

            Travel.prototype.getPrice = function () {
                return this._price;
            };

            Travel.prototype.setType = function (type) {
                this._type = type;
            };

            Travel.prototype.getType = function () {
                return this._type;
            };

            function Travel (name, startDate, endDate, price) {
                if (this.constructor === Travel) {
                    throw new Error("Can't instantiate abstract class Travel");
                }

                this.setName(name);
                this.setStartDate(startDate);
                this.setEndDate(endDate);
                this.setPrice(price);
                this.setType(this.constructor.name.toLowerCase());
            };

            Travel.prototype.toString = function () {
                var result = " * " + this.constructor.name + ": name=" + this.getName()
                    + ",start-date=" + formatDate(this.getStartDate()) + ",end-date=" + formatDate(this.getEndDate())
                    + ",price=" + this.getPrice().toFixed(2);

                return result;
            };

            return Travel;
        }());



        var Excursion = (function () {
            function Excursion(name, startDate, endDate, price, transport) {
                Travel.call(this, name, startDate, endDate, price);
                this.setTransport(transport);
                this._destinations = [];
            };

            Excursion.extends(Travel);

            function printDestinations() {
                var destinations = this.getDestinations();
                var result = " ** Destinations: ";

                if(destinations.length > 0) {
                    for(var i = 0; i < destinations.length; i++) {
                        var destination = destinations[i];
                        result += destination.toString();
                        if(i < destinations.length - 1) {
                            result+= ";";
                        }
                    }
                } else {
                    result += "-";
                }
                return result;
            };

            Excursion.prototype.setTransport = function (transport) {
                this.validateNonEmptyString(transport);
                this._transport = transport;
            };

            Excursion.prototype.getTransport = function () {
                return this._transport;
            };

            Excursion.prototype.getDestinations = function () {
                return this._destinations;
            };

            Excursion.prototype.addDestination = function (destination) {
                if(this.getDestinations().indexOf(destination) !== -1) {
                    throw new Error("Destination already added.");
                }
                this.getDestinations().push(destination);
            };

            Excursion.prototype.removeDestination = function (destination) {
                var index = this.getDestinations().indexOf(destination);
                if(index === -1) {
                    throw new Error("No destination with that name.");
                }
                this.getDestinations().splice(index, 1);
            };

            Excursion.prototype.toString = function () {
                var result = Travel.prototype.toString.call(this) + ",transport=" + this.getTransport() + "\n";
                result += printDestinations.call(this);
                return result;
            };

            return Excursion;
        }());



        var Vacation = (function() {
            function Vacation (name, startDate, endDate, price, location, accommodation) {
                Travel.call(this, name, startDate, endDate, price);
                this.setLocation(location);
                this.setAccommodation(accommodation);
            };

            Vacation.extends(Travel);

            Vacation.prototype.setLocation = function (location) {
                this.validateNonEmptyString(location, "Location");
                this._location = location;
            };

            Vacation.prototype.getLocation = function () {
                return this._location;
            };

            Vacation.prototype.setAccommodation = function (accommodation) {
                //Accomodation is optional so check if it is passed.
                if(accommodation) {
                    this.validateNonEmptyString(accommodation, "Accomodation");
                }
                this._accommodation = accommodation;
            };

            Vacation.prototype.getAccommodation = function () {
                return this._accommodation;
            };

            Vacation.prototype.toString = function () {
                // ,location=Caribbean Sea,accommodation=hut
                var accommodation = this.getAccommodation();
                var result = Travel.prototype.toString.call(this) + ",location=" + this.getLocation();
                if(accommodation) {
                    result += ",accommodation=" + this.getAccommodation();
                }

                return result;
            };

            return Vacation;

        }());

        var Cruise = (function () {
            var CRUISE_TRANSPORT = "cruise liner";

            function Cruise(name, startDate, endDate, price, startDock) {
                Excursion.call(this, name, startDate, endDate, price, CRUISE_TRANSPORT);
                this.setStartDock(startDock);
            };

            Cruise.extends(Excursion);

            Cruise.prototype.setStartDock = function (startDock) {
                if(startDock) {
                    this.validateNonEmptyString(startDock, "Start dock");
                }
                this._startDock = startDock;
            };

            Cruise.prototype.getStartDock = function () {
                return this._startDock;
            };

            return Cruise;
        }());


        return {
            Destination: Destination,
            Vacation: Vacation,
            Excursion: Excursion,
            Cruise: Cruise
        }
    }());

    var TravellingManager = (function(){
        var _travels;
        var _destinations;

        function init() {
            _travels = [];
            _destinations = [];
        }

        var CommandProcessor = (function() {

            function processInsertCommand(command) {
                var object;

                switch (command["type"]) {
                    case "excursion":
                        object = new Models.Excursion(command["name"], parseDate(command["start-date"]), parseDate(command["end-date"]),
                            parseFloat(command["price"]), command["transport"]);
                        _travels.push(object);
                        break;
                    case "vacation":
                        object = new Models.Vacation(command["name"], parseDate(command["start-date"]), parseDate(command["end-date"]),
                            parseFloat(command["price"]), command["location"], command["accommodation"]);
                        _travels.push(object);
                        break;
                    case "cruise":
                        object = new Models.Cruise(command["name"], parseDate(command["start-date"]), parseDate(command["end-date"]),
                            parseFloat(command["price"]), command["start-dock"]);
                        _travels.push(object);
                        break;
                    case "destination":
                        object = new Models.Destination(command["location"], command["landmark"]);
                        _destinations.push(object);
                        break;
                    default:
                        throw new Error("Invalid type.");
                }

                return object.constructor.name + " created.";
            }

            function processDeleteCommand(command) {
                var object,
                    index,
                    destinations;

                switch (command["type"]) {
                    case "destination":
                        object = getDestinationByLocationAndLandmark(command["location"], command["landmark"]);
                        _travels.forEach(function(t) {
                            if (t instanceof Models.Excursion && t.getDestinations().indexOf(object) !== -1) {
                                t.removeDestination(object);
                            }
                        });
                        index = _destinations.indexOf(object);
                        _destinations.splice(index, 1);
                        break;
                    case "excursion":
                    case "vacation":
                    case "cruise":
                        object = getTravelByName(command["name"]);
                        index = _travels.indexOf(object);
                        _travels.splice(index, 1);
                        break;
                    default:
                        throw new Error("Unknown type.");
                }

                return object.constructor.name + " deleted.";
            }

            function processListCommand(command) {
                return formatTravelsQuery(_travels);
            }

            function processFilterTravelsCommand(command) {
                var type = command["type"].trim();
                var priceMin = Number(command["price-min"]);
                var priceMax = Number(command["price-max"]);

                var selectedTravels = _travels.filter(function (travel) {
                    var result;
                    if(type === "all") {
                        result = travel.getPrice() >= priceMin && travel.getPrice() <= priceMax;
                    } else {
                        result = travel.getPrice() >= priceMin && travel.getPrice() <= priceMax
                        && travel.getType() === type;
                    }


                    return result;
                });

                selectedTravels.sort(function (a, b) {
                    var firstDate = a.getStartDate();
                    var secondDate = b.getStartDate();

                    if(firstDate >= secondDate) {
                        return a.getName().localeCompare(b.getName());
                    }
                });

                return formatTravelsQuery(selectedTravels);
            }

            function processAddDestinationCommand(command) {
                var destination = getDestinationByLocationAndLandmark(command["location"], command["landmark"]),
                    travel = getTravelByName(command["name"]);

                if (!(travel instanceof Models.Excursion)) {
                    throw new Error("Travel does not have destinations.");
                }
                travel.addDestination(destination);

                return "Added destination to " + travel.getName() + ".";
            }

            function processRemoveDestinationCommand(command) {
                var destination = getDestinationByLocationAndLandmark(command["location"], command["landmark"]),
                    travel = getTravelByName(command["name"]);

                if (!(travel instanceof Models.Excursion)) {
                    throw new Error("Travel does not have destinations.");
                }
                travel.removeDestination(destination);

                return "Removed destination from " + travel.getName() + ".";
            }

            function getTravelByName(name) {
                var i;

                for (i = 0; i < _travels.length; i++) {
                    if (_travels[i].getName() === name) {
                        return _travels[i];
                    }
                }
                throw new Error("No travel with such name exists.");
            }

            function getDestinationByLocationAndLandmark(location, landmark) {
                var i;

                for (i = 0; i < _destinations.length; i++) {
                    if (_destinations[i].getLocation() === location
                        && _destinations[i].getLandmark() === landmark) {
                        return _destinations[i];
                    }
                }
                throw new Error("No destination with such location and landmark exists.");
            }

            function formatTravelsQuery(travelsQuery) {
                var queryString = "";

                if (travelsQuery.length > 0) {
                    queryString += travelsQuery.join("\n");
                } else {
                    queryString = "No results.";
                }

                return queryString;
            }

            return {
                processInsertCommand: processInsertCommand,
                processDeleteCommand: processDeleteCommand,
                processListCommand: processListCommand,
                processAddDestinationCommand: processAddDestinationCommand,
                processRemoveDestinationCommand: processRemoveDestinationCommand,
                processFilterTravelsCommand: processFilterTravelsCommand
            }
        }());

        var Command = (function() {
            function Command(cmdLine) {
                this._cmdArgs = processCommand(cmdLine);
            }

            function processCommand(cmdLine) {
                var parameters = [],
                    matches = [],
                    pattern = /(.+?)=(.+?)[;)]/g,
                    key,
                    value,
                    split;

                split = cmdLine.split("(");
                parameters["command"] = split[0];
                while ((matches = pattern.exec(split[1])) !== null) {
                    key = matches[1];
                    value = matches[2];
                    parameters[key] = value;
                }

                return parameters;
            }

            return Command;
        }());

        function executeCommands(cmds) {
            var commandArgs = new Command(cmds)._cmdArgs,
                action = commandArgs["command"],
                output;

            switch (action) {
                case "insert":
                    output = CommandProcessor.processInsertCommand(commandArgs);
                    break;
                case "delete":
                    output = CommandProcessor.processDeleteCommand(commandArgs);
                    break;
                case "add-destination":
                    output = CommandProcessor.processAddDestinationCommand(commandArgs);
                    break;
                case "remove-destination":
                    output = CommandProcessor.processRemoveDestinationCommand(commandArgs);
                    break;
                case "list":
                    output = CommandProcessor.processListCommand(commandArgs);
                    break;
                case "filter":
                    output = CommandProcessor.processFilterTravelsCommand(commandArgs);
                    break;
                default:
                    throw new Error("Unsupported command.");
            }

            return output;
        }

        return {
            init: init,
            executeCommands: executeCommands
        }
    }());

    var parseDate = function (dateStr) {
        if (!dateStr) {
            return undefined;
        }
        var date = new Date(Date.parse(dateStr.replace(/-/g, ' ')));
        var dateFormatted = formatDate(date);
        if (dateStr != dateFormatted) {
            throw new Error("Invalid date: " + dateStr);
        }
        return date;
    }

    var formatDate = function (date) {
        var day = date.getDate();
        var monthName = date.toString().split(' ')[1];
        var year = date.getFullYear();
        return day + '-' + monthName + '-' + year;
    }

    var output = "";
    TravellingManager.init();

    commands.forEach(function(cmd) {
        var result;
        if (cmd != "") {
            try {
                result = TravellingManager.executeCommands(cmd) + "\n";
            } catch (e) {
                result = "Invalid command." + "\n";
            }
            output += result;
        }
    });

    return output;
}

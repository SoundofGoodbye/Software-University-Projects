﻿function processEstatesAgencyCommands(commands) {

    'use strict';

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

    Object.prototype.extends = function (parent) {
        if (parent) {
            this.prototype = Object.create(parent.prototype);
            this.prototype.constructor = this;
        }
    }

    Object.prototype.validateIsInteger = function (value, valueName) {
        if (!(value === parseInt(value, 10))) {
            throw new TypeError(valueName + " should be of type integer.");
        }
    }

    Object.prototype.validateString = function (value, valueName) {
        if (!value || typeof (value) !== Types.String) {
            throw new Error(valueName + " should be non-empty string.");
        }
    }

    Object.prototype.validateNumberInRange = function (minRange, maxRange, value) {
        if (typeof (value) != 'number') {
            throw new Error("Variable should be of type number.");
        }

        if(value !== parseInt(value, 10)) {
            throw new TypeError("Variable should be integer.");
        }

        if (value < minRange || value > maxRange) {
            throw new Error("Invalid range passed.");
        }
    }

    Object.prototype.validatePositiveInteger = function (price) {
        if (price < 0) {
            throw new Error("Price must be positive.");
        }
    }

    Object.prototype.validateBoolean = function (value, valueName) {
        if (typeof value !== Types.Boolean) {
            throw new TypeError("Parameter: " + valueName + " should be a boolean variable.");
        }
    }

    /**
     * Create Abstract class Estate.
     */
    var Estate = (function () {

        ////////////////////////////
        // Getters and setters - start
        /////////////////////////////
        Estate.prototype.setName = function (name) {
            this.validateString(name, "name");
            this._name = name;
        }

        Estate.prototype.getName = function () {
            return this._name;
        }

        Estate.prototype.setArea = function (area) {
            this.validateNumberInRange(1, 10000, area);
            this._area = area;
        }

        Estate.prototype.getArea = function () {
            return this._area;
        }

        Estate.prototype.setLocation = function (location) {
            this.validateString(location, "location");
            this._location = location;
        }

        Estate.prototype.getLocation = function () {
            return this._location;
        }

        Estate.prototype.setIsFurnitured = function (isFurnitured) {
            this.validateBoolean(isFurnitured, "isFurnitured");
            this._isFurnitured = isFurnitured;
        }

        Estate.prototype.getIsFurnitured = function () {
            return this._isFurnitured;
        }
        ///////////////////////////
        // Getters and setters - end
        ////////////////////////////

        function Estate(name, area, location, isFurnitured) {

            if (this.constructor === Estate) {
                throw new Error("Can't instantiate abstract class Estate");
            }
            this.setName(name);
            this.setArea(area);
            this.setLocation(location);
            this.setIsFurnitured(isFurnitured);
        }

        Estate.prototype.toString = function () {
            var isFurnitured = this.getIsFurnitured() ? "Yes" : "No";

            return this.constructor.name + ": Name = " + this.getName() + ", Area = " + this.getArea() +
                ", Location = " + this.getLocation() + ", Furnitured = " + isFurnitured;
        }
        return Estate;
    }());


    /**
     * Create Abstract class BuildingEstate. Extends Estate.
     */
    var BuildingEstate = (function () {
        function BuildingEstate(name, area, location, isFurnitured, rooms, hasElevator) {
            if (this.constructor === BuildingEstate) {
                throw new Error("Can't instantiate abstract class BuildingEstate");
            }

            Estate.call(this, name, area, location, isFurnitured);
            this.setRooms(rooms);
            this.setHasElevator(hasElevator);
        }

        BuildingEstate.extends(Estate);

        BuildingEstate.prototype.setRooms = function (rooms) {
            this.validateNumberInRange(0, 100, rooms);
            this._rooms = rooms;
        }

        BuildingEstate.prototype.getRooms = function () {
            return this._rooms;
        }

        BuildingEstate.prototype.setHasElevator = function (hasElevator) {
            this.validateBoolean(hasElevator, "hasElevator");
            this._hasElevator = hasElevator;
        }

        BuildingEstate.prototype.getHasElevator = function () {
            return this._hasElevator;
        }

        BuildingEstate.prototype.toString = function () {
            var elevator = this.getHasElevator() ? "Yes" : "No";
            return Estate.prototype.toString.call(this) + ", Rooms: " + this.getRooms() +
                ", Elevator: " + elevator;
        }

        return BuildingEstate;
    }());

    /**
     * Create Apartment class. Extends BuildingEstate.
     */
    var Apartment = (function () {
        function Apartment(name, area, location, isFurnitured, rooms, hasElevator) {
            BuildingEstate.call(this, name, area, location, isFurnitured, rooms, hasElevator);
        }

        Apartment.extends(BuildingEstate);

        return Apartment;
    }());

    /**
     * Create Office class. Extends BuildingEstate.
     */
    var Office = (function () {
        function Office(name, area, location, isFurnitured, rooms, hasElevator) {
            BuildingEstate.call(this, name, area, location, isFurnitured, rooms, hasElevator);
        }

        Office.extends(BuildingEstate);

        return Office;
    }());

    /**
     * Create House class.
     */
    var House = (function () {
        function House(name, area, location, isFurnitured, floors) {
            Estate.call(this, name, area, location, isFurnitured);
            this.setFloors(floors);
        }

        House.extends(Estate);

        House.prototype.setFloors = function (floors) {
            this.validateNumberInRange(1, 10, floors);
            this._floors = floors;
        }

        House.prototype.getFloors = function () {
            return this._floors;
        }

        House.prototype.toString = function () {
            return Estate.prototype.toString.call(this) +
                ", Floors: " + this.getFloors();
        }

        return House;
    }());

    /**
     * Create Garage class. Extends Estate.
     */
    var Garage = (function () {
        function Garage(name, area, location, isFurnitured, width, height) {
            Estate.call(this, name, area, location, isFurnitured);
            this.setWidth(width);
            this.setHeight(height);
        }

        Garage.extends(Estate);

        Garage.prototype.setWidth = function (width) {
            this.validateNumberInRange(1, 500, width);
            this._width = width;
        }

        Garage.prototype.getWidth = function () {
            return this._width;
        }

        Garage.prototype.setHeight = function (height) {
            this.validateNumberInRange(1, 500, height);
            this._height = height;
        }

        Garage.prototype.getHeight = function () {
            return this._height;
        }

        Garage.prototype.toString = function () {
            return Estate.prototype.toString.call(this) + ", Width: " + this.getWidth()
                + ", Height: " + this.getHeight();
        }

        return Garage;
    }());


    /**
     * Create Abstract class Offer.
     */
    var Offer = (function () {
        function Offer(estate, price) {
            if (this.constructor === Offer) {
                throw new Error("Can't instantiate abstract class Offer");
            }

            this.setEstate(estate);
            this.setPrice(price);
        }

        Offer.prototype.setEstate = function (estate) {
            this._estate = estate;
        }

        Offer.prototype.getEstate = function () {
            return this._estate;
        }

        Offer.prototype.setPrice = function (price) {
            this.validatePositiveInteger(price);
            this._price = price;
        }

        Offer.prototype.getPrice = function () {
            return this._price;
        }

        Offer.prototype._type = "Offer";

        Offer.prototype.toString = function () {
            var estate = this.getEstate();
            return "Estate = " + estate.getName() +
                ", Location = " + estate.getLocation() + ", Price = " + this.getPrice();
        }

        return Offer;
    }());


    var RentOffer = (function () {
        function RentOffer(estate, price) {
            if (estate && price) {
                Offer.call(this, estate, price);
            } else {
                throw new Error("Invalid estate name or price.");
            }
        }

        RentOffer.extends(Offer);

        RentOffer.prototype.toString = function () {
            return "Rent: " + Offer.prototype.toString.call(this);
        }
        return RentOffer;
    }());


    var SaleOffer = (function () {
        function SaleOffer(estate, price) {
            if (estate && price) {
                Offer.call(this, estate, price);
            } else {
                throw new Error("Invalid estate name or price.");
            }
        }

        SaleOffer.extends(Offer);
        SaleOffer.prototype.toString = function () {
            return "Sale: " + Offer.prototype.toString.call(this);
        }

        return SaleOffer;
    }());


    var EstatesEngine = (function () {
        var _estates;
        var _uniqueEstateNames;
        var _offers;

        function initialize() {
            _estates = [];
            _uniqueEstateNames = {};
            _offers = [];
        }

        /**
         * The whole input from the textarea is splitted and then passed forward.
         * The first argument is the command type - create, status etc.
         * @param command
         * @returns {*}
         */
        function executeCommand(command) {
            var cmdParts = command.split(' ');
            var cmdName = cmdParts[0];
            var cmdArgs = cmdParts.splice(1);
            // Check what is the passed command and then pass the other arguments forward for processing.
            switch (cmdName) {
                case 'create':
                    return executeCreateCommand(cmdArgs);
                case 'status':
                    return executeStatusCommand();
                case 'find-sales-by-location':
                    return executeFindSalesByLocationCommand(cmdArgs[0]);
                case 'find-rents-by-location':
                    return executeFindRentsByLocationCommand(cmdArgs[0]);
                case 'find-rents-by-price':
                    return executeFindRentsByPriceCommand(Number(cmdArgs[0]), Number(cmdArgs[1]));
                default:
                    throw new Error('Unknown command: ' + cmdName);
            }
        }

        /**
         * Executes the passed command. A command represents the text entered in one line.
         * @param cmdArgs
         * @returns {string}
         */
        function executeCreateCommand(cmdArgs) {
            var objType = cmdArgs[0];
            switch (objType) {
                case 'Apartment':
                    var apartment = new Apartment(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                        parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), parseBoolean(cmdArgs[6]));
                    addEstate(apartment);
                    break;
                case 'Office':
                    var office = new Office(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                        parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), parseBoolean(cmdArgs[6]));
                    addEstate(office);
                    break;
                case 'House':
                    var house = new House(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                        parseBoolean(cmdArgs[4]), Number(cmdArgs[5]));
                    addEstate(house);
                    break;
                case 'Garage':
                    var garage = new Garage(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                        parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), Number(cmdArgs[6]));
                    addEstate(garage);
                    break;
                case 'RentOffer':
                    var estate = findEstateByName(cmdArgs[1]);
                    var rentOffer = new RentOffer(estate, Number(cmdArgs[2]));
                    addOffer(rentOffer);
                    break;
                case 'SaleOffer':
                    estate = findEstateByName(cmdArgs[1]);
                    var saleOffer = new SaleOffer(estate, Number(cmdArgs[2]));
                    addOffer(saleOffer);
                    break;
                default:
                    throw new Error('Unknown object to create: ' + objType);
            }
            return objType + ' created.';
        }

        function parseBoolean(value) {
            switch (value) {
                case "true":
                    return true;
                case "false":
                    return false;
                default:
                    throw new Error("Invalid boolean value: " + value);
            }
        }

        function findEstateByName(estateName) {
            for (var i = 0; i < _estates.length; i++) {
                if (_estates[i].getName() == estateName) {
                    return _estates[i];
                }
            }
            return undefined;
        }

        function addEstate(estate) {
            if (_uniqueEstateNames[estate.getName()]) {
                throw new Error('Duplicated estate name: ' + estate.getName());
            }
            _uniqueEstateNames[estate.getName()] = true;
            _estates.push(estate);
        }

        function addOffer(offer) {
            _offers.push(offer);
        }

        function executeStatusCommand() {
            var result = '', i;
            if (_estates.length > 0) {
                result += 'Estates:\n';
                for (i = 0; i < _estates.length; i++) {
                    result += "  " + _estates[i].toString() + '\n';
                }
            } else {
                result += 'No estates\n';
            }

            if (_offers.length > 0) {
                result += 'Offers:\n';
                for (i = 0; i < _offers.length; i++) {
                    result += "  " + _offers[i].toString() + '\n';
                }
            } else {
                result += 'No offers\n';
            }

            return result.trim();
        }

        function executeFindOfferByLocationCommand(location, offerType) {
            if (!location) {
                throw new Error("Location cannot be empty.");
            }
            var selectedOffers = _offers.filter(function (offer) {
                return offer.getEstate().getLocation() === location &&
                    offer instanceof offerType;
            });
            selectedOffers.sort(function (a, b) {
                return a.getEstate().getName().localeCompare(b.getEstate().getName());
            });
            return formatQueryResults(selectedOffers);
        }

        function executeFindSalesByLocationCommand(location) {
            return executeFindOfferByLocationCommand(location, SaleOffer);
        }

        function executeFindRentsByLocationCommand(location) {
            return executeFindOfferByLocationCommand(location, RentOffer);
        }

        function executeFindRentsByPriceCommand(minPrice, maxPrice) {
            Object.prototype.validateNumberInRange(0, Number.MAX_VALUE, minPrice);
            Object.prototype.validateNumberInRange(0, Number.MAX_VALUE, maxPrice);
            var selectedOffers = _offers.filter(function (offer) {
                return offer.getPrice() >= minPrice && offer.getPrice() <= maxPrice
                    && offer instanceof RentOffer;
            });
            selectedOffers.sort(function (a, b) {
                var result = a.getPrice() - b.getPrice();
                if (result == 0) {
                    result = a.getEstate().getName().localeCompare(b.getEstate().getName());
                }
                return result;
            });
            return formatQueryResults(selectedOffers);
        }

        function formatQueryResults(offers) {
            var result = '';
            if (offers.length == 0) {
                result += 'No Results\n';
            } else {
                result += 'Query Results:\n';
                for (var i = 0; i < offers.length; i++) {
                    var offer = offers[i];
                    result += '  [Estate: ' + offer.getEstate().getName() +
                    ', Location: ' + offer.getEstate().getLocation() +
                    ', Price: ' + offer.getPrice() + ']\n';
                }
            }
            return result.trim();
        }

        return {
            initialize: initialize,
            executeCommand: executeCommand
        };
    }());

// Process the input commands and return the results
    var results = '';
    EstatesEngine.initialize();
    commands.forEach(function (cmd) {
        if (cmd != '') {
            try {
                var cmdResult = EstatesEngine.executeCommand(cmd);
                results += cmdResult + '\n';
            } catch (err) {
                //console.log(err);
                results += 'Invalid command.\n';
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
            console.log(processEstatesAgencyCommands(arr));
        });
    }
})();

'use strict';

var ToDoList = (function () {
    var Container = (function () {
        function Container(title) {
            this._title = title;
        }

        Container.prototype.addToDOM = function (parentToAttachTo) {
            // Create container div that will hold everything.
            var container = document.createElement("div");
            container.id = "container";

            // Append header to the container that displays the passed title in a h1
            var title = document.createElement("h1");
            title.innerHTML = this._title;
            container.appendChild(title);

            // Append input field to the container that will hold the sections name.
            var sectionInputField = document.createElement("input");
            sectionInputField.setAttribute('type', 'text');
            sectionInputField.setAttribute('placeholder', 'Title..');
            sectionInputField.required = true;

            // Append button to the section div that will create a new Section.
            var newSectionButton = document.createElement("input");
            newSectionButton.setAttribute('type', 'button');
            newSectionButton.setAttribute('value', 'New Section');
            newSectionButton.setAttribute('name', 'newSectionButton');
            newSectionButton.onclick = function () {
                if (sectionInputField.value === '') {
                    sectionInputField.setAttribute('placeholder', 'Enter name');
                } else {
                    sectionInputField.setAttribute('placeholder', 'Title...');
                    var section = new ToDoList.Section(sectionInputField.value);
                    section.addToDOM(container);
                    sectionInputField.value = '';
                }
            };

            // Create a new div that will hold the section related stuff.
            var newSection = document.createElement("div");
            newSection.id = 'new-section-wrapper';
            newSection.appendChild(sectionInputField);
            newSection.appendChild(newSectionButton);

            container.appendChild(newSection);

            if (!(document.getElementById('container'))) {
                parentToAttachTo.appendChild(container);
            }
        };

        return Container;
    })();

    var Section = (function () {
        var id = 0;

        function Section(title) {
            if (title === '' || title == null || title == 'undefined') {
                throw Error('The section title cannot be empty');
            } else {
                this._title = title;
                this._id = id++;
            }
        };

        Section.prototype.addToDOM = function (parentToAttachTo) {
            // Create the section div
            var section = document.createElement("div");
            section.id = "section_" + this._id;

            // Create and append a h2 element to the section div and change its value to the passed title.
            var sectionTitle = document.createElement('h2');
            sectionTitle.innerHTML = this._title;
            section.appendChild(sectionTitle);

            var newElement = document.createElement("div");
            newElement.id = "new-element-wrapper";

            var newElementField = document.createElement('input');
            newElementField.setAttribute('type', 'text');
            newElementField.setAttribute('placeholder', 'Add Item...');

            var newElementButton = document.createElement('input');
            newElementButton.setAttribute('type', 'button');
            newElementButton.setAttribute('value', '+');
            newElementButton.onclick = function () {
                var item = new ToDoList.Item(newElementField.value);
                item.addToDOM(section);
            };

            newElement.appendChild(newElementField);
            newElement.appendChild(newElementButton);
            section.appendChild(newElement);
            if (!(document.getElementById(section.id))) {
                parentToAttachTo.insertBefore(section, parentToAttachTo.lastChild);
            }
        };

        return Section;
    })();

    var Item = (function () {
        var id = 0;

        function Item(title) {
            this._title = title;
            this._id = id++;
        };

        Item.prototype.addToDOM = function (parentToAttachTo) {
            var item = document.createElement("div");
            item.id = "element_" + this._id;
            item.className = "item_element";

            var checkbox = document.createElement("input");
            checkbox.id = "checkbox_" + this._id;
            checkbox.className = "itemCheckbox";
            checkbox.setAttribute('type', 'checkbox');

            var itemLabel = document.createElement("label");
            itemLabel.innerHTML = this._title;
            itemLabel.htmlFor = checkbox.id;

            //var itemHolder = document.createElement("div");
            item.appendChild(checkbox);
            item.appendChild(itemLabel);

            //item.appendChild(itemHolder);

            if (!(document.getElementById(item.id))) {
                parentToAttachTo.insertBefore(item, parentToAttachTo.lastChild);
            }
        };

        return Item;
    })();
    return {
        Container: Container,
        Section: Section,
        Item: Item
    }
})();

var list = new ToDoList.Container('TODO List');
list.addToDOM(document.body);
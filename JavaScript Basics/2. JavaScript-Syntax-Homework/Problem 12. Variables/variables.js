function variablesTypes(value) {

    var name = value[0];
    var age = value[1];
    var isMale = value[2];
    var favFoodsArr = value[3];

    console.log("My name is: " + name + " // type is " + typeof name);
    console.log("My age: " + age + " // type is " + typeof  age);
    console.log("I am male: " + isMale + " // type is " + typeof  isMale);
    console.log("My favorite foods are:  " + favFoodsArr + " // type is " + typeof(favFoodsArr));
}

variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]);
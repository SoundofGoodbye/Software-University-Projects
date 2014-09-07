function findYoungestPerson(persons) {
    var minAge = Number.MAX_VALUE;
    var personsLength = persons.length;
    for (var i = 0; i < personsLength; i++) {
        if (persons[i].age < minAge) {
            var result = persons[i];
            minAge = persons[i].age;
        }
    }
    if (result) {
        console.log('The youngest person is %s %s', result.firstname, result.lastname);
    } else {
        console.log('Age property is missing');
    }
}
var persons = [
    { firstname: 'George', lastname: 'Kolev', age: 32},
    { firstname: 'Bay', lastname: 'Ivan', age: 81},
    { firstname: 'Baba', lastname: 'Ginka', age: 40}
];
findYoungestPerson(persons);
/**
 * Created by marto on 14.7.2014 г..
 */
var date = new Date();
var hours = date.getHours();
var minutes = ('0' + date.getMinutes()).slice(-2);
var result = hours + ":" + minutes;
console.log(result);

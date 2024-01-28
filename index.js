const text = '{"name":"Ivan", "age":"27", "city":"Santa Ana"}';

const obj = JSON.parse(text);

document.getElementById('demo').innerHTML = obj.name + ", " + "is from " + obj.city + " and is " + obj.age + " years old.";
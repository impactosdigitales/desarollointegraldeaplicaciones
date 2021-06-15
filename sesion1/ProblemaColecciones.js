const arr1 = [1, 2, 3];
const arr2 = arr1;
//Operador spread (Operador de propagación)
//...


//Hot Linking
arr1.push(4);
arr1.push(5);
arr2.push(6);

const arr3 = [...arr1];

arr2.push(7);
arr1.push(8);

console.log(arr1);
console.log(arr2);
console.log(arr3);

const obj1 = {
    'nombre' : 'Raul',
    'edad' : 33
};
const obj2 = obj1;
const obj3 = {...obj1};

obj2.tel = '442 189 90 23';
obj1.rfc = 'zaze3402k40fg6';

console.log(obj1);
console.log(obj2);
console.log(obj3);



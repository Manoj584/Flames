let a = prompt("Enter a value");
let b = prompt("Enter b value");

for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
        if (a[i] == b[j]) {
            a = a.replace(a[i], '');
            b = b.replace(b[j], '');
        }
    }
}

let count = a.length + b.length;
console.log(count);

let relationship = ["Friend", "Lover", "Attraction", "Marraige", "Enemy", "Sister"];
let modular_difference = count % 6;

console.log(relationship[modular_difference]);

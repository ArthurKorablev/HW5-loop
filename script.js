//1
for (let i = 20; i <= 30; i += 0.5){
    console.log(i);
}

//2
const rate = 27;
for (let i = 20; i <= 100; i += 10){
    console.log(i * rate);
}

//3
const num = prompt("type a number");
for (let i = 1; i <= 100; i++){
    if (Math.pow(i, 2) < num) console.log(i);
}

//4
const n = prompt('type another number');
const simpleNum = (num) => {
    let flag = false;
    for (let i = 2; i < num; i++){
        if (num % i == 0) {
            flag = true;
            
        }
    }
    if (flag) {
        alert('Not a simple number');
    } else {
        alert('This is a simple number');
    }     
}
simpleNum(n);

//5
const nbr = prompt('Type a number');
for (let i = 1; i < nbr; i++){
    if (Math.pow(3, i) == nbr) {
        alert('You CAN get this number this way');
        break;
    } else if (Math.pow(3, i) > nbr) {
        alert('You CANNOT get this number this way');
        break;
    }
}

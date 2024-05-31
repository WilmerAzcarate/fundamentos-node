// @ts-check
console.log("Hola mundo");

var i = 0;

function isActive(){
    if (i % 5 === 0){
        console.log("Me active!!!");
    } else {
        console.log("...");
    }
    i++;
}

setInterval(isActive,1000);

console.log("cruel");
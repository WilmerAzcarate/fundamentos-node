// @ts-check
/**
 * @param {Function} callback 
 */
function iAmAsync(callback) {
    setTimeout(function(){
       callback();
    },1000);
}

console.log("Starting");
iAmAsync(function () {
    console.log("I am an asincronous function");
});
console.log("Ending");
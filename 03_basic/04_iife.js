// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB connected`)
})();

((name) => {
    console.log(`DB Connected two ${name}`);
})("hitesh")
console.log("hello");

const devSrc = "https://deno.land/x/dev@v0.2.0/mod.js";
const {dev} = await import(devSrc);
console.log(dev);

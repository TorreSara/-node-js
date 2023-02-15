
let usuarios=require('./usuarios');
let resultadoOne=usuarios.per3;
let profesiones=require("./profesiones");
let resultado=Math.floor(Math.random()*(10-0))
let clave=Object.keys(profesiones);


    let claves=clave[resultado];
    console.log(Object.assign(resultadoOne,profesiones[claves]));   
import { restar } from "./utils";

console.log("100 - 50 = ", restar(100, 50)); 
console.log("50 - 10 = ", restar(50, 10));
console.log("20 - 15 = ", restar(20, 15));

function restarAsync(a,b){
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve (restar(a,b));
        }, 1000);
    });
}

async function pruebas() {
    const resultado1 = await restarAsync (100, 30);
    console.log ("El resultado asincrino de 100 - 30 es: ", resultado1);

    const resultado2 = await restarAsync (50, 20);
    console.log ("El Resultado asincrono de 50 - 20 es: ", resultado2);

    const resultado3 = await restarAsync (10, 8);
    console.log ("El resultado asincrono de 10 - 8 es: ", resultado3);
    
}

pruebas();

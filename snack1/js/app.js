/* 
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo. 
*/

// richiamiamo in una variabile l'input da html e inseiramo in button in una variabile

const numeroInserito = document.querySelector("[name='numberInsert']");
const submitButton = document.getElementById("submitButton");
//aggiungiamo l'evento al click
submitButton.addEventListener("click", function(){
const numInserito = document.getElementById("validation");
    //controlliamo se l'utente inserisce un valore valido nel form
    if(isNaN(numeroInserito.value)){
        //se non  sarà un numero allora facciamo comparire le scritte rosse ed avvisiamo l'utente che deve inserire un nunmero valido e usciamo con return
    numInserito.classList.add("text-danger");
    document.getElementById("form-number-1").classList.add("is-invalid");
    numInserito.innerHTML = `Non hai inserito un valore valido! Devi inserire un numero.`;
    return;
}else{
    //altrimenti confermiamo che ha inserito unn numero valido e andiamo avanti a verificare se il numero è pari o dispari
    numInserito.classList.add("text-success");
    document.getElementById("form-number-1").classList.add("is-valid");
    numInserito.innerHTML = `Valore Valido`;
}
const divStampaNumero = document.getElementById("stampaNumero");
let num = numeroInserito.value;
//verifichiamo il numero se è pari
if (num % 2 === 0) {
    //Se pari lo stampiamo normalmente
    divStampaNumero.innerHTML = `<h1 class="text-success text-center">Il numero inserito è pari</h1><div class="text-center text-success"><span class="fs-1">${num}</span></div>`
}else {
    //SE è dispari allora aggiungiamo 1 per stampare il numero successivo a quello inserito
    num++;
    divStampaNumero.innerHTML = `<h1 class="text-danger text-center">Il numero inserito è dispari</h1><div class="text-center text-danger"><span class="fs-1">Numero successivo: ${num}</span></div>`
}
})




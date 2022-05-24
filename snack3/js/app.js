/* 
Crea un array di numeri interi
e fai la somma di tutti gli elementi
che sono in posizione (indice) dispari
*/

// creeiamo un array con dei numeri
let arrayNumeri =[]
// verifichiamo gli indici e per tutti gli indici dispari facciamo una somma
const numInserito = document.querySelector("[name='numberInsert']");

const submitBtn = document.getElementById("submitButton")
submitBtn.addEventListener("click", function(){
    if(isNaN(numInserito.value || numInserito.value < 1)){
        //se non  sarà un numero allora facciamo comparire le scritte rosse ed avvisiamo l'utente che deve inserire un nunmero valido e usciamo con return
    numInserito.classList.add("text-danger");
    document.getElementById("form-number-1").classList.add("is-invalid");
    numInserito.innerHTML = `Non hai inserito un valore valido! Devi inserire un numero maggiore di 1.`;
    return;
}else{
    //altrimenti confermiamo che ha inserito unn numero valido e andiamo avanti a verificare se il numero è pari o dispari
    numInserito.classList.add("text-success");
    document.getElementById("form-number-1").classList.add("is-valid");
    numInserito.innerHTML = `Valore Valido`;
}
        for(let y=0; y < numInserito.value; y++){
            arrayNumeri[y] = Math.floor(Math.random()* 9999); 
        }
        let somma =0 ;
        const container = document.getElementById("stampaNumeri");
        const listUl = document.createElement("ul");
        container.append(listUl);   
        const listLi = document.createElement("li");
        listLi.classList.add("text-capitalize");
        listUl.append(listLi);
        for(let i=0; i < arrayNumeri.length; i++){
            if((i % 2 == 1)){
                console.log(arrayNumeri[i]);
                somma += arrayNumeri[i];
                console.log(somma)
            }
            
        }
        submitBtn.classList.add("disabled");
        listLi.append(somma.toString())
})

/* 

Crea due array che hanno un numero di elementi diversi.  
Aggiungi elementi all’array che ha meno elementi
fino a quando ne avrà tanti quanti l’altro.

*/
Math.floor(Math.random()* 999)
//creeiamo due array contenenti un numero diverso di elementi

const array1 = [] ;
const array2 = [] ;
const numArr1 = document.querySelector("[name='numberInsert1']");
const numArr2 = document.querySelector("[name='numberInsert2']");

const submitArray = document.getElementById("submitArray");

submitArray.addEventListener("click", function(){
    const numInserito1 = document.getElementById("validation1");
    const numInserito2 = document.getElementById("validation2");
    if(isNaN(numArr1.value)|| numArr1.value<1){
        //se non  sarà un numero allora facciamo comparire le scritte rosse ed avvisiamo l'utente che deve inserire un nunmero valido e usciamo con return
    numInserito1.classList.add("text-danger");
    document.getElementById("form-number-1").classList.add("is-invalid");
    numInserito1.innerHTML = `Non hai inserito un valore valido! Devi inserire un numero.`;
    return;
    }else if(numArr1.value === numArr2.value){
        numInserito1.classList.add("text-danger");
        document.getElementById("form-number-1").classList.add("is-invalid");
        numInserito1.innerHTML = `Non hai inserito un valore valido! Devi inserire un numero diverso dal campo 2.`;
    return;
    }else{
    //altrimenti confermiamo che ha inserito unn numero valido e andiamo avanti a verificare se il numero è pari o dispari
    numInserito1.classList.add("text-success");
    numInserito1.classList.remove("text-danger");
    document.getElementById("form-number-1").classList.add("is-valid");
    document.getElementById("form-number-1").classList.remove("is-invalid");
    numInserito1.innerHTML = `Valore Valido`;
}
if(isNaN(numArr2.value) || numArr2.value<1){
    //se non  sarà un numero allora facciamo comparire le scritte rosse ed avvisiamo l'utente che deve inserire un nunmero valido e usciamo con return
numInserito2.classList.add("text-danger");
document.getElementById("form-number-2").classList.add("is-invalid");
numInserito2.innerHTML = `Non hai inserito un valore valido! Devi inserire un numero o maggiore di 1`;
return;
}else if(numArr2.value === numArr1.value){
    numInserito2.classList.add("text-danger");
    document.getElementById("form-number-2").classList.add("is-invalid");
    numInserito2.innerHTML = `Non hai inserito un valore valido! Devi inserire un numero diverso dal campo 1.`;
return;
}else{
//altrimenti confermiamo che ha inserito unn numero valido e andiamo avanti a verificare se il numero è pari o dispari
numInserito2.classList.add("text-success");
numInserito2.classList.remove("text-danger");
document.getElementById("form-number-2").classList.add("is-valid");
document.getElementById("form-number-2").classList.remove("is-invalid");
numInserito2.innerHTML = `Valore Valido`;
}

//carichiamo il primo array
for(let i = 0; i < numArr1.value; i++){
    array1[i] = Math.floor(Math.random()* 999);
}
for(let y = 0; y < numArr2.value; y++){
    array2[y] = Math.floor(Math.random()* 999);
}


let diff = 0;
if (numArr1.value > numArr2.value) {
    diff = numArr1.value - numArr2.value;
    for(let i = 0; i < diff; i++){
    array2.push(Math.floor(Math.random()* 999));
    }
}else {
    diff = numArr2.value - numArr1.value;
    for(let i = 0; i < diff; i++){
        array1.push(Math.floor(Math.random()* 999));
        }
}
const container = document.getElementById("stampaNumeri");
const listUl1 = document.createElement("ul");
container.append(listUl1);
const listUl2 = document.createElement("ul");
listUl1.append("Array1")
listUl2.append("Array2")
container.append(listUl2); 
for(let i = 0; i< array1.length; i++){
        const listLi1 = document.createElement("li");
        listLi1.append(array1[i].toString()); 
        listUl1.append(listLi1);
        const listLi2 = document.createElement("li");
        listLi2.append(array2[i].toString()); 
        listUl2.append(listLi2);
}

})
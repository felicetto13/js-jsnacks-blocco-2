/* 

Generatore di “nomi cognomi” casuali: 
il Grande Gatsby ha  una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome. 

*/

// creeiamo due array che conterranno le liste dei nomi e cognomi

const listaNomi = ["pippo","francesco","alfredo","felice","giovanni"];
const listaCognomi = ["laterza","rossi","boccalon","bressan","biasi"];

// stampiamo in un container la lista ordinata con un ciclo for
const container1 = document.getElementById("container-1");
let nome = "";
for (let i = 0; i < listaNomi.length; i++) {
    const listUl = document.createElement("ul");
    const listLi = document.createElement("li");
    listLi.classList.add("text-capitalize");
    nome = listaNomi[i] +" "+ listaCognomi[i];
    listLi.append(nome) 
    listUl.append(listLi);
    container1.append(listUl);
    console.log(listaNomi)
    console.log(listaCognomi)
}

//tramite un pulsante "Genera" creiamo una lista disordinata mischiando nomi e cognomi
const submitButton = document.getElementById("submitButton");
const container2 = document.getElementById("stampaNomi");
let click = 0;
submitButton.addEventListener("click", function (){
    let indexNomi = 0;
    let indexCognomi = 0;
    
    if(click !== 1){
        for(let i=0; i<listaNomi.length; i++){
        indexNomi = Math.floor((Math.random()* listaNomi.length));
        indexCognomi = Math.floor((Math.random()* listaCognomi.length));
        const listUl = document.createElement("ul");
        container2.append(listUl);   
        const listLi = document.createElement("li");
        listLi.classList.add("text-capitalize");
        nome = listaNomi[indexNomi] +" "+ listaCognomi[indexCognomi];
        listLi.append(nome) 
        listUl.append(listLi);
    }
    }
    click = 1;
    
}
)

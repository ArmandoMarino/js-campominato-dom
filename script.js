console.log("JS OK!");


// Consegna
// L'utente clicca su un bottone che genererà una
// griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata
// si colora di azzurro ed emetto un messaggio in console
// con il numero della cella cliccata.
// MILESTONE 1
// Prepariamo l'HTML ed il CSS per ottenere
// il risultato grafico che vediamo nell'immagine allegata.
// MILESTONE 2
// Rimuoviamo le celle che abbiamo inserito nell'HTML
// in modo da generarle tramite JS. Al click del bottone play,
//  vengono generate 100 celle in 10 righe da 10 celle ciascuna.
// MILESTONE 3
// In ogni cella, deve comparire il numero corrispondente,
//  in ordine da 1 a 100;
// #MILESTONE 4
// Al click sulla cella, stampiamo il numero della cella
//  cliccata in console, poi coloriamo la cella d'azzurro!
// BONUS
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Note:
// - questo bonus richiederà una riflessione extra per quel che riguarda il calcolo della larghezza delle celle ;)

// GET ELEMENT BY ID
// GRID
const grid = document.getElementById("grid");
console.log(grid);
// BUTTON PLAY
const playButton = document.getElementById("play-button");
console.log(playButton);
// LEVEL BUTTON
level = document.getElementById("level");
// HEADER PLAY MATCH
const headerPlay = document.getElementById("play-match");
console.log(headerPlay);

// UTILS





// FUNZIONI-----------------

//? FUNZIONE PER CREARE LA CELLA con NUMERI
function createCell(content, className){
    const cell = document.createElement('div');
    cell.append(content);
    cell.classList.add ('cell', className);
    cell.classList.add ('active');
    cell.setAttribute("data-index", content);
    return cell;
}

// ?------------------------------

// EVENT LISTENER SUL BUTTONE PLAY-------------
playButton.addEventListener("click", function(){

let rows ;
let cols ;
    
let levelValue = level.value;
console.log(levelValue);
    
headerPlay.classList.add("d-none");

switch (levelValue){
    case 'medium':
        cols = rows = 9;
        break;
    case 'hard':
        cols = rows = 7;
        break;
    case 'easy':
        default:
        cols = rows = 10;
}

const totalCells = rows * cols;
    console.log(totalCells + " " + "CELLE TOTALI");
// CPU RANDOM NUMBERS = BOMB
const randoms = []
const generateRandomNumbers = (min, max, times) => {
    for (let i = 0; i < times; i++) {
        randoms.push(Math.floor(Math.random() * (max - min) + min))
    }

    return randoms
}

generateRandomNumbers(1,100,16);
    console.log(randoms + "randoms");

// RENDER CELLS WITH FOR
for (let i = 1; i <= totalCells; i++ ){
 const cell = createCell(i, levelValue);

 grid.appendChild(cell);

 var clicks = 0;

 function onClick() {
   clicks += 1;
 };

//  EVENT LISTENER CLICK ON CELL
 cell.addEventListener("click", function(){
    cell.classList.add("clicked");
    console.log(i);

    onClick(cell);

    let message = "";

    if (randoms.includes(i)){
        cell.classList.add("bomb");
        message = alert("Hai calpestato una bomba!" + " " + "Il tuo punteggio è:" + clicks );

        const nodeList = document.querySelectorAll(".active");

        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].classList.add("disabled");
          }
        }if (i === 84 ){
            message = alert("Hai vinto!"+ " " + "Il tuo punteggio è :" + clicks);
            console.log(clicks + "clicks");
        }
    
        
 });



}



});
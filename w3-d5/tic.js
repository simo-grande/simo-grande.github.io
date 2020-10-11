/* eslint-disable  */
/* eslint-disable id-length */
"use strict";
let winners = new Array();
let player1Selections = new Array();
let player2Selections = new Array();
let timer;
let numberOfPlayers = 2;
let currentPlayer = 0;
let move = 0;
let points1 = 0;
let points2 = 0;
let size = 4;


function drawBoard() {
    let Parent = document.getElementById("game");
    let counter = 1;

    while (Parent.hasChildNodes()) {
        Parent.removeChild(Parent.firstChild);
    }

    for (let s = 0; s < 4; s++) {
        let row = document.createElement("tr");

        for (let r = 0; r < 4; r++) {
            let col = document.createElement("td");
            col.id = counter;


            let handler = function myFunc(e) {
                if (currentPlayer == 0) {
                    this.innerHTML = "X";
                    player1Selections.push(parseInt(this.id));
                    player1Selections.sort(function (a, b) {
                        return a - b;
                    });
                    d("player1").classList.remove("selected");
                    d("player2").classList.add("selected");
                } else {
                    this.innerHTML = "O";
                    player2Selections.push(parseInt(this.id));
                    player2Selections.sort(function (a, b) {
                        return a - b;
                    });
                    d("player1").classList.add("selected");
                    d("player2").classList.remove("selected");
                }

                if (checkWinner()) {
                    if (currentPlayer == 0) points1++;
                    else points2++;

                    document.getElementById("player1").innerHTML = points1;
                    document.getElementById("player2").innerHTML = points2;

                    reset();
                    drawBoard();
                } else if (player2Selections.length + player1Selections.length == 16) {
                    reset();
                    drawBoard();
                } else {
                    if (currentPlayer == 0) currentPlayer = 1;
                    else currentPlayer = 0;
                    return this.removeEventListener("click", myFunc());
                }
            };

            col.addEventListener("click", handler);

            row.appendChild(col);
            counter++;
        }

        Parent.appendChild(row);
    }

    loadAnswers();
}

function d(id) {
    let el = document.getElementById(id);
    return el;
}
function reset() {
    currentPlayer = 0;
    player1Selections = new Array();
    player2Selections = new Array();
    d("player1").classList.add("selected");
    d("player2").classList.remove("selected");
}

function loadAnswers() {
    winners.push([1, 2, 3, 4]);
    winners.push([5, 6, 7, 8]);
    winners.push([9, 10, 11, 12]);
    winners.push([13, 14, 15, 16]);
    winners.push([1, 5, 9, 13]);
    winners.push([2, 6, 10, 14]);
    winners.push([3, 7, 11, 15]);
    winners.push([4, 8, 12, 16]);
    winners.push([1, 6, 11, 16]);
    winners.push([4, 7, 10, 13]);
}

function checkWinner() {

    let win = false;
    let playerSelections = new Array();

    if (currentPlayer == 0) playerSelections = player1Selections;
    else playerSelections = player2Selections;

    if (playerSelections.length >= size) {
        // check if any 'winners' are also in your selections

        for (let i = 0; i < winners.length; i++) {
            let sets = winners[i]; // winning hand
            let setFound = true;

            for (let r = 0; r < sets.length; r++) {
                // check if number is in current players hand
                // if not, break, not winner
                let found = false;

                // players hand
                for (let s = 0; s < playerSelections.length; s++) {
                    if (sets[r] == playerSelections[s]) {
                        found = true;
                        break;
                    }
                }

                // value not found in players hand
                // not a valid set, move on
                if (found == false) {
                    setFound = false;
                    break;
                }
            }

            if (setFound == true) {
                win = true;
                break;
            }
        }
    }

    return win;
}

window.addEventListener("load", drawBoard);